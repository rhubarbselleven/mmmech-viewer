/**
 * Created with IntelliJ IDEA.
 * User: AndrewSheedy
 * Date: 16/02/13
 * Time: 10:56 PM
 */
define([
    'marionette',
    'collections/EntityCollection',
    'views/viewport/EntityDetail',

    'tpl!templates/viewport/entity.html'
], function (Marionette, EntityCollection, EntityDetailView, template) {
    "use strict";

    return Marionette.CompositeView.extend({
        template: template,

        itemView: EntityDetailView,
//        itemViewContainer: '.selectedEntities',

        initialize: function (opts) {
            this.collection = new EntityCollection();
            this.entities = opts.entities;

            this.entities.on('selected', this.modelSelected);
        },

        modelSelected: function (model) {
            this.collection.add(model);
        }
    });
});