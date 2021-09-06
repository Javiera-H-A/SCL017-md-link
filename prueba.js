const axios = require('axios');
const fetch= require('fetch')

axios.get('https://lhggvughbkgyvug.yigvytg.com')
  .then((response) => {
    
    console.log(response.status);
    console.log(response.statusText);
    
    
  }, (error) => {
  } );

  fetch.fetchUrl('https://www.flickr.com/photos/404error1', function(error, meta, body){
    console.log(meta.status);
    console.log(body);
});


  fetch.fetchUrl('https://lhggvughbkgyvug.yigvytg.com', function(error, meta, body){
    console.log(body);
});




