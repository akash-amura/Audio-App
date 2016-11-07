/*global define */

define([
	'marionette'
], function (Marionette) {
	'use strict';

	return Marionette.AppRouter.extend({
		appRoutes: {
      '': 'index',
      'register':'register',
      'confirmation_sent':'confirmation_sent'
		}
	});
});
