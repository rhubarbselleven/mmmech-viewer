define([

    'underscore',
    'backbone',
    'picky',

    'models/MechModel'
], function (_, Backbone, Picky, MechModel) {
    "use strict";

    return Backbone.Collection.extend({

        model: MechModel,

        initialize: function (opts) {
            var multiSelect = new Picky.MultiSelect(this);
            _.extend(this, multiSelect);
        }
    });
});
