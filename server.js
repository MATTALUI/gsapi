'use strict';
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const gamesRoute = require('./routes/games.js');
mongoose.connect('mongodb://localhost:27017/gameShop');
const db = mongoose.connection;




db.on('open',()=>{
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(function (req, res, next) {
    res.removeHeader("X-Powered-By");
    res.set({'X-who-stole-the-cookies-from-the-cookie-jar': 'matt'});
    next();
  });

  app.use('/', function(req,res,next){
    if(!req.headers.authorization){
      res.sendStatus(401)
    }else{
      let auth = req.headers.authorization.split(' ')[1];
      let translated = new Buffer(auth, 'base64').toString('ascii');
      let username = translated.split(':')[0];
      let password = translated.split(':')[1];
      // console.log('Username: ',username,'\nPassword: ',password);
      if(username != process.env.USERNAME || password != process.env.PASSWORD){
        res.sendStatus(401)
      }else{
        next();
      }
    }
  });
  app.get('/', function(req,res,next){
    res.send('This is the API for gameShop.');
  });


  app.use('/games', gamesRoute);


  app.use('/', function(req,res,next){
    res.sendStatus(404);
  });


  app.listen(8000,()=>{
    console.log('listening on 8000');
  });
});
