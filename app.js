// importamos modulos del archivo
let jugador = require("./function.js");
let deportistas = require("./contactos.js");

// veamos la descripcion de uno de todos ellos
for (let i = 0; i < deportistas.length; i++) {
  console.log(deportistas[i].description());
}

// vemos quien es el ganador
console.log(jugador.ganador(...deportistas));
console.log("Suerte en el curso");

//agrego alumnos a app - 10/06/21(FT)
let alumno = [
  {
    nombres: "Facundo",
    apellido: "Tissera",
    contacto: 3534813541,
    localidad: "Villa Maria",
  },
  {
    nombres: "Jorge",
    apellido: "Herrando",
    contacto: 156879523,
    localidad: " ",
  },
];

// hago un ciclo para saber la cantiidad de alumnos.
for (let i = 0; i < alumno.length; i++) {
  const alumnos = alumno[i];
  console.log(alumno[i]);
  console.log(" alumno" + " = " + alumno[i].nombres);
}
