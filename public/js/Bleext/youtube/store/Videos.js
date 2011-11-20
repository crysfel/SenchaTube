/**
 * @class Bleext.youtube.store.Videos
 * @extends Ext.data.TreeStore
 * requires 
 * @autor Crysfel Villa
 * @date Tue Nov  1 21:06:11 CET 2011
 *
 * Description
 *
 *
 **/

Ext.define("Bleext.youtube.store.Videos",{
	extend	: "Ext.data.Store",
	model	: "Bleext.youtube.model.Video",
	
	autoLoad: true,
	root	: {},
	proxy	: {
        type	: "ajax",
        url		: "/getvideos"
    }
});