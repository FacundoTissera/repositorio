// funcion creadora de objetos
function Deportista(nombre, apellido, deporte, titulos) {
  this.firstName = nombre;
  this.lastName = apellido;
  this.sport = deporte;
  this.titles = titulos;
  this.description = () =>
    `${this.firstName} ${this.lastName} practica ${this.sport} y ha cosechado ${this.titles} títulos.`;
}

// funcion para saber quien tiene mas titulos
function ganador(...deportistas) {
  let inicio = 0;
  let mensaje = "";
  for (let i = 0; i < deportistas.length; i++) {
    if (deportistas[i].titles > inicio) {
      inicio = deportistas[i].titles;
      mensaje = `${deportistas[i].firstName} ${deportistas[i].lastName} es el deportista con más títulos, con un total de ${inicio}`;
    }
  }
  return mensaje;
}

// exportamos modulos
exports.Deportista = Deportista;
exports.ganador = ganador;
