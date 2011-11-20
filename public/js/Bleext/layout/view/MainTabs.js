/**
 * @class Bleext.layout.view.MainTabs
 * @extends Ext.tab.Panel
 * requires Bleext.youtube.view.List
 * @autor Crysfel Villa
 * @date Tue Nov  1 19:59:40 CET 2011
 *
 * Description
 *
 *
 **/

Ext.define("Bleext.layout.view.MainTabs",{
	extend		: "Ext.tab.Panel",
	
	config		: {
		tabBarPosition	: "bottom",
		items			: [{
			xtype	: "panel",
			layout	: "card",
			title	: "Videos",
			iconCls	: "search",
			action	: "videos",
			items	: [{
				xtype	: "youtubelist"
			},{
				xtype	: "player"
			}]
		},{
			xtype	: "about"
		}]
	}
});