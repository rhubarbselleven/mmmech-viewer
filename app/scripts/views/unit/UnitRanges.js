/**
 * Created with IntelliJ IDEA.
 * User: drew
 * Date: 9/17/13
 * Time: 4:00 PM
 * To change this template use File | Settings | File Templates.
 */
define([
    'underscore',
    'marionette',
    'highcharts',

    'json!../../../data/weapons.json',
    'tpl!templates/unit/unitRanges.html'

], function (_, Marionette, highcharts, weaponry, template) {
    return Marionette.ItemView.extend({
        template: template,

        ui: {
            weaponryRange: '.weaponryRange'
        },

        onRender: function () {
            var unitType = 'is';
            if (this.model.get('isClan')) {
                unitType = 'clan';
            }


            var rawData = [];
            _.each(this.model.get('weapons'), function (v, i) {
                _.each(v, function (v2, i2) {
                    // only include if it has a range.
                    var weapon = weaponry[unitType][v2];
                    if (weapon.longRange > 0) {
                        weapon.name = v2;
                        rawData.push(weapon);
                    }
                });
            });

            var series = [
//                { name: 'Minimum Range', data: _.pluck(rawData, 'minimumRange'), color: 'black'},
                { name: 'Short Range', data: _.pluck(rawData, 'shortRange'), color: 'blue'},
                { name: 'Medium Range', data: _.pluck(rawData, 'mediumrange'), color: 'green'},
                { name: 'Long Range', data: _.pluck(rawData, 'longRange'), color: 'orange'}
            ];


            this.ui.weaponryRange.highcharts({
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
        }

    });
});