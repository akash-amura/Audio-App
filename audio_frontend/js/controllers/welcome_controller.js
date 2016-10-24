define([
  'jquery',
  'marionette',
  'views/items/welcome_view'
],function($, Marionette, WelcomeView){

  var initialize = function(){

    var welcomeView = WelcomeView.initialize();
    var welcomeView = new welcomeView();


    var WelcomeController = Marionette.Controller.extend({
      initialize: function(){
      },
      index: function(){
        console.log('in welcome controller: index action');
        $("body").prepend(welcomeView.render().$el.html());
      }
    });
    return WelcomeController;

  };

  return{
    initialize: initialize
  }
});
