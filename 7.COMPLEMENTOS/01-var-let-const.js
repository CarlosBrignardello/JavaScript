const MAYORIA_EDAD = 18
var carlos = {
    nombre: 'Carlos',
    apellido: 'Bignardello',
    edad: 21
}

function obtenerMayorEdad(persona){
    var mensaje;
    if(persona.edad >= MAYORIA_EDAD){
        mensaje = 'Es mayor de edad'
    }
    else{
        mensaje = 'Es menor de edad'
    }

    console.log(mensaje)
}

obtenerMayorEdad(carlos)
