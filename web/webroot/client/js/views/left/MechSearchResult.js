/**
 * Created with IntelliJ IDEA.
 * User: AndrewSheedy
 * Date: 16/02/13
 * Time: 2:45 PM
 */
define([
    'marionette',

    'tpl!templates/left/mechSearchPaneDetail.html'
], function (Marionette, template) {
    "use strict";

    return Marionette.ItemView.extend({

        template: template,
        tagName: 'li',

        events: {
            'click a': 'handleClick'
        },

        handleClick: function () {
            this.model.select();
        },

        onClose: function () {
        }
    });
});
