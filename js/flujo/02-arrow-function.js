var carlos = {
    nombre: 'Carlos',
    apellido: 'Brignardello',
    edad: 21,
}

var damaris = {
    nombre: 'Damaris',
    apellido: 'Bejar',
    edad: 17,
}

const MAYORIA_EDAD = 18;
const mayorEdad = ({ edad }) => edad >= MAYORIA_EDAD;


const esMayorDeEdad = (persona) => {
    if(mayorEdad(persona)){
        console.log(`${persona.nombre} es mayor de 18 años`);
    }
    else{
        console.log(`${persona.nombre} es menor de 18 años`);
    }
}

esMayorDeEdad(carlos);
esMayorDeEdad(damaris);