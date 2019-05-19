// The apiRoutes.js file includes two basic routes for app.get function and app.post function which used for JASON data and
// results of all possible friends:
var path = require('path');
var friends = require('../data/friends.js');

// Routing the apiRoutes with the app.get and app.post functions
module.exports = function(app) {

  // The app.get request handles when you visit the page
  app.get('/api/friends', function (req, res) {
    res.json(friendsArray);
  });
  // The app.post adds a new friend
  app.post('/api/friends', function (req, res) {
    //capture the user input object
    var userInput = req.body;
   // console.log('userInput = ' + JSON.stringfy(userInput));
    var userResponses = userInput.scores;
    //data to compute best friend match
    var matchName = "";
    var matchImage = "";
    var totalDifference = 1000;

      // goes through all the exisiting friends in the friend list
    for (var i = 0; i < friends.length; i++) {
     //console.log("friends");
      var diff = 0;

      for (var j = 0; j < userResponses.length; j++) {

          diff += Math.abs(friends[i].scores[j] - userResponses[j]);

        };

        if (diff < totalDifference){
          totalDifference = diff;
          matchName = friends[i].name;
          matchImage = friends[i].photo;
         // console.log(name);
        }

    };
    friends.push(userInput);
    res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
  });
};
