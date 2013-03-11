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

], function (Marionette, EntityCollection, EntityDetailView, entityTemplate) {
    "use strict";

    return Marionette.CompositeView.extend({
        template: entityTemplate,

        itemView: EntityDetailView,
//        itemViewContainer: '.selectedEntities',


        initialize: function (opts) {
            this.collection = new EntityCollection();
            this.entities = opts.entities;

            this.entities.on('change:selected', this.modelSelected, this);
        },



        modelSelected: function (model) {
            if (model.isSelected()) {
                this.collection.add(model);

                // only want one selected.
                this.collection.each(function(m){
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