define([

    'underscore',
    'backbone',

    'models/WeaponModel'
], function (_, Backbone, WeaponModel) {
    "use strict";

    return Backbone.Collection.extend({

        model: WeaponModel
    });
});
