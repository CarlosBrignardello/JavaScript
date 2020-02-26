function palindromo(palabra){
    var contador = 0
    function stringToArray(word){
        word = word.replace(/ /g, '')
        lista = []
        for (let i = 0; i < word.length; i++) {
            lista.push(word.charAt(i))
        }
        return lista
    }
    var array = stringToArray(palabra)
    console.log(array)
    cp_array = [...array]
    const reversa = cp_array.reverse()
    console.log(reversa)
    for (let j = 0; j < array.length; j++) {
        console.log(`Array: ${array[j]} Reverse: ${reversa[j]}`)
        if(array[j] == reversa[j]){
            contador++
            if(contador == array.length){
                return console.log('Es un palindromo')
            }
        }
        else{
            return console.log('No es un palindromo')
        }
    }
}


/* COPIADO */
function fibonacci(numero){
    var a = 1, b = 0, temp

    while (numero >= 0){
      temp = a
      a = a + b
      b = temp
      numero--
    }
  
    return b;
}

function arrayPenultimo(lista){
    if(lista.length > 1){
        return lista[lista.length - 2]
    }
    else{
        return null
    }
}

function arrayUltimo(lista, num){
    if(lista.length >= num){
        return lista[lista.length - num]
    }
    else{
        return null
    }
}

/*Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].*/
function doubleTrouble(array){
    list = []
    for (let i = 0; i < array.length; i++) {
        list.push(array[i])
        list.push(array[i])
    }
    console.log(list)
}