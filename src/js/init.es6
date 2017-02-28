let game = require("./lib/game/game"),
	loadImg = require("./lib/fn/loadImg");





$(document).ready(function(){
	init();







});



async function init(){
	let imgs = await loadImg([
						{key:"icon1",val:"./image/0.png"},
						{key:"icon2",val:"./image/1.png"},
						{key:"icon3",val:"./image/2.png"},
						{key:"icon4",val:"./image/3.png"},
						{key:"icon5",val:"./image/4.png"},
						{key:"icon6",val:"./image/5.png"},
						{key:"icon7",val:"./image/6.png"}
					 ])
					 .then(function(rs){
					 	 let newRes = {};
						 rs.map(function(obj){
							 newRes[obj.key] = obj.val;
						 });
						 return newRes;
					 });

	var app = new game.app({
			body:$("#test")
		}),
		scene = new game.scene(),
		layer = new game.layer(),
		sprite = new game.sprite({
			width:128,
			height:128,
			res:imgs.icon1,
			x:10,
			y:10,
			alpha:100
			// rotate:30,
			// centerX:0,
			// centerY:0,
			// flipHorizontal:true,
			// flipVertical:true
		});

	sprite.setResAnimateList({
		resList:[imgs.icon1,imgs.icon2,imgs.icon3,imgs.icon4,imgs.icon5,imgs.icon6,imgs.icon7,imgs.icon1],
		frame:5,
		infinite:true,
		canStopResPointer:[3,7],
		callback:function(){console.log(123)}
	});


	window.bens = sprite;

	layer.append(sprite);
	scene.append(layer);
	app.append(scene);



	app.run();

}