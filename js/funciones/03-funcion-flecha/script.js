// Función tradicional
function saludar(nombre){
    return `Bienvenido ${nombre}.`
}

console.log(saludar("Carlos"))

// Función flecha
/*
const saludarFlecha = (nombre) =>{
    return `Bienvenido ${nombre}.`
}
*/
const saludarFlecha = (nombre) =>
    `Bienvenido ${nombre}.`

console.log(saludarFlecha("Carlos"))
/* Ayudan a escribir funciones mucho más rapido, podemos retornar directamente un parametro.*/