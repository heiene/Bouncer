
Bouncer = function() {

	init = function(){
		var canvasElem = document.getElementById("bouncer");
		var width, height, netHeight;


		game.world = boxbox.createWorld(canvasElem,{

			scale: 30

		})
		
		game.width = canvasElem.width/game.world._scale;
		game.height = canvasElem.height/game.world._scale;
		netHeight = 5;


		

		var player1 = new Player({
			name: 'player1',
			x: game.width-5,
			$LEFT: 37,
			$RIGHT: 39

		});
		var player2 = new Player({
			name: 'player2',
			color: 'Yellow',
			x: 5,
			$LEFT: 65,
			$RIGHT: 68

		});
		var ground = new Level({
			color: "Green",
			width: game.width,
			height: 1,
			y: game.height,  
		});
		var leftWall = new Level({
			name: "Left Wall", 
			color: "Blue",
			width: 1,
			height: game.height,
			y: game.height/2,
			x: 0   
		});
		var rightWall = new Level({
			name: "Rigth Wall", 
			color: "Blue",
			width: 1,
			height: game.height,
			y: game.height/2,
			x: game.width   
		});

		var net = new Level({
			name: "net", 
			color: "grey",
			width: 0.3,
			height: netHeight,
			y: (game.height-netHeight/2),
			x: game.width/2   
		});

		var ball = new Ball({

		});

		// var joint = this.world.createJoint(this.player,this.player2,{
		// 	type: "prismatic"


		// })
	};	
		

return init;
}();




