const mongoose = require('mongoose');
const router = require('express').Router();
const {Game} = require('../db/schema.js');



router.get('/',function(req,res,next){
  Game.find((error, allGames)=>{
    res.send(allGames);
  });
});

router.post('/', function(req,res,next){
  minecraft.save((error, game)=>{
    res.send(game)
  })
});


module.exports = router;
