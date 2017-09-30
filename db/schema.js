const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gameShop');
const db = mongoose.connection;
//   var gameSchema = mongoose.Schema({
//     title: String,
//     price: Number,
//     platforms: Array,
//     'ESRB-rating': String,
//     rating: Number,
//     genre: String
//   });



module.exports = gameSchema;
// db.on('error', ()=>{console.log('there was an error connecting to the database');});
// db.on('open',()=>{
//   var gameSchema = mongoose.Schema({
//     title: String,
//     price: Number,
//     platforms: Array,
//     'ESRB-rating': String,
//     rating: Number,
//     genre: String
//   });
//   var Game = mongoose.model('Game', gameSchema);
//   var minecraft = new Game({
//     title: "Minecraft",
//     price: 23.00,
//     platforms: [''],
//     'ESRB-rating': 'Everyone',
//     rating: 4,
//     genre: "Survival Sandbox"
//   });
//   minecraft.save((err,game)=>{
//     console.log(game);
//   })
//   Game.find({title:"Dark Souls"}, (err, game)=>{
//     console.log(game);
//   });
//
// });
