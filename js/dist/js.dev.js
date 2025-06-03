"use strict";

var MES = document.getElementById("mes");
var ANYO = document.getElementById("anyo");
var HOROSCOPOC = ["Mono", "Gallo", "Perro", "Cerdo", "Rata", "Buey", "Tigre", "Conejo", "Dragon", "Serpiente", "Caballo", "Cabra"];
posicion = 0;
retornar();

function calcular() {
  var anyon = parseInt(ANYO.value);
  console.log("anyon", anyon);
  var mesn = parseInt(MES.value);
  console.log("mesn", mesn);
  if (mesn == 1) anyon--;
  console.log("anyon", anyon);
  var calculo = anyon % 12;
  console.log("calculo", calculo);
  var resultado = HOROSCOPOC[calculo];
  console.log("resultado", resultado);
  document.getElementById("p1").innerHTML = "Tu horoscopo es:" + resultado;
}

function mostrarimagen() {}

function avanzar() {
  position++;
}