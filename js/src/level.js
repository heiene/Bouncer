Level = function (opt){
	var default_opt =	{
	  	name: "structure",
	  	shape: "square",
	  	type: "static",
	  	height: 0.1,
	  	width: 29,
	  	x: 15,
	  	y: 4
	 };

	return game.world.createEntity(default_opt,opt);	
}