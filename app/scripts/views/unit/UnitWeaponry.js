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
//        weaponryList: weaponry,


        templateHelpers: {
            // todo: ideally we wouldn't require this each time.
            // can get access to the model data itself, but not the view.
            getWeapon: function (name) {
                var obj = require('json!../../../data/weapons.json');
                if (this.isClan) {
                    return obj['clan'][name];
                } else {
                    return obj['is'][name];
                }
            },
            formatDamage: function (damage) {
                if (damage === -3) {
                    return '-- variable --';
                } else if (damage === -2) {
                    return '-- missile --';
                } else if (damage === -5) {
                    return '-- artillery --';
                } else {
                    return damage;
                }
            }
        }
    });


});