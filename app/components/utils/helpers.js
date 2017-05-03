// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Helper functions (in this case the only one is runQuery)
var helpers = {

  runQuery: function(searchterm) {

    console.log(searchterm);

    // Figure out the geolocation
    var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+authKey + "&q="+searchterm;

    return axios.get(queryURLBase).then(function(response) {

      console.log(response.data.response.docs);
      return response.data.response.docs;
    });
  },
  searchArticles: function() {
    return axios.get("/search");
  }
};

// We export the helpers object (which contains runQuery)
module.exports = helpers;