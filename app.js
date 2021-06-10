console.log("Suerte en el curso");


let alumno = [{
    
    nombres: "Facundo",
    apellido: "Tissera",
    contacto: 3534813541,
    localidad: "Villa Maria",
},
{ 
    nombres: "Jorge",
    apellido: "Herrando",
    contacto: 156879523,
    localidad: " "
}]


for (let i = 0; i < alumno.length; i++) {
    const alumnos = alumno[i];
    console.log(alumno[i]);
    console.log(' alumno'  + ' = ' + alumno[i].nombres);
}

