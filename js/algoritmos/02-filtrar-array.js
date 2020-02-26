var carlos = {
    nombre: 'Carlos',
    apellido: 'Brignardello',
    edad: 21,
    altura: 1.68
}

var damaris = {
    nombre: 'Damaris',
    apellido: 'Bejar',
    edad: 21,
    altura: 1.65
}

var ale = {
    nombre: 'Ale',
    apellido: 'Añazco',
    edad: 23,
    altura: 1.65
}

var cristian = {
    nombre: 'Cristian',
    apellido: 'Glausser',
    edad: 22,
    altura: 1.75
}

const esAlta = ({ altura }) => altura > 1.7
const esChiquito = ({ altura }) => altura < 1.7

var personas = [carlos, damaris, ale, cristian];
var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esChiquito);

console.log(personasAltas);
console.log(personasBajas);