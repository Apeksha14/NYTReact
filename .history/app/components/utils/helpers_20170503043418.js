// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var axios = require('axios');

var APIKey = '3dbfbf1bb1034c4bb5e8901725645c29';

var helpers = {

  runQuery: function(term, start, end)  {

    var term = term.trim();
    var start = start.trim() + "0101";
    var end = end.trim() + "1231";

    return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
          'api-key': APIKey,
          'q': term,
          'begin_date': start,
          'end_date': end
      }
    })

    .then(function(results){

      return results.data.response;

    });
  },

  getSaved: function(){

    return axios.get('/api/saved')
      .then(function(results){

        return results;
      })
  },

  postSaved: function(title, date, url){

    var newArticle = {title: title, date: date, url: url};
    return axios.post('/api/saved', newArticle)
      .then(function(results){
        return results._id;
      })

  },

  deleteSaved: function(title, data, url){

    return axios.delete('/api/saved', {
      params: {
          'title': title,
          'data': data,
          'url': url,
      }
    })
    .then(function(results){
      return results;
    })
  }

}

module.exports = helpers;


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