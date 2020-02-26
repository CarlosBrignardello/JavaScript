function big(array){
    for(var i = 0; i < array.length; i++){
        if(array[i] > 0){
            array[i] = "Big"
        }
    }
    return array
}

function printLowHigh(array){
    console.log(`Imprimimos el menor: ${Math.min(...array)}`)
    return `Retornamos el mayor: ${Math.max(...array)}`
}

function penultimo(array){
    if(array.length > 2){
        console.log(`Penultimo: ${array[array.length - 2]}`)
        for(var i = 0; i < array.length ; i++){
            if((array[i] % 2) == 0){
                return `Primer par: ${array[i]}`
            }
        }
    }
}

function double(array){
    for(var i=0; i < array.length; i++){
        array[i] = array[i] * 2
    }
    console.log(array)
}

function countPositive(array){
    var counter = 0
    for(var i=0; i < array.length; i++){
        if(array[i] > 0){
            counter++
        }
    }
    array[array.length - 1] = counter
    console.log(array)
}

function imparcial(array){
    var counterPar = 0
    var counterImpar = 0
    for(var i = 0; i < array.length; i++){
        if((array[i] % 2) == 0){
            counterImpar = 0
            counterPar++
            if(counterPar >= 3){
                console.log("Que bien!")
            }
        }
        else{
            counterPar = 0
            counterImpar++
            if(counterImpar >= 3){
                console.log("Que imparcial!")
            }
        }
    }
}

function secondIncrement(array){
    var counter = 0
    for(var i = 0; i < array.length; i++){
        counter++
        if((counter % 2) == 0){
            array[i] = array[i] + 1
            console.log(array[i])
        }
    }
    console.log(array)
}

function longitud(array){
    for(var i = 0; i < array.length; i++){
        array[i] = array[i].length
    }
    console.log(array)
}

function addSeven(array){
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] + 7
    }
    console.log(array)
}

function inverseArray(array){
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
      }
}

function negativePerspective(array){
    for (let i = 0; i < array.length; i++) {
        if(array[i] > 0){
            array[i] = array[i] * -1
        }
    }
    console.log(array)
}

function everHungry(array){
    for (let i = 0; i < array.length; i++) {
        if(array[i] === "comida"){
            console.log("Yummy")
        }
        else{
            console.log("Tengo hambre!")
        }
    }
}

function alCentro(array){
    list = [...array]
    array[0] = list[list.length - 1]
    array[3] = list[list.length - 2]
    array[list.length - 2] = list[3]
    array[list.length - 1] = list[0]
    console.log(array)
}

function scale(array, numero){
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * numero
    }
    console.log(array)
}