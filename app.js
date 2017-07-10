require('dotenv').config()
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
  q: '#ethereum',
  count: 5,
  result_type: 'recent',
  lang: 'en'
}

T.get('search/tweets', params, function (err, data, response) {
  if (err) throw err

  data.statuses.forEach( (tweet, index) => {

    console.log(tweet.text , ' | ' , tweet.user.screen_name)


    // const id = { id: tweet.id_str }

    // T.post('favorites/create', id , function(err, response){
    //   if (err) throw err

    //     const username = response.user.screen_name;
    //     const tweetId = response.id_str;
    //     console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)

    // })

  })

})
