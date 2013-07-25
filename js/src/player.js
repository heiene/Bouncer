Player = function(opt) {
	
	var default_opt = {
	  	name: "player",
	  	shape: "circle",
	  	color: "red", 
	  	radius: 1.2,
	  	x: 5,
	  	y: game.height - 2,
		$moveLeft: false,
		$moveRight: false,
		density:10,
		onKeyDown: function(e) {
	  		console.log(e.keyCode)
	  		if(e.keyCode === this.$LEFT) {
	  			this.setForce('left',1000,270);
	  			this.$moveLeft = true;
	  		} else if (e.keyCode === this.$RIGHT) {
	  			this.setForce('right',1000,90);
	  			this.$moveRight = true;
	  		}

	  		
	  	},
	  	onKeyUp: function(e) {
	  		console.log(e.keyCode)
	  		
	  		if(e.keyCode === this.$LEFT) {
	  			this.clearForce('left');
	  			this.$moveLeft = false;
	  		} else if (e.keyCode === this.$RIGHT) {
	  			this.clearForce('right');
	  			this.$moveRight = false;
	  		}
	  	}
	  	
	 }

	var player = game.world.createEntity(default_opt,opt);
		
	return player;
}