/*global define */
define([
  'jquery',
	'app',
  'marionette',
  'views/pages/PageView',
  'views/pages/signInView',
  'layouts/pagesLayout'
], function ($ ,app, Marionette, PageView,SignInView,PageLayout) {
	'use strict';

  var pagesController = Marionette.Controller.extend({
      index: function() {
        console.log('In route /');
        var pageView = new PageView();
        window.logged_in = false;
        //pageView.render();
        var pageLayout = new PageLayout();
        console.log(pageLayout);
        console.log(pageLayout.render());

        pageLayout.main.show(new SignInView());
      }
  });

  return new pagesController();

});
