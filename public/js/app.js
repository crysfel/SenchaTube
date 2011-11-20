
Ext.Loader.setConfig({
	enabled	: true,
	paths	: {
		"Bleext"	: "js/Bleext"
	}
	
});

Ext.application({
    name		: 'Bleext',
	appFolder	: "js/Bleext",
    controllers	: [
		"Bleext.youtube.controller.Videos",
		"Bleext.layout.controller.Main"
	]
});