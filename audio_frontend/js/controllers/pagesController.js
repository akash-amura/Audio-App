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

  var pagesController = Marionette.Controller.extend({
      index: function() {
        console.log('In route /');
        var pageLayout = new PageLayout();
        console.log(pageLayout);
        pageLayout.render();
        var signInView = new SignInView();
        var signUpView = new SignUpView();
        signInView.on("submit:signIn",function(args){
          alert('click!');
        });
        signInView.on("goto:register",function(args){
          pageLayout.main.show(signUpView);
        });

        signUpView.on("submit:signUp",function(args){
          alert('click!');
        });
        signUpView.on("goto:login",function(args){
          pageLayout.main.show(signInView);
        });
        pageLayout.main.show(signInView);
        console.log(pageLayout);
      }
  });

  return new pagesController();

});
