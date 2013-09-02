define([
    'jquery',
    'backbone',
    'marionette',
    'Router',
    'collections/EntityCollection',

    'views/left/LeftLayout',
    'views/viewport/MechDetailView',

    'json!../data/weapons.json'

], function ($, Backbone, Marionette, Router, EntityCollection, LeftLayout, MechDetailView, weapons) {
    "use strict";

    var app = new Marionette.Application();
    var entityCollection = new EntityCollection();
    var controller = {
        select: function (term) {
            entityCollection.on('sync', function () {
                var model = entityCollection.get(term);
                if (!!model) {
                    model.select();
                }
            });

        }
    };

    var router = new Router({controller: controller});
    router.controller = controller;

    app.addRegions({
        left: '#left',
        viewport: '#viewport',
        right: '#right'
    });

//    $.getJSON('data/weapons.json', function(weapons){
//        todo: once weapons.json has been refactored, this will be a collection.
    app.addInitializer(function () {
        app.left.show(new LeftLayout({entities: entityCollection}));
        app.viewport.show(new MechDetailView({entities: entityCollection, weapons: weapons}));
//        });
    });


    app.on('initialize:after', function () {
        Backbone.history.start();
        entityCollection.url = 'data/units.json';
        entityCollection.fetch({update: true});
    });

    return app;
});