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
    'tpl!templates/viewport/entityWeapons.html',
    'goog!visualization,1,packages:[corechart]'
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

    function collationHelper(searchThis, forThese, collateToThis) {
        _.each(forThese, function(v, i) {
            var w = searchThis[v];
            if (!!w) {
                var t = [];

                // name is easy
                t.push(v);

                // min range
                if (w.minimumRange == undefined) {
                    w.minimumRange = 0;
                }
                t.push(w.minimumRange);

                // short range
                t.push(w.shortRange);

                // medium range
                t.push(w.mediumRange);

                // long range
                t.push(w.longRange);


                collateToThis.push(t);
            }
        });

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

            LTR: '.slot-LTR',

            WL: '.weaponList',
            weaponRanges: '.weaponRange'
        },

        initialize: function(opts) {
            this.weapons = opts.weapons;
        },

        onRender: function () {
            console.log("Rendering: " + this.model.id);

            var equips = this.model.get('location');

            this.ui.HD.append(entitySlotTemplate(equips.HD));

            this.ui.LT.append(entitySlotTemplate(equips.LT));
            this.ui.CT.append(entitySlotTemplate(equips.CT));
            this.ui.RT.append(entitySlotTemplate(equips.RT));

            renderHelper(this.weapons, equips.HD.equipment.nonCriticals, entityWeapons, this.ui.WL);
            renderHelper(this.weapons, equips.LT.equipment.nonCriticals, entityWeapons, this.ui.WL);
            renderHelper(this.weapons, equips.CT.equipment.nonCriticals, entityWeapons, this.ui.WL);
            renderHelper(this.weapons, equips.RT.equipment.nonCriticals, entityWeapons, this.ui.WL);

            // Ok, the fun stuff.
            var headers = ['Name', 'Minimum Range', 'Short Range', 'Medium Range', 'Long Range'];
            var rawData = [];
            rawData.push(headers);

            collationHelper(this.weapons, equips.HD.equipment.nonCriticals, rawData);
            collationHelper(this.weapons, equips.LT.equipment.nonCriticals, rawData);
            collationHelper(this.weapons, equips.CT.equipment.nonCriticals, rawData);
            collationHelper(this.weapons, equips.RT.equipment.nonCriticals, rawData);

            // missing LA indicates QUAD
            if (equips.LA) {
                this.ui.LA.append(entitySlotTemplate(equips.LA));
                this.ui.RA.append(entitySlotTemplate(equips.RA));
                this.ui.LL.append(entitySlotTemplate(equips.LL));
                this.ui.RL.append(entitySlotTemplate(equips.RL));

                renderHelper(this.weapons, equips.LA.equipment.nonCriticals, entityWeapons, this.ui.WL);
                renderHelper(this.weapons, equips.RA.equipment.nonCriticals, entityWeapons, this.ui.WL);
                renderHelper(this.weapons, equips.LL.equipment.nonCriticals, entityWeapons, this.ui.WL);
                renderHelper(this.weapons, equips.RL.equipment.nonCriticals, entityWeapons, this.ui.WL);

                collationHelper(this.weapons, equips.LA.equipment.nonCriticals, rawData);
                collationHelper(this.weapons, equips.RA.equipment.nonCriticals, rawData);
                collationHelper(this.weapons, equips.LL.equipment.nonCriticals, rawData);
                collationHelper(this.weapons, equips.RL.equipment.nonCriticals, rawData);
            }

            var data = google.visualization.arrayToDataTable(rawData);
            var chart = new google.visualization.BarChart(this.ui.weaponRanges[0]);

            chart.draw(data,
                {title:"Weapon Ranges",
                    // todo: bind this to el sizes
//                    width: this.$el.width(), height: this.$el.height(),
                    width: 800, height: 400,
                    axisTitlesPosition: 'none',
                    vAxis: {title: ""},
                    hAxis: {title: "Range Bracket", minorGridlines: 5 },
                    colors: ['red', 'blue', 'green', 'orange'],
                    isStacked: false}
            );

        },

        appendHtml: function (collectionView, itemView, index) {

        }

    });
});
