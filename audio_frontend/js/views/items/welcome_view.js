define([
  'jquery',
  'underscore',
  'marionette',
  'text!templates/basic_template.html'
],function( $, _, Marionette, BasicTemplate){

  var initialize = function(){

    var WelcomeView = Backbone.Marionette.ItemView.extend({
      initialize: function(){
      },

      template:_.template(BasicTemplate), 

      onRender: function(){
        console.log("in render");
        var menuBarItems = new Array("Catalog","Playlists","Shuffle")
        var selector = this.$el;
        menuBarItems.forEach(function(element){
          selector.find("#navbar-items-left").append("<li><a href=\"#\">"+element+"</a></li>");
        });
        selector.find("#navbar-items-right").append("<li><a href=\"#\">SignIn/SignUp</a></li>");
      }
    });
    return WelcomeView;
  };

  return{
    initialize: initialize
  }
});
