/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "pj/zpmg/model/models"
],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("pj.zpmg.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // var oRenderer = sap.ushell.Container.getRenderer("fiori2");
                // oRenderer.setHeaderVisibility(false, false, ["home", "app"]);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                // For excel
                var jQueryScriptZip = document.createElement('script');
                jQueryScriptZip.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.10.0/jszip.js');
                document.head.appendChild(jQueryScriptZip);

                var jQueryScript = document.createElement('script');
                jQueryScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.10.0/xlsx.js');
                document.head.appendChild(jQueryScript);
            }
        });
    }
);