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

        select: function () {
            this.set('selected', true);
        },

        isSelected: function () {
            return this.get('selected');
        }



    });
});