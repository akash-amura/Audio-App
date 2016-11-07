/*global define */
define([
  'jquery',
	'app',
  'marionette',
  'views/pages/signInView',
  'views/pages/signUpView',
  'views/pages/confirmationSentView',
  'views/pages/errorView',
  'layouts/pagesLayout',
  'pubsub-js',
  'jToker',
  'text!templates/error_template.html',
  'underscore'
], function ($ ,app, Marionette, SignInView, SignUpView,ConfirmationSentView, ErrorView,PageLayout,PubSub,Auth,ErrorTemplate,_) {
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
        var confirmationSentView = new ConfirmationSentView();
        var errorView = new ErrorView({template: _.template(ErrorTemplate,{msg:"error"})});
        console.log(errorView);
        pageLayout.main.show(signUpView);
        signUpView.onSubmitSignUp = function(){
          console.log('click!');
          var email = $("#inputEmail").val();
          var password = $("#inputPassword").val();
          var password_confirmation = $("#inputPasswordConfirmation").val();
          console.log(email);
          console.log(password);
          console.log(password_confirmation);
          PubSub.subscribe('auth.emailRegistration.success', function(ev, msg) {
            //alert('Check your email!');
            pageLayout.main.show(confirmationSentView);
            console.log(msg);
          });
          PubSub.subscribe('auth.emailRegistration.error', function(ev, msg) {
            alert('There was a error submitting your request. Please try again!');
            console.log(msg);
            pageLayout.message.show(errorView);
          });

          Auth.configure({
            apiUrl:"http://localhost:3000"
          });
          Auth.emailSignUp({
            email: email, 
            password: password, 
            password_confirmation: password_confirmation 
          });
        };
      },
      confirmation_sent: function(){
        console.log('in route /confirmation_sent');
        pageLayout.render();
        var confirmationSentView = new ConfirmationSentView();
        pageLayout.main.show(confirmationSentView);
      },
  });

  return new pagesController();

});
