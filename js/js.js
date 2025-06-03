const MES = document.getElementById("mes"); //guardar el mes introducido por formulario y guardarlo en constante MES
const ANYO = document.getElementById("anyo"); // guardar el anyo en la constante ANYO
const imagenes = ["mono.jpg", "gallo.jpg", "perro.jpg", "cerdo.jpg", "rata.jpg", "mulo.jpg", "tigre.jpg", "conejo.jpg", "dragon.jpg", "serpiente.jpg", "caballo.jpg", "cabra.jpg"];// Crear un array que almacena las imagenes
const IMGSIGNO = document.getElementById('imagen'); //guardar la imagen en una constante

function calcular() {

    let anyon = parseInt(ANYO.value);
    console.log("anyon", anyon);
    let mesn = parseInt(MES.value);
    console.log("mesn", mesn);

    if (mesn == 1) anyon--;
    console.log("anyon", anyon);

    let calculo = (anyon) % 12;
    console.log("calculo", calculo);

    let resultado = imagenes[calculo];
    console.log("resultado", resultado);
    console.log(IMGSIGNO,IMGSIGNO);

    document.getElementById("p1").innerHTML = "Tu horoscopo es:" + resultado;
    document.getElementById("imagen").src = "./img/"+imagenes[calculo];


}