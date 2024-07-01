//@ui5-bundle com/satinfotech/cloudapps/kitchen/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"com/satinfotech/cloudapps/kitchen/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("com.satinfotech.cloudapps.kitchen.Component",{metadata:{manifest:"json"}})});
},
	"com/satinfotech/cloudapps/kitchen/i18n/i18n.properties":'# This is the resource bundle for com.satinfotech.cloudapps.kitchen\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=kitchen details\n\n#YDES: Application description\nappDescription=An SAP Fiori application.',
	"com/satinfotech/cloudapps/kitchen/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"com.satinfotech.cloudapps.kitchen","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.12.5","toolsId":"b29d55be-d56e-4ed9-93a4-5206505e2054"},"dataSources":{"mainService":{"uri":"odata/v4/cloud-kitchen/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.124.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.satinfotech.cloudapps.kitchen.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"KitchenList","target":"KitchenList"},{"pattern":"Kitchen({key}):?query:","name":"KitchenObjectPage","target":"KitchenObjectPage"}],"targets":{"KitchenList":{"type":"Component","id":"KitchenList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Kitchen","variantManagement":"Page","navigation":{"Kitchen":{"detail":{"route":"KitchenObjectPage"}}}}}},"KitchenObjectPage":{"type":"Component","id":"KitchenObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Kitchen"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"}}'
}});
