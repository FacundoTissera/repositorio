// importamos modulos del archivo
let crearJugador = require("./function.js");

// creamos a 1er jugador
let pedro = new crearJugador.Deportista("Pedro", "Sanchez", "futbol", 5);
// console.log(pedro);
// console.log(pedro.description());

// creamos a 2o jugador
let juan = new crearJugador.Deportista("Juan", "Escudero", "tenis", 10);
// console.log(juan);
// console.log(juan.description());

// creamos a 3er jugador
let diego = new crearJugador.Deportista("Diego", "Justo", "golf", 2);
// console.log(diego);
// console.log(diego.description());

let deportistas = [pedro, juan, diego];

module.exports = deportistas;
