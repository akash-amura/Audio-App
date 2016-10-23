define([
    'marionette',
    'routers/welcome_router',
],function(Marionette, WelcomeRouter){


  var initialize = function(){

    var welcomeRouter = WelcomeRouter.initialize(); 
    // Instantiate the app
    var app = new Backbone.Marionette.Application();

    // Add routers
    app.addInitializer(function(){
      //Routers go here
      welcomeroutes = new welcomeRouter();
      //histroy
      Backbone.history.start();
    });

    return app;
  };

  return {
    initialize: initialize
  };
});
