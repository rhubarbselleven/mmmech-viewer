define([
    'marionette',

    'views/left/SearchViewPane',
    'views/left/SelectionViewList',

    'tpl!templates/left/leftLayout.html'

], function (Marionette, SearchViewPane, SelectionViewList, template) {
    "use strict";

    return Marionette.Layout.extend({
        template: template,

        regions: {
            search: ".searchPane",
            selection: ".selectionPane"
        },

        initialize: function (opts) {
            this.entities = opts.entities;

//            this.search.show(new SearchViewPane(opts));
//            this.selection.show(new SelectionViewList());
        },

        onRender: function () {

            this.search.show(new SearchViewPane({entities: this.entities}));
//            this.search.show(new SelectionViewList());
        }
    });
});