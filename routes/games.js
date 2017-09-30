const router = require('express').Router();
const queries = require('../db/queries.js');
router.get('/',function(req,res,next){
  console.log(queries);
  res.send('games');
});
module.exports = router;
