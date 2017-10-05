# proyecto-codigo-cesar
Hola!
Para empezar hice un html y anexe el archivo app.js mediante un script, usando la etiqueta src.

primero hice una función que mediante un prompt le preguntara al usuario si quería 
codificar o descodificar, con prefijo parseInt para que recibiera cualquier tipo de respuesta.
Dependiendo de lo que elija el if llama a la función determinada
para evitar confusion, el método toUpperCase transformaba todo el string a mayúsculas.
y las devuelve mediante un push() 


después en otra función debía,tomar el string que ingresó el usuario (ya pasado a mayúsculas) y aplicar
la fórmula de código césar pero tomando la posición que el cdigo ASCII le da a los caracteres.
después otro push para retornar la frase encriptada, mediante un alert se debía mostrar al usuario el 
resultado de su frase encriptada.
le puse al final un console.log() como forma de revisar si el código hacía lo que debía
o si se detenía antes.

después hay otra función para descifrar. 
en caso de que el usuario decide 2(descifrar) se toma el string y se aplica la fórmula a la inversa
devolviendo así el caracter correspondiente al valor que le asigna el código ASCII.
retornando también mediante un alert la frase descencripata.
también incluye un console.log por el mismo motivo

*****************
esto era a grandes rasgos lo que intenté hacer, pero hice un html y un app.js antes y al querer modificarlo 
perdí el hilo de lo que hacía, por lo que intenté copiar y editar en otro archivo (este fue el que mandé)
al principio pensé en aplicar la fórmula y después quise cambiarlo por el método correspondiente pero al tratar 
de explicarle al pc como debía recorrerlo y regresarlo, me confundí y terminé solo utilizando la fórmula

al momento de subir el archivo intenté comentarlo para ordenarlo pero al ponerlo se comentó TODO lo que estaba debajo
anulando las funciones, no pude editar la fórmula ni las etiquetas de todas las funciones. por eso, en teoría debía
seguir todos los pasos que expliqué antes pero no logré transcribir mis ideas. 
