'use strict';

var port = process.env.PORT || 8130;
var gith = require('gith').create(port);
var exec = require('child_process').exec;

//gith({
//	repo: 'Spelter/furry-bear'
//}).on('all', function(payload){
//	console.log('received push on furry-bear, pulling master branch and restarting');
//	exec('cd /var/node/krane && git pull && bin/restart', function(error, stdout, stderr){
//		console.log(arguments);
//		console.log('operation finished' + (error ? 'with errors' : 'without errors'));
//	});
//});

gith().on('all', function(payload){
	console.log(foobar);
	console.log(payload);
});

console.log('server running on port ' + port);
