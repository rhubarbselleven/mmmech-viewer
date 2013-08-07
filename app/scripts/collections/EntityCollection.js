define([

    'underscore',
    'backbone',

    'models/MechModel'
], function (_, Backbone, MechModel) {
    "use strict";

    return Backbone.Collection.extend({

        model: MechModel

        /*initialize: function () {
         this.on('change:selected', this.modelSelected, this);
         },

         modelSelected: function (model) {
         if (model.isSelected()) {
         // get the previous visible one
         // todo: not sure why .findWhere is not working from the collection itself.
         var isVisible = _.findWhere(this.models, {visible: true});
         if (isVisible) {
         isVisible.visible(false);
         }
         model.visible();
         }

         }*/
    });
});
