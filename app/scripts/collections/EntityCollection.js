define([

    'underscore',
    'backbone',

    'models/MechModel'
], function (_, Backbone, MechModel) {
    "use strict";

    return Backbone.Collection.extend({

        model: MechModel,

        initialize: function () {
            this.on('change:selected', this.modelSelected, this);
        },

        modelSelected: function (model) {
            if (model.isSelected()) {
                model.visible();
            }

        }
    });
});
