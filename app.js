var Twitter = require('twitter')
var config = require('./config.js')

// Configure twitter with our API keys
var T = new Twitter(config)

// Set up your search parameters
// q: A UTF-8, URL-encoded search query of 500 characters maximum
// count: The number of tweets to return per page
// result_type: return only the most recent results in the response
// lang: only english language tweets

var params = {
  q: '#blockchain',
  count: 10,
  result_type: 'recent',
  lang: 'en'
}

T.get('search/tweets', params, function (err, data, response) {
  if (err) throw err

  console.log(data.statuses)


})
