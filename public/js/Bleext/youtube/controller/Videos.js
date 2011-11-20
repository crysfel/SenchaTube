/**
 * @class Bleext.youtube.controller.Videos
 * @extends Ext.app.Controller
 * requires 
 * @autor Crysfel Villa
 * @date Sun Oct 30 23:38:58 CET 2011
 *
 * The videos controller
 *
 *
 **/

Ext.define("Bleext.youtube.controller.Videos",{
	extend		: "Ext.app.Controller",
	
	models		: ["Bleext.youtube.model.Video"],
	stores		: ["Bleext.youtube.store.Videos"],
	views		: [
		"Bleext.youtube.view.List",
		"Bleext.youtube.view.Player"
	],
	
	init		: function(){
		var me = this;
		
		me.control({
			"youtubelist"	: {
				itemtap	: me.showVideo
			},
			"player button[action=back]"	: {
				tap		: me.showList
			}
		});
	},
	
	showList	: function(button,event){
		var container = button.up("panel[action=videos]"),
			player = container.down("player"),
			list = container.down("youtubelist");
			
		player.hide();
		list.show();
	},
	
	showVideo	: function(list,index,element,event){
		var player = list.up("panel[action=videos]").down("player"),
			record = list.getStore().getAt(index);
			html = player.getTpl().apply(record.data);
		
		player.setHtml(html);
		
		list.hide();
		player.show();
	}
});