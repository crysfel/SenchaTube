/**
 * @class Bleext.youtube.model.Video
 * @extends Ext.data.Model
 * requires 
 * @autor Crysfel Villa
 * @date Tue Nov  1 21:00:06 CET 2011
 *
 * The video model
 *
 *
 **/

Ext.define("Bleext.youtube.model.Video",{
	extend		: "Ext.data.Model",
	
	fields: [
		{name: 'id', type: 'string'},
		{name: "title", type: 'string'},
		{name: 'time', type: 'string'},
		{name: 'thumbnail', type: 'string'}
    ]
});