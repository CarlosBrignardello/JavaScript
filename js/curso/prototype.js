// Objeto literal
const gato = {
    nombre: 'Mojito',
    color: 'blanco con gris',
    personalidad: 'indiferente'
}

// Objeto constructor
function Task(name, time){
    this.name = name
    this.time = time
}
const comprar_pan = new Task('Comprar Pan', '2 Horas')

// Mostrar Objetos
console.log(gato)
console.log(comprar_pan)

// Crear función
function mostrarInfoTarea(name, time){
    return `La tarea ${name} se cumplira en ${time}.`
}

console.log(mostrarInfoTarea(comprar_pan.name, comprar_pan.time))

// Crear función exclusiva del objeto Task
Task.prototype.mostrarInfoTarea2 = function(){
    return `La tarea ${this.name} se cumplira en ${this.time}.`
}

console.log(comprar_pan.mostrarInfoTarea2())