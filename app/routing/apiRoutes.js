// The apiRoutes.js file includes two basic routes for app.get function and app.post function which used for JASON data and
// results of all possible friends:

var friends = require('../data/friends.js');

// Routing the apiRoutes with the app.get and app.post functions
module.exports = function (app) {

    // The app.get request handles when you visit the page
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    // The app.post request is for the user when they submit the data to the form
    app.post('/api/friends', function (req, res) {
        // loop through all of the possible options
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
