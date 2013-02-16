define([
    'jquery',
    'backbone',
    'marionette'

], function ($, Backbone, Marionette) {
    "use strict";


    var app = new Marionette.Application();
    app.addRegions({

        displayPane: '#displayPane',
        selectionPane: '#selectionPane'

    });

    app.addInitializer(function () {

    });


    app.on('initialize:after', function () {
        Backbone.history.start();
    });

    return app;
});