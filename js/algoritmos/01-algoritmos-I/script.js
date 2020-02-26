var lista = []
function llenarLista(argumento){
    for(var i =1; i<=argumento; i++){
        lista.push(i);
    }
    console.log(lista);
}

// llenarLista(255)

function pares(){
    var sum = 0;
    for(var i = 2; i<=1000; i+=2){
        sum = i + sum;
        console.log(i);
    }
    return sum;
}
// y= pares (1000);
// console.log(y);

function impares(){
    for(var i = 1; i<=5000; i+=2){
        console.log(i);
    }
}
// impares()

function sum(x){
    var sum = 0;
    for(var i=0; i<x.length; i++){
        sum = sum + x [i];
    }
    return sum;
}
// console.log(sum([1,2,3]))

function mayor(x){
    var mayor = 0;
    for(var i=0; i<x.length; i++){
        if(x[i]>mayor){
            mayor = x [i];
        }
        
    }
    return mayor;
}
// console.log(mayor([1,30,3]))

function avg(x){
    var sum = 0;
    for(var i=0; i<x.length; i++){
        sum = sum + x[i];
    }
    var promedio = sum/x.length;
    return promedio;
}

// y = avg([2,2,3]);
// console.log(y);

var im = [];
function impares2(){
    for(var i = 1; i<=50; i+=2){
        im.push(i);
    }
    console.log(im);
}
// impares2();

function mayoresxd(lista, y){
    var conteo = 0;
    for(var i = 0; i < lista.length; i++){
        
        if(lista[i] > y){
            conteo++
        }
    }
    console.log(conteo)
}

// mayoresxd([1,2,8,0,3,9,7,6,5], 4);

function square(argumento){
    for(var i=0; i < argumento.length; i++){
        console.log(argumento[i] * argumento[i])
    }
}
// square([4,8,2,6])

function negativos(argumento){
    for(var i=0; i < argumento.length; i++){
        if(argumento[i] < 0){
            argumento.push(0);
        }
    }
    console.log(argumento);
}
// negativos([2,4,6,-8,-2]);

function multiple(argumento){
    var lista = []
    lista.push(Math.max(...argumento))
    lista.push(Math.min(...argumento))
    lista.push(avg(argumento))
    console.log(lista);
}
// multiple([4,5,7,12,19])

function valores(argumento){
    argumento[0] = 2
    argumento[(argumento.length - 1)] = 2
    console.log(argumento);
}
// valores([7,5,3,6]);

function string(argumento){
    for(var i=0; i < argumento.length; i++){
        if(argumento[i] < 0){
            argumento[i] = 'Dojo'
        }
    }
    console.log(argumento);
}
// string([2,4,-4,-7]);
