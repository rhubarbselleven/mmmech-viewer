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

        select: function () {
            this.set('selected', true);
        },

        isSelected: function () {
            return this.get('selected');
        },

        isMissile: function () {
            return this.get('damage') === -1;
        },

        getHeat: function () {
            return this.get('heat');
        },

        getMinimumRange: function() {
            return this.get('minimumRange');
        },

        getShortRangeBracket: function() {
            return [this.get('minimumRange'), this.get('shortRange')];
        },

        getMediumRangeBracket: function() {
            return [this.get('shortRange'), this.get('mediumRange')];
        },

        getLongRangeBracket: function() {
            return [this.get('mediumRange'), this.get('longRange')];
        },

        getDamage: function() {
            var dmg = this.get('damage');
            if (dmg === -1) {
                return 'missile';
            } else {
                return dmg;
            }
        }





    });
});