/**
 * @class Bleext.youtube.view.Player
 * @extends Ext.Panel
 * requires 
 * @autor Crysfel Villa
 * @date Tue Nov  1 22:02:49 CET 2011
 *
 * The player
 *
 *
 **/

Ext.define("Bleext.youtube.view.Player",{
	extend		: "Ext.Panel",
	alias		: "widget.player",
	
	config		: {
		items	: [{
			docked: 'top',
            xtype : 'toolbar',
            items: [{
                    xtype: 'button',
                    ui   : 'back',
                    text : 'Back',
					action : "back"
                }
            ]
		}],
		tpl	: ['<h1>{title}</h1><iframe width="560" height="315" src="http://www.youtube.com/embed/{id}" frameborder="0" allowfullscreen></iframe>']
	}
});