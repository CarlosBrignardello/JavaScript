const saludar = (nombre, sexo = 'masculino') => {
    if(sexo == 'masculino'){
        return `Hola ${nombre} estas muy guapo hoy.`
    }
    else if(sexo == 'femenino'){
        return `Hola ${nombre} estas muy guapa hoy.`
    }
    else{
        return `Hola ${nombre}.`
    }
}

console.log(saludar("Carlos"))
console.log(saludar("Damaris","femenino"))
console.log(saludar("Fransua","femenine"))