var carlos = {
    nombre: 'Carlos',
    apellido: 'Brignardello',
    edad: 21
}

var damaris = {
    nombre: 'Damaris',
    apellido: 'Bejar',
    edad: 21
}

var ale = {
    nombre: 'Ale',
    apellido: 'Añazco',
    edad: 23
}

var cristian = {
    nombre: 'Cristian',
    apellido: 'Glausser',
    edad: 22
}

var personas = [carlos, damaris, ale, cristian];
//console.log(personas[0])
//console.log(personas[0].nombre)
//console.log(personas[0]['apellido'])

for(var i = 0; personas.length ; i++){
    var persona = personas[i];
    console.log(`${persona.nombre} tiene ${persona.edad} años`)
}