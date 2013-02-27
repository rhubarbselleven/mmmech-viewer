({
    appDir: "..//js",
    baseUrl: "./",
    dir: "./output",
    mainConfigFile: '..//js/main.js',
    modules: [
        {
            name: "main"
        }
    ],

    paths: {
    	require: 'libs/require/require',
	jquery: 'empty:'
    },

    //optimize: 'none',
    optimize: 'uglify2',
    removeCombined: true,
    optimizeCss: 'none'
})
