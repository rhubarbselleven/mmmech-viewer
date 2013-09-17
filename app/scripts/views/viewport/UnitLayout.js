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
    'views/unit/UnitHeader',
    'views/unit/UnitOverview',
    'views/unit/UnitEquipment',
    'views/unit/UnitAmmo',
    'views/unit/UnitWeapons',
    'views/unit/UnitRanges',
    'views/unit/UnitSlotLayout'
], function (_, Marionette, template, UnitHeader, UnitOverview, UnitEquipment, UnitAmmo, UnitWeapons, UnitRanges, UnitSlotLayout) {

    "use strict";

    return Marionette.Layout.extend({
        template: template,

        regions: {
            header: ".header",
            overview: ".overview",
            equipment: ".equipment",
            ammo: ".ammo",
            weaponry: ".weaponry",
            ranges: ".ranges",
            slotLayout: ".slotLayout"
        },

        initialize: function (opts) {
            this.weapons = opts.weapons;
        },

        onRender: function () {
            this.header.show(new UnitHeader(this.model));
            this.overview.show(new UnitOverview(this.model));
            this.equipment.show(new UnitEquipment(this.model));
            this.ammo.show(new UnitAmmo(this.model));
            this.weaponry.show(new UnitWeapons(this.model));
            this.ranges.show(new UnitRanges(this.model));
            this.slotLayout.show(new UnitSlotLayout(this.model))
        }

    });
});
