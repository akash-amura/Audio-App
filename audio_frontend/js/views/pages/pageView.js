/*global define */
define([
  'jquery',
	'marionette',
	'text!templates/basic_template.html',
	'text!templates/header_template.html',
	'text!templates/footer_template.html',
	'text!templates/sign_in_template.html',
  'underscore',
], function ($, Marionette, BasicTemplate,HeaderTemplate,FooterTemplate,SignInTemplate,_) {
	'use strict';

	return Marionette.ItemView.extend({
    template: _.template(BasicTemplate),
    triggers:{
     'click #profile':'show:profile'
    },
    onShowProfile: function(event){
      alert('show profile and its settings!');
    },
    onRender:function(){
      var menuBarItems = new Array("Catalog","Playlists","Shuffle")
      var selector = this.$el;
      selector.find("#header").append(_.template(HeaderTemplate));
      selector.find("#footer").append(_.template(FooterTemplate));
      menuBarItems.forEach(function(element){
        selector.find("#navbar-items-left").append("<li><a href=\"#\">"+element+"</a></li>");
      });
      selector.find("#navbar-items-right").append("<li><a href=\"#\" id=\"profile\">Profile</a></li>");
      $("body").append(this.$el);
    }
	});
});
