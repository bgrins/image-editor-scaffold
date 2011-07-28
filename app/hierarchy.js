
ProjectModel = Backbone.Model.extend({
	initialize: function() {
    	this.layers = new Layers;
    	this.layers.url = '/repo/' + this.id + '/layers';
	}
});

ProjectView = Backbone.View.extend({
   	initialize: function(){
		this.template = $("#search_template").html();
		this.model.bind("all", this.render);
		this.render();
   	},
   	render: function(){
		var variables = { layers: this.model.layers.models };
   		var compiled = _.template(this.template, variables);
		this.el.html(compiled);
   	},
   	events: {
   		"click input[type=button]": "addLayer"  
   	},
   	addLayer: function( event ){
   		this.model.layers.add();
		this.render();
   	},
   	updateCounts: function() {
   
   	}
});


log("Initializing layer model");
LayerModel = Backbone.Model.extend({
	initialize: function() {
		var name = this.get("name");
		if (!name) {
			this.set({ "name": "Layer " + Math.random() });
		}
		
		var items = new Items;
		items.url = '/repo/' + this.id + '/items';
		
    	this.set({ "items": items });
	}
});

LayerView = Backbone.View.extend({
	initialize: function() {
	
	},
	addItem: function( event ) {
   		this.model.items.add();
		
	}
});

log("Initializing layers collection");
Layers = Backbone.Collection.extend({
	model: LayerModel,
	initialize: function() {
	
	}
});


log("Initializing item model");
ItemModel = Backbone.Model.extend({
	initialize: function() {
		var name = this.get("name");
		if (!name) {
			this.set({ "name": "Item " + Math.random() });
		}
		
		log("Initialized item" , name)
	}
});

log("Initializing items collection");
Items = Backbone.Collection.extend({
	model: ItemModel,
	initialize: function() {
		log("Initialized itm collection")
	}
});