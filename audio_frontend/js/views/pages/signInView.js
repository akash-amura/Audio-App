define([
    'underscore',
    'marionette',
    'text!templates/sign_in_template.html'
],function(_, Marionette, SignInTemplate){
  return Marionette.ItemView.extend({
    template: _.template(SignInTemplate),

    triggers:{
      "click #sign-in-submit":"submit:signIn",
      "click #register-link": "goto:register"
    },

    onRender: function(){
      console.log('in on render');
      console.log(this.$el);
    },

    onShow: function(){
      console.log('in on show');
    },

    onGotoRegister: function(){
      console.log('click!');
      Backbone.history.navigate('register',{trigger:true});
    },
  });
});
