/*jslint nodejs: true*/

'use strict';

var express = require('express'),
    cors = require('cors'),
    port = process.env.PORT || 3000,
    app = express();

app.get('/no-cors', function(req, res){
  res.json({
    text: 'You should not see this via a CORS request.'
  });
});

app.get('/simple-cors', cors(), function(req, res){
  res.json({
    text: 'Simple CORS requests are working. [GET]'
  });
});
app.head('/simple-cors', cors(), function(req, res){
  res.send(204);
});
app.post('/simple-cors', cors(), function(req, res){
  res.json({
    text: 'Simple CORS requests are working. [POST]'
  });
});

app.del('/complex-cors', cors(), function(req, res){
  res.json({
    text: 'Complex CORS requests are working. [DELETE]'
  });
});

if(!module.parent){
  app.listen(port, function(){
    console.log('Express server listening on port ' + port + '.');
  });
}
