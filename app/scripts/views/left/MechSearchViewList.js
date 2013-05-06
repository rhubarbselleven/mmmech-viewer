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

        itemViewContainer: '.modelResults ul',
        itemView: MechSelectionResult,


        initialize: function (opts) {
            this.collection = new EntityCollection();
            this.entities = opts.entities;
        },

        onClose: function () {

        },

        log: function (evt) {

        }


    });
});
