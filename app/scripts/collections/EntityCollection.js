define([

    'underscore',
    'backbone',

    'models/UnitModel'
], function (_, Backbone, MechModel) {
    "use strict";

    return Backbone.Collection.extend({

        model: MechModel
    });
});
