var palabra = "";

while (palabra != "fin") {
  var cadena = prompt("Introduce tus palabras");
  palabra = palabra + " " + cadena;
}
document.write(palabra);



