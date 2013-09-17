/**
 * Created with IntelliJ IDEA.
 * User: drew
 * Date: 9/17/13
 * Time: 4:00 PM
 * To change this template use File | Settings | File Templates.
 */
define([
    'marionette',

    'tpl!templates/unit/default.html',
    'tpl!templates/unit/mechOverview.html',
    'tpl!templates/unit/veeOverview.html',
    'tpl!templates/unit/baOverview.html'

], function (Marionette, fakeTemplate, mechOverview, veeOverview, baOverview) {
    return Marionette.ItemView.extend({
        // template: template,

        getTemplate: function () {
            var unitType = this.model.get('unitType');
            if (unitType === "mech") {
                return mechOverview;
            } else if (unitType === "vee") {
                return veeOverview;
            } else if (unitType === "BA") {
                return baOverview;
            } else {
                return fakeTemplate;
            }
        }

    });
});