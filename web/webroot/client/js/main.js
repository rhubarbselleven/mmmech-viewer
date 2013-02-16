// shortcut aliases.
require.config({
    paths: {
        jquery: 'http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/amd-0.9.10/backbone',
        marionette: 'libs/marionette/amd-1.0.0-rc4/backbone.marionette',
        'backbone.wreqr': 'libs/marionette/amd-1.0.0-rc4/backbone.wreqr',
        'backbone.babysitter': 'libs/marionette/amd-1.0.0-rc4/backbone.babysitter',
        tpl: 'libs/marionette/amd-1.0.0-rc4/tpl'
    },

    shim: {
        jquery: {
            exports: 'jquery'
        },
        underscore: {
            exports: '_'
        },
        marionette: {
            exports: 'Backbone.Marionette',
            deps: ['backbone']
        }

    }
});

require(['app'], function (app) {
    "use strict";

    app.start();

});