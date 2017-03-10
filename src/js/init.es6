// let game = require("canvas/canvas"),
// 	loadImg = require("fn/loadImg"),
// 	$$ = require("event/$$");
//
//
// window.$$ = $$;


let show = require("./lib/ui/editPicture"),
	device = require("./lib/device");

console.log(device);


$(document).ready(function(){
	// init();


	new show({
		id:"win",                 //要显示的地方   id，dom，jqdom
	     src:"http://file.ynet.com/2/1509/11/10370925-500.jpg",                    //图片地址
	     success:function(src){console.log(src)},      //清除对象，返回图片的base64,类型为  png
	     cancel:function(){console.log("esc")}             //清除对象
	})



});



// async function init(){
// 	let imgs = await loadImg([
// 						{key:"icon1",val:"./image/0.png"},
// 						{key:"icon2",val:"./image/1.png"},
// 						{key:"icon3",val:"./image/2.png"},
// 						{key:"icon4",val:"./image/3.png"},
// 						{key:"icon5",val:"./image/4.png"},
// 						{key:"icon6",val:"./image/5.png"},
// 						{key:"icon7",val:"./image/6.png"}
// 					 ])
// 					 .then(function(rs){
// 					 	 let newRes = {};
// 						 rs.map(function(obj){
// 							 newRes[obj.key] = obj.val;
// 						 });
// 						 return newRes;
// 					 });
//
// 	var app = new game.app({
// 			body:$("#test")
// 		}),
// 		scene = new game.scene(),
// 		layer = new game.layer(),
// 		sprite = new game.sprite({
// 			width:128,
// 			height:128,
// 			res:"#f00",
// 			x:64,
// 			y:64,
// 			// alpha:50,
// 			// scale:2,
// 			// rotate:30,
// 			centerX:0,
// 			centerY:0
// 			// flipHorizontal:true,
// 			// flipVertical:true
// 		}),
// 		sprite1 = new game.sprite({
// 			width:100,
// 			height:100,
// 			res:"#f00",
// 			x:0,
// 			y:0
// 		}),
// 		title = new game.text({
// 			// x:30,
// 			// y:30,
// 			text:"测试",
// 			fontSize:30,
// 			width:100,
// 			height:100,
// 			lineHeight:30,
// 			// scale:1.5,
// 			// rotate:30,
// 			alpha:50,
// 			// flipHorizontal:true,
// 			// flipVertical:true
// 			// textBaseline:"middle",
// 			textAlign:"right"
// 		});
//
// 	window.game = game;
// 	window.title = title;
// 	window.layer = layer;
// 	window.scene = scene;
// 	window.app = app;
//
// 	sprite.setResAnimateList({
// 		resList:[imgs.icon2,imgs.icon3,imgs.icon4,imgs.icon5,imgs.icon6,imgs.icon7,imgs.icon1],
// 		frame:5,
// 		// infinite:true,
// 		canStopResPointer:[3,6],
// 		callback:function(){console.log(123)}
// 	});
//
//
// 	window.bens = sprite;
//
// 	layer.append(sprite).append(sprite1);
// 	scene.append(layer);
// 	app.append(scene);
//
//
// 	let isRun = false;
// 	document.body.addEventListener("click",()=>{
// 		if(isRun){
// 			sprite.resAnimateStop();
// 		}else{
// 			sprite.resAnimatePlay();
// 		}
// 		isRun = !isRun;
// 	},false);
//
// 	sprite.animate({
// 		time:2000,
// 		style:{
// 			x:100
// 		},
// 		callback:function(){console.log("over");
//
// 			bens.animate({
// 				time:1000,
// 				style:{
// 					x:0
// 				},
// 				callback:function(){
// 					setTimeout(()=>{
// 						layer.del(sprite)
// 					},1000)
//
// 					console.log("over")
// 				}
//
// 			})
// 		}
//
// 	});
//
// 	app.run();
// 	app.showFrame();
//
//
// }