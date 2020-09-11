

var canvas;
var ctx;
var fps = 50;

var imgkoala;



function inicializa(){
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	//Cargamos la imagen del Protagonista
	imgkoala = new Image();
	imgkoala.src = 'img/per1.png';

	setInterval(function(){
		principal();
	},1000/fps);
}


//Objeto Protagonista
var protagonista = function(x,y) {
	this.x = x;
	this.y = y;
	this.velocidad = 5;

	this.dibuja = function(){
		ctx.drawImage(imgkoala, this.x, this.y);
	}


	//Escribiendo texto
	this.texto = function() {
		ctx.font = '30px impact';
		ctx.fillStyle = '#555555';
		ctx.fillText('x: '+this.x, 100, 100);
	}


	//Direcciones
	this.arriba = function(){
			this.y -= this.velocidad;
	}

	this.abajo = function(){
			this.y += this.velocidad;
	}

	this.izquierda = function(){
			this.x -= this.velocidad;
	}

	this.derecha = function(){
			this.x += this.velocidad;
	}
}



var personaje = function(x,y){

	this.x = x;
	this.y = y;
	this.derecha = true;

//Metodo para dibujar
	this.dibuja = function(){
		ctx.fillStyle = '#ff0000';
		ctx.fillRect(this.x, this.y, 25,25);
	}


//Metodo para mover
	this.mueve = function(velocidad) {

		if(this.derecha == true){
			if(this.x < 400){
				this.x+=velocidad;
			}else{
				this.derecha = false;
			}
		}else{
			if(this.x > 50){
				this.x-=velocidad;
			}else{
				this.derecha = true;
			}
		}

	}

}


var per1 = new personaje(10,50);
var per2 = new personaje(10,200);
var per3 = new personaje(10,300);

var prota = new protagonista(200, 200);


document.addEventListener('keydown',function(tecla) {
	//console.log(tecla.keyCode);

	//Arriba
	if(tecla.keyCode == 38){
		prota.arriba();
	//Abajo
	}if(tecla.keyCode == 40){
		prota.abajo();
	//Izquierda
	}if(tecla.keyCode == 37){
		prota.izquierda();
	//Derecha
	}if(tecla.keyCode == 39){
		prota.derecha();

	}

});



function borraCanvas() {
	canvas.width = 500;
	canvas.height = 400;
}

function principal(){
	borraCanvas();
	per1.dibuja();
	per2.dibuja();
	per3.dibuja();

	per1.mueve(1);
	per2.mueve(2);
	per3.mueve(4);


	prota.dibuja();
	prota.texto();
	//console.log('ejecutando');

}
