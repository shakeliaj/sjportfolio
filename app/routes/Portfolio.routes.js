
var Portfolio = require('../models/portfolioItems');

//expose the routes via module exports
module.exports = function(app){

  app.get('/portfolio', function(req, res) {

    Portfolio.find(function(err, pfitems){

        if(err){
          res.send(err);
        }else{
          res.json(pfitems);
        }
    });
  });
};
