const mongoose = require('mongoose');
const router = require('express').Router();
const {Game} = require('../db/schema.js');



router.get('/',function(req,res,next){
  Game.find((error, allGames)=>{
    res.send(allGames);
  });
});
router.get('/:id', function(req,res,next){
  Game.find({_id: req.params.id},(error,game)=>{
    res.send(game);
  });
});

router.post('/', function(req,res,next){
  let newGame = new Game(req.body);
  newGame.save((error,game)=>{
    res.send(game)
  })
});
router.delete('/:id', function(req,res,next){
  Game.find({_id: req.params.id}).remove((error, game)=>{
    res.send(game)
  })
});


module.exports = router;
