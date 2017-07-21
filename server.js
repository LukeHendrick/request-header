// server.js
var express = require('express');
var app = express();
var url = require('url');

app.use(express.static('public'));

app.get("/", function (request, response) {
  var userAgent = request.headers['user-agent'].slice(13, 46);
  var lang = request.headers['accept-language'].slice(0,5);
  var ip = request.headers['x-forwarded-for'];
  var index = ip.indexOf(',');
  var ip = ip.slice(0,index);
  var res = {
    "ipaddress": ip,
    "language": lang,
    "software": userAgent
  }
  console.log(res);
  response.send(res);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
