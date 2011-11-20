/**
 * @class Bleext.youtube.view.List
 * @extends Ext.dataview.NestedList
 * requires 
 * @autor Crysfel Villa
 * @date Tue Nov  1 20:39:16 CET 2011
 *
 * Description
 *
 *
 **/

Ext.define("Bleext.youtube.view.List",{
	extend		: "Ext.dataview.List",
	
	alias		: "widget.youtubelist",
	
	config		: {
		itemTpl			: '<div class="video"><img src="{thumbnail}" /><strong>{title}</strong><br />{time}</div>',
		disclosure		: true,
		store			: Ext.create("Bleext.youtube.store.Videos"),
		selModel		: {
            mode			: 'SINGLE',
            allowDeselect	: true
		}
	}
});