Engine = {
	tileSize: 32,
	tileMargin: 2,
	mapOffset: {
		x: 8,
		y: 8,
	},

	players: [],
	enemies: [],
	go: [],
	ground: [],
	block: [],
	allies: [],

	addGo: function(){
		var go = arguments[0];
		for(var i = 1; i < arguments.length; i++)
			arguments[i][arguments[i].length] = go;
		return go;
	},

	removeGo: function(){
		var go = arguments[0];
		for(var i = 1; i < arguments. length; i++){
			var index = arguments[i].indexOf(go);
			if(index > -1)
				arguments[i].splice(index,1);
		}
	},

	isGo: function(collection, x, y){
		for(var i in collection)
			if(x == collection[i].x && y == collection[i].y) return collection[i];
		return null;
	},

	turn: function(){
		for(var i in this.enemies)
			this.enemies[i].enemy.turn();
		for(var i in this.allies)
			this.allies[i].ally.turn();
	},

	sort: function() {
		this.go.sort(function(a, b) {
			if (a.zIndex === b.zIndex) {
				return (a.index > b.index) ? 1 : (a.index < b.index ? -1 : 0);
			}
			return (a.zIndex | 0) - (b.zIndex | 0);
		});
	},
};