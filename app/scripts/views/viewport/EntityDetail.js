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

    function renderHelper(searchThis, forThese, renderThis, inThis, location) {
        _.each(forThese, function(v, i) {
            var w = searchThis[v];
            if (!!w) {
                w.name = v;
                w.location = location;
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

            var equips = this.model.get('location');

            var headers = ['Name', 'Minimum Range', 'Short Range', 'Medium Range', 'Long Range'];
            var rawData = [];
            rawData.push(headers);

            for (var location in equips) {
                var payload = equips[location];
                this.renderSlot(location, payload);
                renderHelper(this.weapons, payload.equipment.nonCriticals, entityWeapons, this.ui.WL, location);
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
