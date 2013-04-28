/*jslint nodejs: true*/

'use strict';

var express = require('express'),
    port = process.env.PORT || 3000,
    app = express();

app.get('/example', function(req, res){
  res.json({
    text: 'This is an example.'
  });
});

if(!module.parent){
  app.listen(port, function(){
    console.log('Express server listening on port ' + port + '.');
  });
}
