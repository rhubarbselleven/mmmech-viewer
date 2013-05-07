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

    'tpl!templates/viewport/entity.html',
    'tpl!templates/viewport/introduction.html'


], function (Marionette, EntityCollection, EntityDetailView, entityTemplate, emptyViewTemplate) {
    "use strict";

    var EmptyView = Marionette.ItemView.extend({
        template: emptyViewTemplate
    });

    return Marionette.CompositeView.extend({
        template: entityTemplate,

        emptyView: EmptyView,

        itemView: EntityDetailView,
        itemViewOptions: function() {
            return {weapons: this.weapons};
        },
//        itemViewContainer: '.selectedEntities',


        initialize: function (opts) {
            this.collection = new EntityCollection();
            this.entities = opts.entities;
            this.weapons = opts.weapons;

            this.entities.on('change:visible', this.modelSelected, this);
        },



        modelSelected: function (model) {
            if (model.isSelected() && model.isVisible()) {
                this.collection.add(model);
            } else {
                this.collection.remove(model);
            }
        }
    });
});