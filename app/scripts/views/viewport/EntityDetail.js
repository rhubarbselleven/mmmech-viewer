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
            LTR: '.slot-LTR',
            CT: '.slot-CT',
            CTR: '.slot-CTR',
            RT: '.slot-RT',
            RTR: '.slot-RTR',
            RA: '.slot-RA',
            LL: '.slot-LL',
            RL: '.slot-RL',

            FLL: '.slot-FLL',
            FRL: '.slot-FRL',
            RLL: '.slot-RLL',
            RRL: '.slot-RRL',


            WL: '.weaponList',
            weaponRanges: '.weaponRange',

            notQuad: '.notQuad',
            isQuad: '.isQuad'
        },

        initialize: function(opts) {
            this.weapons = opts.weapons;
        },

        onRender: function () {
            console.log("Rendering: " + this.model.id);

            var equips = this.model.get('location');

            var headers = ['Name', 'Minimum Range', 'Short Range', 'Medium Range', 'Long Range'];
            var rawData = [];
            rawData.push(headers);

            for (var location in equips) {
                var payload = equips[location];
                this.renderSlot(location, payload);
                renderHelper(this.weapons, payload.equipment.nonCriticals, entityWeapons, this.ui.WL);
                collationHelper(this.weapons, payload.equipment.nonCriticals, rawData);
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

            if (equips.FRL) {
                this.ui.notQuad.hide();
                this.ui.isQuad.show();
            } else {
                this.ui.notQuad.show();
                this.ui.isQuad.hide();
            }


            /*this.ui.HD.append(entitySlotTemplate(equips.HD));

            this.ui.LT.append(entitySlotTemplate(equips.LT));
            this.ui.CT.append(entitySlotTemplate(equips.CT));
            this.ui.RT.append(entitySlotTemplate(equips.RT));

            renderHelper(this.weapons, equips.HD.equipment.nonCriticals, entityWeapons, this.ui.WL);
            renderHelper(this.weapons, equips.LT.equipment.nonCriticals, entityWeapons, this.ui.WL);
            renderHelper(this.weapons, equips.CT.equipment.nonCriticals, entityWeapons, this.ui.WL);
            renderHelper(this.weapons, equips.RT.equipment.nonCriticals, entityWeapons, this.ui.WL);



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
            } else {
                this.ui.notQuad.hide();
                this.ui.isQuad.show();
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
            );*/

        },

        handleLocation: function(location, payload) {
            this.renderSlot(location, payload);

        },

        renderSlot: function (location, payload) {
            var slot = this.ui[location];
            slot.append(entitySlotTemplate(payload));
        },

        appendHtml: function (collectionView, itemView, index) {

        }

    });
});
