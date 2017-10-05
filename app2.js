//primero pedimos al usuario que ingrese la frase mediante un prompt
var consulta = parseInt(prompt('Hola, elije una opción, selecciona 1 para codificar o selecciona 2 si quieres descifrar');
function consulta(){   // creamos la funcion consulta y le damos condicionales
		if(consulta === 1){			//si elige la opcion 1	
			toCodeAscii()			//codificaremos
		}else if(consulta === 2){	//si elige la opcion 2
   			toDeCipher()	  	 	//descodificaremos
   		}else{			//en caso de que no elija ninguna opcion de las que dimos
	  		return 'Elija una opción válida';  //solicitaremos que elija una opcion valida
   }
}
console.log(consulta)

//entonces pasamos a codificar la frase al codigo ASCII

function toCipher() { 		
	var frase = parseInt(prompt('Ingresa lo que quieres codificar'); // aqui hacer un for para que el mensaje que introduzca el usuario se pase a Codigo ASCII
	for (var i = chartAt[i]; x <= newNameToCode.length(); x++){ //indicamos la forma de iterar el for sobre la frase ingresada
		if ((i - 65 + 33)%26+65){ 
		toCipher.push()
		return alert ('Esta es tu frase encriptada con Codigo ASCII');
			console.log(toCipher) 
		}
	}
}
			/* x es el indice del caracter, le restamos 65 porque el codigo ASCII comienza en 65,
			'n' es la cantidad de espacios que queremos mover el indice, en este caso 33, %26 es 
			lo que resta de dividirlo entre 26, le volvemos a sumar 65 para que nos la diferencia que de debe ser igual a la nueva posicion del caracter en cuestion, el resultado
			lo empujaremos a toCipher.push() mediante el metodo push(). Retorna la alerta para mostrar al usuario en un mensaje con 
			el mensaje encriptado en codigo ASCII
			/*
			 
		
						//OJO!! AUN ES NECESARIO?? MODIFICAR la formula de abajo para sacar el 65 xq ya estaria en Ascii
	
}   							

//Ahora pasamos el mensaje que ya estaba encriptado en codigo cesar a codigo Ascii
function cipher() {
	for (i=0 ; i<= toCodeCesar.length() ; i++){		//Ahora indicamos con un for como debe iterar con cada index
		if(toCodeCesar.charCodeAt()){		//Y especificamos la condicion, que a [i] se le aplique la formula 
			cipher.push()					//Llenamos la nueva variable con la frase cifrada
			return alert('Aqui esta tu mensaje encriptado en Codigo ASCII'+ cipher + ';D'); //pedimos que retorne la frase cifrada en un alert para que muestre el resultado al usuario
		}		
										
	}	
}
console.log(cipher)

 function toDeCipher() {
 	for (n=0 ; i<= consulta.length() ; i++){
 		if(toCodeCesar[(i-65+33)%26+25]){
 			cipher.push()
 			return alert('Aqui esta tu mensaje desencriptado desde ASCII' + toDeCipher)
 		}
 	}
 }

console.log(toDeCipher)