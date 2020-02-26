var y;

function printUpTo(valor){
    if(valor > 0){
        for(i = 0; i <= valor; i++){
            console.log(i)
        }
    }
    else{
        console.log(false)
        return false
    }
}

printUpTo(100);
y = printUpTo(-10)
console.log(y)