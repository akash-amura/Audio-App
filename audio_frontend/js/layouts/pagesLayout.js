define([
    'underscore',
    'jquery',
    'marionette',
    'text!templates/basic_template.html'
],function(_, $, Marionette, BasicTemplate){

   return Marionette.Layout.extend({
    template:"#body-content",
    el: "body",
    regions:{
      header: "#header",
      footer: "#footer",
      main: "#main"
    },

    onRender: function(){
      console.log('in layout render');
    },
  });
});
