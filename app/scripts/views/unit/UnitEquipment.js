/**
 * Created with IntelliJ IDEA.
 * User: drew
 * Date: 9/17/13
 * Time: 4:00 PM
 * To change this template use File | Settings | File Templates.
 */
define([
    'marionette',

    'tpl!templates/unit/unitEquipment.html'

], function (Marionette, template) {
    return Marionette.ItemView.extend({
        template: template
    });
});