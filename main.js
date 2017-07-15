$(document).ready(function () {


getJoke();


var twitter_link = "https://twitter.com/intent/tweet?text=";



$('#new_joke').on('click', function(e) {
  getJoke();
  });

  function getJoke(){
    $.ajax( {
      url: 'https://icanhazdadjoke.com/',
    type: "GET",
    headers : {
        'Accept' : 'application/json'
    },
      success: function(data) { 
      $( "#joke_text" ).html(data.joke);
      
      twitter_link = twitter_link + data.joke;
      twitter_link = encodeURI(twitter_link);

      $("#twitter_link").attr('href',twitter_link);
 
      },
    });

  }



});