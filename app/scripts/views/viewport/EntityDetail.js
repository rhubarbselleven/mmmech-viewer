/**
 * Created with IntelliJ IDEA.
 * User: AndrewSheedy
 * Date: 16/02/13
 * Time: 10:56 PM
 */
define([
    'marionette',

    'tpl!templates/viewport/entityDetail.html'
], function (Marionette, template) {
    "use strict";

    return Marionette.CompositeView.extend({
        template: template,

        onRender: function () {
            console.log("Rendering: " + this.model.id);

        }

    });
});