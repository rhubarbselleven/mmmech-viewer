/**
 * Created with IntelliJ IDEA.
 * User: drew
 * Date: 9/17/13
 * Time: 4:00 PM
 * To change this template use File | Settings | File Templates.
 */
define([
    'marionette',

    'tpl!templates/unit/unitWeaponry.html',
    'json!../../../data/weapons.json'

], function (Marionette, template, weaponry) {
    return Marionette.ItemView.extend({
        template: template,

        templateHelpers: {
            listOfWeaponry: weaponry,

            getWeapon: function (name) {

                if (this.isClan) {
                    return this.listOfWeaponry['clan'][name];
                } else {
                    return this.listOfWeaponry['is'][name];
                }
            },
            formatDamage: function (damage) {
                if (damage === -3) {
                    return '-- variable --';
                } else if (damage === -2) {
                    return '-- missile --';
                } else if (damage === -4) {
                    return '-- special --';
                } else if (damage === -5) {
                    return '-- artillery --';
                } else {
                    return damage;
                }
            }
        }
    });


});