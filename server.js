const express = require('express');
const mongoose = require('mongoose');
const app = express();
const gamesRoute = require('./routes/games.js');
mongoose.connect('mongodb://localhost:27017/gameShop');
const db = mongoose.connection;




db.on('open',()=>{


  app.get('/', function(req,res,next){
    res.send('This is the API for gameShop.')
  })


  app.use('/games', gamesRoute);


  app.use('/', function(req,res,next){
    res.sendStatus(404);
  });


  app.listen(8000,()=>{
    console.log('listening on 8000');
  });
});
