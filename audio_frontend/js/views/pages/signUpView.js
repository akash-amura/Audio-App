define([
    'underscore',
    'marionette',
    'text!templates/sign_up_template.html'
],function(_, Marionette, SignInTemplate){
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
  });
});
