Engine.Map = {
	create: function() {
	},

	enter: function() {
		this.bit = [0.5,0.5,0.5];
		Engine.generateMap();

		app.tween(this.bit).to({
			0: 1
		},Utils.randomR(1,2),"02130").loop();

		app.tween(this.bit).to({
			1: 1
		},Utils.randomR(1,2),"02130").loop();

		app.tween(this.bit).to({
			2: 1
		},Utils.randomR(1,2),"02130").loop();
	},

	
	leave: function() {

	},

	step: function(dt) {
		Engine.camera.x = (app.width / 2) - ((Engine.player.x) * (Engine.camera.scale * Engine.tileSize + Engine.tileMargin)) - Engine.tileMargin;
		Engine.camera.y = (app.height / 2) - ((Engine.player.y) * (Engine.camera.scale * Engine.tileSize + Engine.tileMargin)) - Engine.tileMargin;
			
	},

	render: function(dt) {
		app.layer.clear("#224");
		app.layer.save().translate(Engine.camera.x,Engine.camera.y);

		for(var i in Engine.go)
			Engine.go[i].render(dt);
		app.layer.restore();

		for(var i = 0; i < Engine.player.lifes; i++){
			app.layer
				.save()
				.translate(32 + 32 * i,32)
				.align(0.5)
				.scale(this.bit[i % 3],this.bit[i % 3])
				.drawAtlasFrame(app.atlases.ui,3 + i % 3,0,0)
				.restore();
		}
			
	},

	mousedown: function(event) {
		if(event.button == "left"){
			var x = event.x - (Engine.camera.x);
			var y = event.y - (Engine.camera.y);
			x = Math.floor(x / (Engine.camera.scale * Engine.tileSize + Engine.tileMargin) + 0.5);
			y = Math.floor(y / (Engine.camera.scale * Engine.tileSize + Engine.tileMargin) + 0.5);
			Engine.player.player.input(x,y);
		}
	},

	keyup: function(event){
	}
};