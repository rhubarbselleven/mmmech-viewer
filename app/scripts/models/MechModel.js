define([
    'underscore',
    'backbone'

], function (_, Backbone) {
    "use strict";

    return Backbone.Model.extend({
        defaults:{
            selected:false,
            visible:false, // Hmm...
            filtered:false // Yeah!
        },

        idAttribute:'model',

        select:function (state) {

            // not supplied implies true
            if (state === undefined) {
                this.select(true);
            } else {
                this.set('selected', state);
            }
        },

        visible:function (state) {

            // not supplied implies true
            if (state === undefined) {
                this.visible(true);
            } else {
                this.set('visible', state);
            }
        },

        isSelected:function () {
            return this.get('selected');
        },

        isVisible:function () {
            return this.get('visible');
        }




    });
});