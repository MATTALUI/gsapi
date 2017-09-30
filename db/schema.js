const mongoose = require('mongoose');
var gameSchema = mongoose.Schema({
  title: String,
  price: Number,
  platforms: Array,
  'ESRB-rating': String,
  rating: Number,
  genre: String
});





module.exports = {
  Game: mongoose.model('Game', gameSchema)
};
