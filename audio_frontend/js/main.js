require.config({
  paths:{
    jquery:'libs/jquery/dist/jquery',
    underscore:'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    marionette: 'libs/backbone.marionette',
    wreqr: 'libs/backbone.wreqr',
    babysitter: 'libs/backbone.babysitter',
    templates: '../templates',
    bootstrap:'libs/bootstrap/dist/js/bootstrap'
  },

  shim:{

    "jquery":{
      exports: "$"
    },
    "underscore":{
      exports: "_"

    },
    "backbone":{
      deps:["underscore","jquery"],
      exports: "Backbone"
    },
    "marionette":{
      deps:["backbone","wreqr","babysitter"],
      exports:"Marionette"
    },
    "bootstrap":{
      deps:["jquery"],
    }

  }
});

require(['jquery','app','bootstrap'],function($,App){

  $(document).ready(function(){
    App.initialize().start();
  });

});
