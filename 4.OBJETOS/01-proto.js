const MAYORIA_DE_EDAD = 18;

function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.esMayor = function(){
    if(this.edad >= MAYORIA_DE_EDAD){
        console.log(`${this.nombre} es mayor de edad`);
    }
    else{
        console.log(`${this.nombre} es menor de edad`);
    }
}

var carlos = new Persona('Carlos', 'Brignardello', 17);
var damaris = new Persona('Damaris', 'Bejar', 21);
carlos.saludar();
carlos.esMayor();
damaris.saludar();
damaris.esMayor();