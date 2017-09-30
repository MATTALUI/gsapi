const express = require('express');
const app = express();
const gamesRoute = require('./routes/games.js');




// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/oweMe');
// const db = mongoose.connection;
// db.on('error', ()=>{console.log('there was an error connecting to the database');});
// db.on('open',()=>{
//   console.log('success!');
// })












app.get('/', function(req,res,next){
  res.send('This is the API for gameShop.')
})
app.use('/games', gamesRoute);
app.use('/', function(req,res,next){
  res.sendStatus(404);
});


app.listen(8000,()=>{console.log('listening on 8000');});
