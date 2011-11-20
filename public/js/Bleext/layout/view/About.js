/**
 * @class Bleext.layout.view.About
 * @extends Ext.Panel
 * requires 
 * @autor Crysfel Villa
 * @date Tue Nov  1 20:48:51 CET 2011
 *
 * Description
 *
 *
 **/

Ext.define("Bleext.layout.view.About",{
	extend		: "Ext.Panel",
	alias		: "widget.about",
	
	config		: {
		title	: "About",
		iconCls	: "more",
		html	: 'This app has been develop by <a href="http://twitter.com/crysfel">Crysfel Villa</a>'
	}
});