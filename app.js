/*jslint nodejs: true*/

'use strict';

var express = require('express');
var cors = require('cors');
var port = process.env.PORT || 3000;
var app = express();

/* -------------------------------------------------------------------------- */

app.get('/no-cors', (req, res) => {
  res.json({
    text: 'You should not see this via a CORS request.'
  });
});

/* -------------------------------------------------------------------------- */

app.get('/simple-cors', cors(), (req, res) => {
  res.json({
    text: 'Simple CORS requests are working. [GET]'
  });
});
app.head('/simple-cors', cors(), (req, res) => {
  res.send(204);
});
app.post('/simple-cors', cors(), (req, res) => {
  res.json({
    text: 'Simple CORS requests are working. [POST]'
  });
});

/* -------------------------------------------------------------------------- */

app.options('/complex-cors', cors());
app.del('/complex-cors', cors(), (req, res) => {
  res.json({
    text: 'Complex CORS requests are working. [DELETE]'
  });
});

/* -------------------------------------------------------------------------- */

var issue2options = {
  origin: true,
  methods: ['POST'],
  credentials: true,
  maxAge: 3600
};
app.options('/issue-2', cors(issue2options));
app.post('/issue-2', cors(issue2options), (req, res) => {
  res.json({
    text: 'Issue #2 is fixed.'
  });
});

if(!module.parent){
  app.listen(port, () => {
    console.log('Express server listening on port ' + port + '.');
  });
}
