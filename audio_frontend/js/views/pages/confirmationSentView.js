define([
  'underscore',
  'marionette',
  'text!templates/confirmation_sent_template.html'
],function(_,Marionette, ConfirmationSentTemplate){
  return Marionette.ItemView.extend({
    template: _.template(ConfirmationSentTemplate)
  });
});
