define([
    'jquery',
    'backbone',
    'marionette',
    'Router',
    'collections/EntityCollection',

    'views/left/MechSearchViewPane',
    'views/viewport/MechDetailView'

], function ($, Backbone, Marionette, Router, EntityCollection, MechSearchViewPane, EntityDetailView) {
    "use strict";

    var app = new Marionette.Application();
    var entityCollection = new EntityCollection();
    var controller = {
        select: function (term) {
            var model = entityCollection.get(term);
            if (!!model) {
                model.select();
            }
        }
    };

    var router = new Router({controller: controller});
    router.controller = controller;


    app.addRegions({
        left: '#left',
        viewport: '#viewport',
        right: '#right'
    });

    app.addInitializer(function () {
        app.left.show(new MechSearchViewPane({entities: entityCollection}));
        app.viewport.show(new EntityDetailView());

    });


    app.on('initialize:after', function () {
        Backbone.history.start();
        entityCollection.url = 'data/entities.json';
        entityCollection.fetch({update: true});
    });

    return app;
});