require.config({

    deps: ['main'],

    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        bootstrap: '../bower_components/bootstrap.css/js/bootstrap',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        marionette: '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',
        tpl: '../bower_components/requirejs-tpl/tpl',
        async: '../bower_components/requirejs-plugins/src/async',
        propertyParser: '../bower_components/requirejs-plugins/src/propertyParser',
        text: '../bower_components/requirejs-plugins/lib/text',
        json: '../bower_components/requirejs-plugins/src/json',
        highcharts: '../bower_components/highcharts.com/js/highcharts.src'


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
