/**
 * @class Bleext.abstract.Controller
 * @extends Ext.app.Controller
 * requires 
 * @autor Crysfel Villa
 * @date Tue Nov  1 19:57:15 CET 2011
 *
 * Description
 *
 *
 **/

Ext.define("Bleext.abstract.Controller",{
	extend		: "Ext.app.Controller",
	
	
	init	: function() {
		var me = this;
		
       me.setView(); 
	},
	
	setView	: Ext.emptyFn
});