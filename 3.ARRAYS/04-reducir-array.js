var carlos = {
    nombre: 'Carlos',
    apellido: 'Brignardello',
    edad: 21,
    altura: 1.68,
    cantidadDeLibros: 15
}

var damaris = {
    nombre: 'Damaris',
    apellido: 'Bejar',
    edad: 21,
    altura: 1.65,
    cantidadDeLibros: 20

}

var ale = {
    nombre: 'Ale',
    apellido: 'Añazco',
    edad: 23,
    altura: 1.65,
    cantidadDeLibros: 5

}

var cristian = {
    nombre: 'Cristian',
    apellido: 'Glausser',
    edad: 22,
    altura: 1.75,
    cantidadDeLibros: 21

}

var personas = [carlos, damaris, ale, cristian];

const reducer = (acum, { cantidadDeLibros } ) => acum + cantidadDeLibros;

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`);