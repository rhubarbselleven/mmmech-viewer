define([
    'underscore',
    'backbone'


], function (_, Backbone) {
    "use strict";


    /*
      "HD": {
             "armor": {
                 "external": 9,
                 "internal": 3
             },
             "equipment": {
                 "criticals": ["Life Support", "Sensors", "Cockpit", "Sensors"],
                 "nonCriticals": ["Small Laser"]
             }
      },
    */



    return Backbone.Model.extend({
        defaults: {
            selected: false,

            armor: {
                internal: 0,
                external: 0
            },
            equipment: {
                criticals: [],
                nonCriticals: []
            }
        },

        getExternalArmor: function () {
            return this.get('armor').external;
        },

        getInternalArmor: function () {
            return this.get('armor').internal;
        },

        getEquipment: function () {
            return this.get('equipment').nonCriticals;
        },

        getCriticals: function () {
            return this.get('criticals').criticals;
        },

        select: function () {
            this.set('selected', true);
        },

        isSelected: function () {
            return this.get('selected');
        }



    });
});