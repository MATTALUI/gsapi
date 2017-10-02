const mongoose = require('mongoose');
// mongoimport -d gameShop -c games  --file ./db/gameSeeds.js --jsonArray

var gameSchema = mongoose.Schema({
  title: String,
  price: Number,
  platforms: Array,
  'ESRB-rating': String,
  rating: Number,
  genre: String,
  cover: String,
  description: String
}, {collection: 'games', versionKey: null});



module.exports = {
  Game: mongoose.model('Game', gameSchema)
};
