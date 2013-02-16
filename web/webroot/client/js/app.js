define([
    'jquery',
    'backbone',
    'marionette',
    'collections/OrderedNodeCollection',

    'views/left/MechSearchViewPane'

], function ($, Backbone, Marionette, OrderedNodeCollection, MechSearchViewPane) {
    "use strict";

    var app = new Marionette.Application();
    var entityCollection = new OrderedNodeCollection();

    app.addRegions({
        left: '#left',
        viewport: '#viewport',
        right: '#right'

    });

    app.addInitializer(function () {

        app.left.show(new MechSearchViewPane());
    });


    app.on('initialize:after', function () {


        Backbone.history.start();
    });

    return app;
});