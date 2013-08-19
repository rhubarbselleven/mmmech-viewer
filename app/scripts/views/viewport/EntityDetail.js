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
    'highcharts'
], function (_, Marionette, entityTemplate, entitySlotTemplate, entityWeapons) {
    "use strict";

    function renderHelper(searchThis, forThese, renderThis, inThis, location) {
        _.each(forThese, function (v, i) {
            var w = searchThis[v];
            if (!!w) {
                w.name = v;
                w.location = location;
                inThis.append(renderThis(w));
            }
        });
    }

    function collationHelper(searchThis, forThese, collateToThis) {
        _.each(forThese, function (v, i) {
            var w = searchThis[v];
            if (!!w) {
                var t = {};

                // name is easy
                t.name = v;

                // min range
                if (w.minimumRange == undefined) {
                    w.minimumRange = 0;
                }
                t.minimumRange = (w.minimumRange);

                // short range
                t.shortRange = (w.shortRange);

                // medium range
                t.mediumRange = (w.mediumRange);

                // long range
                t.longRange = (w.longRange);


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

        initialize: function (opts) {
            this.weapons = opts.weapons;
        },

        onDomRefresh: function () {

            var equips = this.model.get('location');

            var clanOrIS;
            if (this.model.get('isClan')) {
                clanOrIS = 'clan';
            } else {
                clanOrIS = 'is';
            }

            var rawData = [];

            for (var location in equips) {
                var payload = equips[location];
                this.renderSlot(location, payload);
                renderHelper(this.weapons[clanOrIS], payload.equipment.nonCriticals, entityWeapons, this.ui.WL, location);
                collationHelper(this.weapons[clanOrIS], payload.equipment.nonCriticals, rawData);
            }

            var series = [
                { name: 'Minimum Range', data: _.pluck(rawData, 'minimumRange'), color: 'black'},
                { name: 'Short Range', data: _.pluck(rawData, 'shortRange'), color: 'blue'},
                { name: 'Medium Range', data: _.pluck(rawData, 'mediumRange'), color: 'green'},
                { name: 'Long Range', data: _.pluck(rawData, 'longRange'), color: 'orange'}
            ];


            this.ui.weaponRanges.highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Weapon Ranges'
                },
                xAxis: {
                    categories: _.pluck(rawData, 'name')
                },
                yAxis: {
                    title: {
                        text: 'Range'
                    }
                },

                series: series
            });

            if (equips.FRL) {
                this.ui.notQuad.hide();
                this.ui.isQuad.show();
            } else {
                this.ui.notQuad.show();
                this.ui.isQuad.hide();
            }

        },

        handleLocation: function (location, payload) {
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
