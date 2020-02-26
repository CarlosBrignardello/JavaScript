class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura; 
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto(){
        return this.altura > 1.7
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
}

var carlos = new Persona('Carlos', 'Brignardello', 1.68);
var damaris = new Desarrollador('Damaris', 'Bejar', 1.64);