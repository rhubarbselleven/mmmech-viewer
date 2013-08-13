define([
    'marionette',

    'views/left/MechSearchViewPane',
    'views/left/MechSelectionViewList',

    'tpl!templates/left/leftLayout.html'

], function (Marionette, MechSearchViewPane, MechSelectionViewList, template) {
    "use strict";

    return Marionette.Layout.extend({
        template: template,

        regions: {
            search: ".searchPane",
            selection: ".selectionPane"
        },

        initialize: function (opts) {
            this.entities = opts.entities;

//            this.search.show(new MechSearchViewPane(opts));
//            this.selection.show(new MechSelectionViewList());
        },

        onRender: function () {

            this.search.show(new MechSearchViewPane({entities: this.entities}));
//            this.search.show(new MechSelectionViewList());
        }
    });
});