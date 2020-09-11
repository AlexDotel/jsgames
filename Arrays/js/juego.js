

var alumnos = ['a', 'b', 'c','d','e'];

//Metodo que esta en el onload de el html, se ejecuta de inmediato carga la pagina
function inicializa(){

	console.log("iniciado");

}


//Funciona para agregar un elemento a la lista, que te pedira en el prompt abriendo un recuadro.
function agregar() {

	console.log('solicitando alumno');
	var aNuevo = prompt('Ingrese nuevo alumno');

	alumnos.push(aNuevo);

}

//Esta funcion es para eliminar un elemento especifico del array.
function eliminarEspecifico(lista, elemento, cantidad){

	lista.splice(elemento, cantidad);

}


//Funcion para imprimir el array recorrido en la consola o HTML.
function imprimirAlumnos(alumnos) {

	for(i = 0; i<alumnos.length; i++){

//Imprime en el html
		//document.write(alumnos[i]+"</br>")

		console.log(alumnos[i]);

	}

}


//Funcion para eliminar el ultimo elemento de la lista.
function eliminar() {

	alumnos.pop();

}
