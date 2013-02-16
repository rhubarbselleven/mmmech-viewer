define([
    'jquery',
    'backbone',
    'marionette',
    'collections/EntityCollection',

    'views/left/MechSearchViewPane'

], function ($, Backbone, Marionette, EntityCollection, MechSearchViewPane) {
    "use strict";

    var app = new Marionette.Application();
    var entityCollection = new EntityCollection();

    app.addRegions({
        left: '#left',
        viewport: '#viewport',
        right: '#right'

    });

    app.addInitializer(function () {
        app.left.show(new MechSearchViewPane({entities: entityCollection}));
    });


    app.on('initialize:after', function () {
        Backbone.history.start();
        entityCollection.url = 'data/entities.json';
        entityCollection.fetch({update: true});
    });

    return app;
});