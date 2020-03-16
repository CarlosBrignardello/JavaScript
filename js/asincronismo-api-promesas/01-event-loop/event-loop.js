// Ejecución Sincrona
console.log('#1 Ejecución sincrona')

// Ejecución Asincrona con 0 de retardo
setTimeout( () => console.log('#2 Timeout'), 0)

// Ejecución asincronica con promesa
Promise.resolve().then( () => console.log('#3 Promesa'))

// Ejecución Sincrona
console.log('#4 Ejecución sincrona')