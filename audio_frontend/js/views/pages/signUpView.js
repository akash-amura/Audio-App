define([
    'jquery',
    'underscore',
    'marionette',
    'text!templates/sign_up_template.html',
    'pubsub-js',
    'jToker'
],function($, _, Marionette, SignInTemplate,PubSub,Auth){
  return Marionette.ItemView.extend({
    template: _.template(SignInTemplate),

    triggers:{
      "click #sign-up-submit":"submit:signUp",
      "click #login-link":"goto:login"
    },

    onRender: function(){
      console.log('in on render');
    },

    onShow: function(){
      console.log('in on show');
    },

    onGotoLogin: function(){
      console.log('click!');
      Backbone.history.navigate('/',{trigger:true});
    },

    onSubmitSignUp: function(){
      console.log('click!');
      email = $("#inputEmail").val();
      password = $("#inputPassword").val();
      password_confirmation = $("#inputPasswordConfirmation").val();
      console.log(email);
      console.log(password);
      console.log(password_confirmation);
      PubSub.subscribe('auth.emailRegistration.success', function(ev, msg) {
        alert('Check your email!');
        console.log(msg);
      });
      PubSub.subscribe('auth.emailRegistration.error', function(ev, msg) {
        alert('There was a error submitting your request. Please try again!');
        console.log(msg);
      });
      Auth.emailSignUp({
        email: email, 
        password: password, 
        password_confirmation: password_confirmation 
      });
    },
  });
});
