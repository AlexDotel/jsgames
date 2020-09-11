var canvas;
var ctx;
var fps = 50;

anchoF = 50;
altoF = 50;

var escenario = [
	[0,2,1,2,0,0,0,0,0],
	[0,2,1,2,0,0,0,0,0],
	[0,2,1,2,0,0,0,0,0],
	[0,2,1,2,0,0,0,0,0],
	[0,2,1,2,0,0,0,0,0],
	[0,2,1,2,0,0,0,0,0],
	[0,2,1,2,0,0,0,0,0],
	[0,2,1,2,0,0,0,0,0],
	[0,2,1,2,0,0,0,0,0],
	[0,2,1,2,0,0,0,0,0],
	[0,2,1,2,0,0,0,0,0],
];

var cesped = '#78d477';
var agua = '#2bceff';
var tierra = '#75510d';


function dibujaEscenario(){

	var color;

		for(y=0;y<escenario.length;y++){
			for(x=0;x<escenario.length;x++){
					console.log(escenario[y][x]);
					if(escenario[y][x] == 0){
						color = cesped;
					}
					if(escenario[y][x] == 1){
						color = agua;
					}
					if(escenario[y][x] == 2){
						color = tierra;
					}

					ctx.fillStyle = color;
					ctx.fillRect(x*anchoF,y*altoF,anchoF,altoF);

			}
		}

}

function inicializa(){
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

		dibujaEscenario();

	setInterval(function(){
		principal();
	},1000/fps);
}


function borraCanvas() {
	canvas.width = 500;
	canvas.height = 400;
}

function principal(){

	//	borraCanvas();

	//console.log('ejecutando');

}
