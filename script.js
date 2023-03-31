function saludo () {
alert("hola mundo");
var nombre = prompt("Ingrese su nombre: ");
alert("hola " + nombre);
}

var inicio = document.getElementsByClassName("link") [0];
inicio.addEventListener("click", function() {
  saludo();
});

function despedida() {
  alert("Gracias por visitar la página");
}

var Acerca = document.getElementsByClassName("link") [1];
Acerca.addEventListener("click", function() {
  despedida()
});