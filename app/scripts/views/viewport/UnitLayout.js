/**
 * Created with IntelliJ IDEA.
 * User: AndrewSheedy
 * Date: 16/02/13
 * Time: 10:56 PM
 */
define([
    'marionette',

    'tpl!templates/viewport/unitLayout.html',
    'views/unit/UnitHeader',
    'views/unit/UnitOverview',
    'views/unit/UnitEquipment',
    'views/unit/UnitAmmo',
    'views/unit/UnitWeapons',
    'views/unit/UnitRanges',
    'views/unit/UnitSlotLayout'
], function (Marionette, template, UnitHeader, UnitOverview, UnitEquipment, UnitAmmo, UnitWeapons, UnitRanges, UnitSlotLayout) {
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
            var model = {model: this.model};
            this.header.show(new UnitHeader(model));
            this.overview.show(new UnitOverview(model));
            this.equipment.show(new UnitEquipment(model));
            this.ammo.show(new UnitAmmo(model));
            this.weaponry.show(new UnitWeapons(model));
            this.ranges.show(new UnitRanges(model));
            this.slotLayout.show(new UnitSlotLayout(model))
        }

    });
});
