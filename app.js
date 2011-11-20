
/**
 * Module dependencies.
 */

var express = require('express'),
    jsdom = require('jsdom'),
	request = require('request'),
	url = require('url'),
    routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes
app.get('/', routes.index);
app.get('/getvideos',function(req,res){
	request({uri:'http://youtube.com'},function(err,response,body){
		var me = this;
		me.items = [];

		if(err && response.statusCode !== 200){console.log('Request error to youtube.com');}

		//setup the dom enviroment to parse the response in nodejs
		jsdom.env({
			html	: body,
			scripts	: [
				'http://code.jquery.com/jquery-1.6.min.js',
				'https://raw.github.com/douglascrockford/JSON-js/master/json2.js'
			]
		}, function(err, window){
			//process the youtube response. 
			//we're extracting information from the main page of youtube
			var $ = window.jQuery,
				$body = $('body'),
				$videos = $body.find('.video-entry');
				
				$videos.each(function (i, item) {
					var $a = $(item).children('a'),

					//first anchor element which is children of our .video-entry item
					$title = $(item).find('.video-title .video-long-title').text(),

					//video title
					$time = $a.find('.video-time').text(),

					//video duration time
					$img = $a.find('span.clip img'); //thumbnail
			
					//and add all that data to my items array
					me.items[i] = {
						id		: $a.attr('href').substring(9,20),
						href	: $a.attr('href'),
						title	: $title.trim(),
						time	: $time,
						
						//there are some things with youtube video thumbnails, those images whose data-thumb attribute
						//is defined use the url in the previously mentioned attribute as src for the thumbnail, otheriwse
						//it will use the default served src attribute.
						thumbnail	: $img.attr('data-thumb') ? $img.attr('data-thumb') : $img.attr('src'),
						urlObj		: url.parse($a.attr('href'), true) //parse our URL and the query string as well
					};
				});

				//expose the data
				res.end(JSON.stringify(me.items));
				console.log("Done");
		});
	});
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
