/*global define */
define([
  'jquery',
	'app',
  'marionette',
  'views/pages/signInView',
  'views/pages/signUpView',
  'layouts/pagesLayout'
], function ($ ,app, Marionette, SignInView, SignUpView, PageLayout) {
	'use strict';

  var pageLayout = new PageLayout();
  console.log(pageLayout);
  var pagesController = Marionette.Controller.extend({
      index: function() {
        console.log('In route /');
        console.log($.auth);
        pageLayout.render();
        var signInView = new SignInView();
        pageLayout.main.show(signInView);
      },
      register: function(){
        console.log('In route /register');
        pageLayout.render();
        var signUpView = new SignUpView();
        pageLayout.main.show(signUpView);
      }
  });

  return new pagesController();

});
