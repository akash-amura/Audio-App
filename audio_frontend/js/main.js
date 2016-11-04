require.config({
	paths: {
		underscore: '../bower_components/underscore/underscore',
		backbone: '../bower_components/backbone/backbone',
		marionette: '../bower_components/backbone.marionette/lib/backbone.marionette',
		jquery: '../bower_components/jquery/jquery',
		localStorage: '../bower_components/backbone.localStorage/backbone.localStorage',
    bootstrap: 'lib/bootstrap.min',
    templates: '../templates',
    'jquery.cookie': '../bower_components/lib/jquery.cookie',
    'jquery-deparam':'../bower_components/lib/jquery-deparam',
    'pubsub-js':'../bower_components/lib/pubsub',
    'jToker':'../bower_components/lib/jquery.j-toker'
	},

	shim: {
		underscore: {
			exports: '_'
		},

		backbone: {
			exports: 'Backbone',
			deps: ['jquery', 'underscore']
		},

		marionette: {
			exports: 'Backbone.Marionette',
			deps: ['backbone']
		},

    bootstrap: {
      deps: ['jquery']
    },

    'jToker':{
      deps:['jquery','jquery.cookie','jquery-deparam','pubsub-js'],
      exports:'jToker'
    }


	},
    waitSeconds: 60
});

require([
  'jToker',
  'pubsub-js',
	'app',
  'modules/Pages',
  'jquery',
	'bootstrap'
], function (Auth,PubSub,app, PagesModule) {
	'use strict';


   app.addInitializer(function() {
     PagesModule.start();
     Backbone.history.start({pushState:true});
   });

   app.start();
});
