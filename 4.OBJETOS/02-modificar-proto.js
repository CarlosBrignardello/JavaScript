function Persona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

/* Bien */
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

/* MAL*/
Persona.prototype.esAlto = () => this.altura > 1.7


var carlos = new Persona('Carlos', 'Brignardello');
var damaris = new Persona('Damaris', 'Bejar');
carlos.saludar();
damaris.saludar();