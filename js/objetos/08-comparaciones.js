var x = 4, y = '4';
console.log(x == y);
console.log(x === y);

var carlos = {
    nombre: 'Carlos',
};

var otroCarlos = {
    ...carlos
};

console.log(carlos == otroCarlos);
console.log(carlos === otroCarlos);