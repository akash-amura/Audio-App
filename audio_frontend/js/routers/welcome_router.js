define([
  'marionette',
  'controllers/welcome_controller'
],function(Marionette,WelcomeController){

  var initialize = function(){

    var welcomeController = WelcomeController.initialize();
    var WelcomeRouter = Backbone.Marionette.AppRouter.extend({
        controller: new welcomeController(),
        appRoutes:{
          "":"index"
        }
    });
    return WelcomeRouter;

  };

  return {
    initialize: initialize
  }

});
