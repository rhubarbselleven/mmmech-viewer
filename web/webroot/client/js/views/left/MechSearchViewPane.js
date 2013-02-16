/**
 * Created with IntelliJ IDEA.
 * User: AndrewSheedy
 * Date: 16/02/13
 * Time: 2:45 PM
 */
define([
    'marionette',
    'collections/EntityCollection',

    'views/left/MechSearchResult',

    'tpl!templates/left/mechSearchPane.html'
], function (Marionette, EntityCollection, MechSearchResult, template) {
    "use strict";

    return Marionette.CompositeView.extend({

        template: template,

        itemViewContainer: '.modelResults ul',
        itemView: MechSearchResult,

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

            var filter = this.entities.filter(function (model) {
                return model.id.substr(0, val.length) === val;
            });

            // just reset with our known stuff. let events handle it all.
            this.collection.reset(filter);
        },

        onClose: function () {

        },

        log: function (evt) {
            console.log(evt);
        }


    });
});
