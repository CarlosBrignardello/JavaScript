const carlos = {
    name: 'Carlos',
    lastName: 'Brignardello'
}

function makeGreeting(saludo = 'Hola'){
    console.log(`${saludo}, mi nombre es ${this.name}`)
}
const greetingCarlos = makeGreeting.bind(carlos) // Cambiamos contexto

makeGreeting.call(carlos, 'Hi') // Cambiamos contexto y lo mostramos.
makeGreeting.apply(carlos, ['Que tal jeje']) // Se trabaja con un Array para los parametros adicionales.