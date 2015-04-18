Engine.Player = function(){
};

Engine.Player.prototype = {
	init: function(){
		this.go.tileset = app.atlases.characters;
		this.go.lifes = 1;
	},

	canGo: function(x, y){
		if(Engine.isGo(Engine.enemies,x,y)) {
			app.setState(Engine.Fight);
		}
		if(Engine.isGo(Engine.block,x,y)) return false;
		if(Engine.isGo(Engine.ground,x,y)) return true;
		return false;
	},

	input: function(x,y){
		var nextX = this.go.x;
		var nextY = this.go.y;
		
		if(Math.abs(x - this.go.x) <= 1 && Math.abs(y - this.go.y) <= 1){
			if(Math.abs(x - this.go.x) <= 1)	
				nextX = x;
			if(Math.abs(y - this.go.y) <= 1)
				nextY = y;
		}

		if(this.canGo(nextX, nextY)){
			app.tween(this.go)
				.to({x: nextX, y: nextY}, 0.1, "01")
				.play();
		}

		Engine.turn();
	}
};