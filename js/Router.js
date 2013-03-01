/**
 * Created with IntelliJ IDEA.
 * User: AndrewSheedy
 * Date: 16/02/13
 * Time: 9:30 PM
 */
define([
    'marionette'
],
    function (Marionette) {
        "use strict";

        return Marionette.AppRouter.extend({

            initialize: function (opt) {
//                this.controller = opt.controller;
            },

            appRoutes: {
                '#/:model': 'select'
            },

            select: function (eh) {
                console.log(eh);
            }

        });
    });