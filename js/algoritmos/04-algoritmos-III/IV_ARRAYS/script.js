function one(array, max){
    conteo = 0
    lista = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] > max){
            conteo++
            lista.push(array[i])
        }
    }
    console.log(`${conteo} elementos son mayores que ${max}. La lista es la siguiente: ${lista}`)
}

function two(lista){
    var max = Math.max(...lista)
    var min = Math.min(...lista)
    function avg(x){
        var sum = 0;
        for(var i=0; i<x.length; i++){
            sum = sum + x[i];
        }
        var promedio = sum/x.length;
        return promedio;
    }
    var avg = avg(lista)
    console.log(`Max: ${max}. Min: ${min}. Avg: ${avg}`)
}

function third(array){
    for (let i = 0; i < array.length; i++) {
        if(array[i] < 0){
            array[i] = 'Dojo'
        }
    }
    console.log(array)
}

function four(array, x, y){
    list = []
    contador = 0
    for (let i = 0; i < array.length; i++) {
        if(contador >= x && contador <= y ){
            console.log(`${array[i]} se elimino...`)
        }
        else{
            list.push(array[i])
        }
        contador++
    }
    console.log(list)
}