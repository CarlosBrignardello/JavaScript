class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura; 
    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if(fn){
            fn(this.nombre, this.apellido, false)
        }
    }
    soyAlto(){
        return this.altura > 1.7
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
        if(fn){
            fn(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev){
        console.log(`Veo que eres desarrollador/a`)
    }
}

var carlos = new Persona('Carlos', 'Brignardello', 1.68)
var damaris = new Persona('Damaris', 'Bejar', 1.58)
var dante = new Desarrollador('Dante', 'Ruiz', 1.75)
carlos.saludar(responderSaludo)
damaris.saludar()
dante.saludar(responderSaludo)