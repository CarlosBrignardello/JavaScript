function printSum(valor){
    for(i = 0; i <= valor; i++){
        var valorA = i + 1;
        console.log("valor " + i  + ": "+ valorA * i);
    }
}
printSum(10);

function sumar(valor){
    var suma = 0;
    for(i = 0; i <= valor; i++){
        suma = suma + i;
    }
    console.log(suma)
}

sumar(10);
sumar(100);
sumar(1000);