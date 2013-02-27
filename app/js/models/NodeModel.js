define([
    'backbone'
], function (Backbone) {
    "use strict";

    return Backbone.Model.extend({
        defaults: {
            selected: false,
            visible: false, // Hmm...
            filtered: false // Yeah!
        },

        isSelected: function () {
            return this.get('selected');
        },

        isFiltered: function () {
            return this.get('filtered');
        },

        toggleSelected: function () {
            this.set('selected', !this.isSelected());
        },

        getName: function () {
            return this.get('title');
        }


    });
});