/**
 * Created with IntelliJ IDEA.
 * User: AndrewSheedy
 * Date: 16/02/13
 * Time: 10:56 PM
 */
define([
    'marionette',

    'tpl!templates/viewport/entityDetail.html',
    'tpl!templates/viewport/entitySlot.html'
], function (Marionette, entityTemplate, entitySlotTemplate) {
    "use strict";

    return Marionette.ItemView.extend({
        template: entityTemplate,

        ui: {
            HD: '.slot-HD',
            LA: '.slot-LA',
            LT: '.slot-LT',
            CT: '.slot-CT',
            RT: '.slot-RT',
            RA: '.slot-RA',
            LL: '.slot-LL',
            RL: '.slot-RL'
        },

        onRender: function () {
            console.log("Rendering: " + this.model.id);

            this.ui.HD.append(entitySlotTemplate(this.model.get('equipment').HD));
            this.ui.LA.append(entitySlotTemplate(this.model.get('equipment').LA));
            this.ui.LT.append(entitySlotTemplate(this.model.get('equipment').LT));
            this.ui.CT.append(entitySlotTemplate(this.model.get('equipment').CT));
            this.ui.RT.append(entitySlotTemplate(this.model.get('equipment').RT));
            this.ui.RA.append(entitySlotTemplate(this.model.get('equipment').RA));
            this.ui.LL.append(entitySlotTemplate(this.model.get('equipment').LL));
            this.ui.RL.append(entitySlotTemplate(this.model.get('equipment').RL));
        },

        appendHtml: function (collectionView, itemView, index) {

        }

    });
});