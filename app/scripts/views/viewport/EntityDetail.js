/**
 * Created with IntelliJ IDEA.
 * User: AndrewSheedy
 * Date: 16/02/13
 * Time: 10:56 PM
 */
define([
    'underscore',
    'marionette',

    'tpl!templates/viewport/entityDetail.html',
    'tpl!templates/viewport/entitySlot.html',
    'tpl!templates/viewport/entityWeapons.html'
], function (_, Marionette, entityTemplate, entitySlotTemplate, entityWeapons) {
    "use strict";

    function renderHelper(searchThis, forThese, renderThis, inThis) {
        _.each(forThese, function(v, i) {
            var w = searchThis[v];
            if (!!w) {
                w.name = v;
                inThis.append(renderThis(w));
            }
        }) ;
    }

    return Marionette.ItemView.extend({
        template: entityTemplate,

        ui: {
            HD: '.slot-HD',
            LA: '.slot-LA',
            LT: '.slot-LT',
            CT: '.slot-CT',
            RT: '.slot-RT',
            RA: '.slot-RA',
            LL: '.slot-LL',
            RL: '.slot-RL',

            WL: '.weaponList'
        },

        initialize: function(opts) {
            this.weapons = opts.weapons;
        },

        onRender: function () {
            console.log("Rendering: " + this.model.id);

            var equips = this.model.get('equipment');
            this.ui.HD.append(entitySlotTemplate(equips.HD));
            this.ui.LA.append(entitySlotTemplate(equips.LA));
            this.ui.LT.append(entitySlotTemplate(equips.LT));
            this.ui.CT.append(entitySlotTemplate(equips.CT));
            this.ui.RT.append(entitySlotTemplate(equips.RT));
            this.ui.RA.append(entitySlotTemplate(equips.RA));
            this.ui.LL.append(entitySlotTemplate(equips.LL));
            this.ui.RL.append(entitySlotTemplate(equips.RL));


            renderHelper(this.weapons, equips.HD.equipment.nonCriticals, entityWeapons, this.ui.WL);
            renderHelper(this.weapons, equips.LA.equipment.nonCriticals, entityWeapons, this.ui.WL);
            renderHelper(this.weapons, equips.LT.equipment.nonCriticals, entityWeapons, this.ui.WL);
            renderHelper(this.weapons, equips.CT.equipment.nonCriticals, entityWeapons, this.ui.WL);
            renderHelper(this.weapons, equips.RT.equipment.nonCriticals, entityWeapons, this.ui.WL);
            renderHelper(this.weapons, equips.RA.equipment.nonCriticals, entityWeapons, this.ui.WL);
            renderHelper(this.weapons, equips.LL.equipment.nonCriticals, entityWeapons, this.ui.WL);
            renderHelper(this.weapons, equips.RL.equipment.nonCriticals, entityWeapons, this.ui.WL);



        },

        appendHtml: function (collectionView, itemView, index) {

        }

    });
});