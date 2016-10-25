/*global define */
define([
  'jquery',
	'app',
  'marionette',
  'views/PageView'
], function ($ ,app, Marionette, PageView) {
	'use strict';

  var pagesController = Marionette.Controller.extend({
      index: function() {
        console.log('In route /');
        var pageView = new PageView();
        window.logged_in = false;
        pageView.render();
      }
  });

  return new pagesController();

});
