/**
 * Created with IntelliJ IDEA.
 * User: AndrewSheedy
 * Date: 16/02/13
 * Time: 2:45 PM
 */
define([
    'marionette',
    'collections/EntityCollection',

    'views/left/MechSelectionResult',

    'tpl!templates/left/mechSelectionPane.html'
], function (Marionette, EntityCollection, MechSelectionResult, template) {
    "use strict";

    return Marionette.CompositeView.extend({

        template: template,

        itemViewContainer: '.selectionResults ul',
        itemView: MechSelectionResult,

        events: {

        },

        ui: {

        },

        initialize: function (opts) {
            this.collection = new EntityCollection();
            this.entities = opts.entities;

            this.listenTo(this.entities, 'change:selected', this.selectionChanged, this);
        },

        selectionChanged: function (model) {
            if (model.isSelected()) {
                this.collection.add(model);
            } else {
                this.collection.remove(model);
            }
        },

        onClose: function () {

        },

        log: function (evt) {

        }


    });
});
