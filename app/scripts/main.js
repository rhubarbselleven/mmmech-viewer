require.config({
    waitSeconds: 15, //make sure it is enough to load all scripts
    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: '../components/bootstrap.css/js/bootstrap',
        backbone: '../components/backbone/backbone',
        underscore: '../components/underscore-amd/underscore',
        marionette: '../components/marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr': '../components/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.babysitter': '../components/backbone.babysitter/lib/amd/backbone.babysitter',
        tpl: '../components/requirejs-tpl/tpl',
        async: '../components/requirejs-plugins/src/async',
        goog: '../components/requirejs-plugins/src/goog',
        propertyParser: '../components/requirejs-plugins/src/propertyParser',
        text: '../components/requirejs-plugins/lib/text',
        json: '../components/requirejs-plugins/src/json',
        highcharts: '../components/highcharts.com/js/highcharts.src'


    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore'],
            exports: 'Backbone'
        },

        highcharts: {
            deps: ['jquery'],
            exports: 'Highcharts'
        }

    }
});

require(['app', 'bootstrap'], function (app) {
    "use strict";

    app.start();

});