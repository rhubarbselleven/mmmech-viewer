/**
 * Created with IntelliJ IDEA.
 * User: AndrewSheedy
 * Date: 16/02/13
 * Time: 10:56 PM
 */
define([
    'underscore',
    'marionette',

    'tpl!templates/viewport/unitLayout.html',
    'tpl!templates/viewport/entitySlot.html',
    'tpl!templates/viewport/entityWeapons.html',
    'highcharts'
], function (_, Marionette, unitLayout, entitySlotTemplate, entityWeapons) {
    "use strict";

    return Marionette.Layout.extend({
        template: unitLayout,

        regions: {
            header: ".header",
            overview: ".overview",
            equipment: ".equipment",
            ammo: ".ammo",
            weapons: ".weapons",
            ranges: ".ranges",
            layout: ".unitLayout"

        },


        initialize: function (opts) {
            this.weapons = opts.weapons;
        }



    });
});
