'use strict';

var request = require('request');

var getDankest = function getDankest(timeLimit, numLimit, callback) {
	let url = 'https://www.reddit.com/r/dankmemes/top.json?sort=top&t=' + timeLimit + '&limit=' + numLimit;
	
	request({ 
		method: 'GET', 
		uri: url
	}, function (err, response, data) {
		if(err) {
			callback(err, null);
			return;
		}

		data = JSON.parse(data);
		var mainObj = data.data.children;	
		var urls = {};
		
		for(let i = 0; i < mainObj.length; i++) {
			let url = mainObj[i].data.preview.images[0].source.url;
			urls[i+1] = url; 
		}
		
    	callback(null, urls);
    })
  	.on('error', function(err) {
  		callback(err, null);
  	});
}

module.exports = getDankest;