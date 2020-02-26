// Función para heredar
function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function(){}/* Función vacia*/
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}   

// Constructor Persona
function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

// Creamos la función saludar en Personas
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

// Creamos la función soyAlto en Personas
Persona.prototype.soyAlto = function(){
    return this.altura > 1.7
}


// Constructor Desarrollador
function Desarrollador(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

// Activamos la herencia
heredaDe(Desarrollador, Persona)

// Creamos la función Saludar en Desarrollador
Desarrollador.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}

// Creamos unos nuevos objetos Desarrollador
var carlos = new Desarrollador('Carlos', 'Brignardello', 1.8);
var damaris = new Persona('Damaris', 'Bejar', 1.5);

// Testeamos la herencia
console.log(carlos.saludar())
console.log(damaris.saludar())
console.log(carlos.soyAlto())
console.log(damaris.soyAlto())
