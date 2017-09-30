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

router.patch('/:id',function(req,res,next){
  Game.findByIdAndUpdate(req.params.id,req.body,(error,effected)=>{
    res.send(effected);
  })
});

router.delete('/:id', function(req,res,next){
  Game.findByIdAndRemove(req.params.id, (error,deleted)=>{
    res.send(deleted);
  });
});


module.exports = router;
