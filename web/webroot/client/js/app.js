define([
    'jquery',
    'backbone',
    'marionette',
    'collections/EntityCollection',

    'views/left/MechSearchViewPane'

], function ($, Backbone, Marionette, EntityCollection, MechSearchViewPane) {
    "use strict";

    var app = new Marionette.Application();
    var entityCollection = new EntityCollection({url: 'data/entities.json'});

    app.addRegions({
        left: '#left',
        viewport: '#viewport',
        right: '#right'

    });

    app.addInitializer(function () {
        app.left.show(new MechSearchViewPane({collection: entityCollection}));
    });


    app.on('initialize:after', function () {
        Backbone.history.start();

        entityCollection.fetch({update: true});
    });

    return app;
});