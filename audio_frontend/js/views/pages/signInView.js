define([
    'marionette',
    'text!templates/sign_in_template.html'
],function(Marionette,SignInTemplate){
  return Marionette.ItemView.extend({
    template: _.template(SignInTemplate),
  });
});
