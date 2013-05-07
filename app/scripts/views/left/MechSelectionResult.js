/**
 * Created with IntelliJ IDEA.
 * User: AndrewSheedy
 * Date: 16/02/13
 * Time: 2:45 PM
 */
define([
    'marionette',

    'tpl!templates/left/mechSelectionPaneDetail.html'
], function (Marionette, template) {
    "use strict";

    return Marionette.ItemView.extend({

        template: template,
        tagName: 'li',

        events: {
            'click .close': 'handleClose',
            'click': 'setVisible'
        },

        initialize: function () {

        },


        // todo: These events should be bubbled up to the container.

        handleClose: function () {
            this.model.select(false);
        },

        setVisible: function () {
            this.model.visible();
        },


        onClose: function () {
        }
    });
});
