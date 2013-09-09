define([

    'underscore',
    'backbone',

    'models/UnitModel'
], function (_, Backbone, UnitModel) {
    "use strict";

    return Backbone.Collection.extend({

        model: UnitModel,

        parse: function (payload) {
            // payload will be a number of keys of arrays.
            var total = [];
            for (var type in payload) {
                total = total.concat(payload[type]);
            }

            return total;
        }
    });
});
