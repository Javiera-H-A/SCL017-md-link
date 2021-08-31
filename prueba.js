const request = require('sync-request');
let res = request('GET', 'https://www.flickr.com/photos/404error1');
console.log(res.statusCode);