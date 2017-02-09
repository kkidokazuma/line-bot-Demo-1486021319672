/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

//Lineからのデータをもらう
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//Lineへ送る
var request = require('request');

//watson
//var watson = require('watson-developer-cloud');
/*var username = '28aeb4cc-22d0-4261-a89c-bbc75fab34fb';
var password = 'pPqgxASkaxVJ';
var classifier_id = '';
var natural_language_classifier = watson.natural_language_classifier({
  username: username,
  password: password,
  version: 'v1'
});*/

/*app.post('/api', function(req, res) {
	natural_language_classifier.list({},
	  function(err, response) {
	      if (err)
	          console.log('error:', err);
	        else
	          //console.log(JSON.stringify(response, null, 2));
	          var classifiers = response.classifiers;
	          var options = {
			    method: 'POST',
			    uri: 'https://api.line.me/v2/bot/message/reply',
			    body: {
			      replyToken: req.body.events[0].replyToken,
			      messages: [{
			        type: "text",
			        text: classifiers[0].name
			      }]
			    },
			    auth: {
			      bearer: '7l+bp0R0SNWVmWUD1QDCB6w0YoBjUmsTjp3zsJfl90Gl6uZZGgOw1VT25JfnPzz8xyhYYMZDmgsN8hd222qfd+QGVsZ5AsENs22VguuQBYpGuXgtHK6i413DyKT4tZxCRO3+ckrwXYWikNLRaNGPUQdB04t89/1O/w1cDnyilFU=' // ここは自分のtokenに書き換える
			    },
			    json: true
			  };
			  request(options, function(err, res, body) {
			    console.log(JSON.stringify(res));
			  });
			  res.send('OK');
  });  
});*/
app.post('/api', function(req, res) {
  var options = {
    method: 'POST',
    uri: 'https://api.line.me/v2/bot/message/reply',
    body: {
      replyToken: req.body.events[0].replyToken,
      messages: [{
        type: "text",
        text: "test"
      }]
    },
    auth: {
      bearer: '7l+bp0R0SNWVmWUD1QDCB6w0YoBjUmsTjp3zsJfl90Gl6uZZGgOw1VT25JfnPzz8xyhYYMZDmgsN8hd222qfd+QGVsZ5AsENs22VguuQBYpGuXgtHK6i413DyKT4tZxCRO3+ckrwXYWikNLRaNGPUQdB04t89/1O/w1cDnyilFU=' // ここは自分のtokenに書き換える
    },
    json: true
  };
  request(options, function(err, res, body) {
    console.log(JSON.stringify(res));
  });
  res.send('OK');
});

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));



// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
