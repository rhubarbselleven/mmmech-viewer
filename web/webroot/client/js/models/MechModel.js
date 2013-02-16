define([
    'underscore',
    'backbone',
    'picky'

], function (_, Backbone, Picky) {
    "use strict";

    return Backbone.Model.extend({
        defaults: {
            selected: false,
            visible: false, // Hmm...
            filtered: false // Yeah!
        },

        idAttribute: 'model',

        initialize: function () {
            var selectable = new Picky.Selectable(this);
            _.extend(this, selectable);
        }

    });
});