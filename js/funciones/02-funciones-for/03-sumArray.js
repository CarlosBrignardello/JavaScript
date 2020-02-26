function pushArray(valor){
    var list = []
    var sum = 0;
    for(var i = 0; i < valor; i++){
        list.push(i)
        console.log(list)
    }
}

pushArray(10)
pushArray(5)

var list = [1, 4, 6, 11, 24, 5, 8];
function sumArray(){
    var id = 0;
    for(var i = 0; i < list.length - 1; i++){
        console.log(`La suma de ${list[id]} y ${list[id+1]} es: ${list[id] + list[id + 1]}`)
        id++;
    }
}

sumArray()
