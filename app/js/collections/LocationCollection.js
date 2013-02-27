define([

    'underscore',
    'backbone',

    'models/LocationModel'
], function (_, Backbone, LocationModel) {
    "use strict";

    return Backbone.Collection.extend({

        model: LocationModel
    });
});
