/**
 * Created with IntelliJ IDEA.
 * User: AndrewSheedy
 * Date: 16/02/13
 * Time: 2:45 PM
 */
define([
    'marionette',
    'collections/EntityCollection',

    'views/left/SearchResult',

    'tpl!templates/left/unitSearchPane.html'
], function (Marionette, EntityCollection, SearchResult, template) {
    "use strict";

    return Marionette.CompositeView.extend({

        template: template,

        itemViewContainer: '.modelResults ul',
        itemView: SearchResult,

        events: {
            'keyup .modelSearch ': 'performFilter'
        },

        ui: {
            search: '.modelSearch'
        },

        initialize: function (opts) {
            this.collection = new EntityCollection();
            this.entities = opts.entities;
        },

        performFilter: function (evt) {
            var val = this.ui.search.val().toUpperCase();

            if (val.trim() === '') {
                // if it's blank, don't want to render the entire thing.
                this.collection.reset();
            } else {

                var filter = this.entities.filter(function (model) {
                    return model.id.substr(0, val.length) === val;
                });

                // just reset with our known stuff. let events handle it all.
                this.collection.reset(filter);

                if (this.collection.size() === 1) {
                    this.collection.last().select();
                }
            }
        },

        onClose: function () {

        },

        log: function (evt) {

        }


    });
});
