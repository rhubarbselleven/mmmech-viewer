/**
 * Created with IntelliJ IDEA.
 * User: AndrewSheedy
 * Date: 16/02/13
 * Time: 2:45 PM
 */
define([
    'marionette',

    'tpl!templates/left/mechSearchPane.html'
], function (Marionette, template) {
    "use strict";

    return Marionette.CompositeView.extend({

        template: template,

        events: {
            'keyup .modelSearch ': 'log'
        },

        log: function (evt) {
            console.log(evt);
        }


    });
});
