/**
 * Created with IntelliJ IDEA.
 * User: AndrewSheedy
 * Date: 16/02/13
 * Time: 10:56 PM
 */
define([
    'marionette',
    'collections/EntityCollection',
    'views/viewport/UnitLayout',

    'tpl!templates/viewport/entity.html',
    'tpl!templates/viewport/introduction.html'


], function (Marionette, EntityCollection, UnitDetail, entityTemplate, emptyViewTemplate) {
    "use strict";

    var EmptyView = Marionette.ItemView.extend({
        template: emptyViewTemplate
    });

    return Marionette.CompositeView.extend({
        template: entityTemplate,

        emptyView: EmptyView,

        itemView: UnitDetail,
        itemViewOptions: function () {
            return {weapons: this.weapons};
        },
//        itemViewContainer: '.selectedEntities',


        initialize: function (opts) {
            this.collection = new EntityCollection();
            this.entities = opts.entities;
            this.weapons = opts.weapons;

            this.entities.on('change:selected', this.modelSelected, this);
        },


        modelSelected: function (model) {
            if (model.isSelected()) {
                this.collection.add(model);

                // only want one selected.
                this.collection.each(function (m) {
                    if (m.id != model.id) {
                        m.set('selected', false);
                    }
                });

            } else {
                this.collection.remove(model);
            }
        }
    });
});