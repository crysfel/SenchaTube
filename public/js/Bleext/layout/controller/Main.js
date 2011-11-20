/**
 * @class Bleext.layout.controller.Main
 * @extends Ext.app.Controller
 * requires 
 * @autor Crysfel Villa
 * @date Tue Nov  1 19:55:59 CET 2011
 *
 * Description
 *
 *
 **/

Ext.define("Bleext.layout.controller.Main",{
	extend		: "Bleext.abstract.Controller",
	
	stores		: ["Bleext.youtube.store.Videos"],
	views		: [
		"Bleext.layout.view.About",
		"Bleext.layout.view.MainTabs"
	],
	
	setView		: function(){
		var main = Ext.create("Bleext.layout.view.MainTabs",{id	: Ext.id()});
		Ext.Viewport.add(main);
	}
});