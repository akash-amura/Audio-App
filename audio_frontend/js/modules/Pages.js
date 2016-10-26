/**
 * Created by anis on 4/22/14.
 */
define([
    'app',
    'marionette',
    'routers/pagesRouter',
    'controllers/pagesController'
], function(app, Marionette, Router, Controller){
    console.log('Module:Pages => Loading...');
    var PagesModule = app.module("Pages", function(Pages) {
        this.startWithParent = false;

        this.addInitializer(function(){
            console.log('Module:Pages => initialized');

            this.router = new Router({ controller: Controller });
        });
    });


    return PagesModule;
});
