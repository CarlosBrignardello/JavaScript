/* Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5). */
function sigma(numero){
    lista = []
    var resultado = 0
    for (let i = 1; i <= numero; i++) {
        lista.push(i)
        resultado += i
    }
    console.log(`El resultado es: ${resultado} (${lista})`)
}

/*Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).
 */
function factorial(numero){
    lista = []
    var resultado = 1
    for (let i = 1; i <= numero; i++) {
        lista.push(i)
        resultado = resultado * i
    }
    console.log(`El resultado es: ${resultado} (${lista})`)
}


/* 
COPIADO 
Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, un índice en la secuencia
*/

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

/*Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. Si el array es muy pequeño, devuelve null. */
function arrayPenultimo(lista){
    if(lista.length > 1){
        return lista[lista.length - 2]
    }
    else{
        return null
    }
}

/*Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 4. Si el array es muy pequeño, devuelve null.  */
function arrayUltimo(lista, num){
    if(lista.length >= num){
        return lista[lista.length - num]
    }
    else{
        return null
    }
}

/*Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null. */
function secondBigger(array){
    var lista = []
    var contador = 0
    var activar
    var max = Math.max(...array)
    for (let i = 0; i < array.length; i++) {
        if(activar == true){
            lista.push(array[i])
        }
        if(array[i] == max){
            activar = true
        }
        contador++
    }
    console.log(lista)
    console.log(`El segundo elemento más grande es: ${Math.max(...lista)}`)
}

/*Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].*/
function doubleTroublePar(array){
    var list = []
    var contador = 1
    for (let i = 0; i < array.length; i++) {
        if(contador % 2 == 0){
            list.push(array[i])
            list.push(array[i])
        }
        else{
            list.push(array[i])
        }
        contador++
    }
    console.log(list)
}




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