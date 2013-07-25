Ball = function(opt) {
	
	var default_opt = {
	  	name: "player",
	  	shape: "circle",
	  	color: "black", 
	  	radius: 0.7,
	  	x: 5,
	  	y: 2,
	  	restitution: 0.9,
	  	density: 1
	}

	return game.world.createEntity(default_opt,opt);
}