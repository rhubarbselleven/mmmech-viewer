define([
    'underscore',
    'backbone'

], function (_, Backbone) {
    "use strict";

    return Backbone.Model.extend({
        defaults: {
            selected: false,
            visible: false, // Hmm...
            filtered: false // Yeah!
        },

        idAttribute: 'shortName',

        select: function () {
            this.set('selected', true);
        },

        isSelected: function () {
            return this.get('selected');
        }



    });
});