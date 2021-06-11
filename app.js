// importamos modulos del archivo
let jugador = require("./function.js");
let deportistas = require("./contactos.js");

// veamos la descripcion de uno de todos ellos
for (let i = 0; i < deportistas.length; i++) {
  console.log(deportistas[i].description());
}

// vemos quien es el ganador
console.log(jugador.ganador(...deportistas));
