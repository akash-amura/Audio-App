define([
    'marionette',
    'text!templates/basic_template.html'
],function(Marionette,BasicTemplate){

  return Marionette.Layout.extend({
    template:_.template(BasicTemplate),

    regions:{
      header: "#header",
      footer: "#footer",
      main: "#main"
    }
  });
});
