var users = [
    {name: "Michael", age:37}, 
    {name: "John", age:30}, 
    {name: "David", age:17}
    ];

function recorrer(array){
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i].name} - ${array[i].age}`);
        console.log(array[i].age >=18 ? `${array[i].name} es mayor de edad` : `${array[i].name} es menor de edad`)
    }
}
recorrer(users)