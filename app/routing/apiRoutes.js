// The apiRoutes.js file includes two basic routes for app.get function and app.post function which used for displaying a JASON data and incoming survey results of all possible friends:
// The app.post(in the apiRoutes.js) used to handle the compatible logic.


var friends = require('../data/friends.js');

// Routing the apiRoutes with the app.get and app.post functions
module.exports = function (app) {
    // The app.get request handles when user 'visits' a page
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    // The app.post request handles when a user submits a form and thus submits data to the surver
    app.post('/api/friends', function (req, res) {
        // loop through all of the possible options
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };