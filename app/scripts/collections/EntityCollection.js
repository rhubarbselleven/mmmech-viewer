define([

    'underscore',
    'backbone',

    'models/MechModel'
], function (_, Backbone, MechModel) {
    "use strict";

    return Backbone.Collection.extend({

        model: MechModel
    });
});
