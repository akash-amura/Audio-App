/*global define */

define([
    'backbone',
	'marionette',
], function (Backbone, Marionette) {
	'use strict';

	var app = new Marionette.Application();

  app.on("initialize:after", function(options){
      if (Backbone.history){
          Backbone.history.start({pushState:true});
      }
  });

	return window.app = app;
});
