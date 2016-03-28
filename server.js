/*
 *	Super simple backend that accepts oauth callback requests
 *  on {{host}}/oauth/callback.
 *
 *	@author Audun Follegg (audunfo@gmail.com)
 */
var express = require('express');
var url = require('url');

var app = express();
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');

app.get('/oauth/callback', function(req, res){
	res.sendStatus(200);
});

app.get('/', function(req, res){
	res.send('Simple API backend for instaSwipe');
		
});

app.listen(app.get('port'), app.get('ip'));
/*app.listen(app.get('port'), function() {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});*/

module.exports = app;

