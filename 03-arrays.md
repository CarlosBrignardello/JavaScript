# ARRAYS



Son estructuras de datos que permiten agrupar datos dentro de una colección, posteriormente se podrán realizar una serie de acciones dentro de esa colección.

**Declarar array**

La sintaxis para declarar un array es la siguiente.

```javascript
var personas = [carlos, damaris, ale, cristian];
```

> Pueden ser almacenados en su interior incluso objetos.

**Obtener datos de un array**

Para obtener los datos de un array se puede utilizar cualquiera de los siguientes métodos:

```javascript
console.log(personas[0])
console.log(personas[0].nombre)
console.log(personas[0]['apellido'])
```

**Recorrer un array**

Para recorrer un array podemos utilizar idealmente un ciclo for

```javascript
var carlos = {
    nombre: 'Carlos',
    apellido: 'Brignardello',
    edad: 21
}

var damaris = {
    nombre: 'Damaris',
    apellido: 'Bejar',
    edad: 21
}

var ale = {
    nombre: 'Ale',
    apellido: 'Añazco',
    edad: 23
}

var cristian = {
    nombre: 'Cristian',
    apellido: 'Glausser',
    edad: 22
}

var personas = [carlos, damaris, ale, cristian];

for(var i = 0; personas.length ; i++){
    var persona = personas[i];
    console.log(`${persona.nombre} tiene ${persona.edad} años`)
}
```

**Filtrar elementos de un array**

Para poder filtrar se requiere de dos cosas, un array y una condición o función.

```javascript
var carlos = {
    nombre: 'Carlos',
    apellido: 'Brignardello',
    edad: 21,
    altura: 1.68
}

var damaris = {
    nombre: 'Damaris',
    apellido: 'Bejar',
    edad: 21,
    altura: 1.65
}

var ale = {
    nombre: 'Ale',
    apellido: 'Añazco',
    edad: 23,
    altura: 1.65
}

var cristian = {
    nombre: 'Cristian',
    apellido: 'Glausser',
    edad: 22,
    altura: 1.75
}

const esAlta = ({ altura }) => altura > 1.7
const esChiquito = ({ altura }) => altura < 1.7

var personas = [carlos, damaris, ale, cristian];
var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esChiquito);

console.log(personasAltas);
console.log(personasBajas);
```

> Con la función `filter()` devolvemos un array nuevo en base al parámetro introducido.



**Transformar arrays**



La función `map()` nos devuelve un nuevo array que modificara cada elemento que introduzcamos del array original.

```javascript
var carlos = {
    nombre: 'Carlos',
    apellido: 'Brignardello',
    edad: 21,
    altura: 1.68
}

var damaris = {
    nombre: 'Damaris',
    apellido: 'Bejar',
    edad: 21,
    altura: 1.65
}

var ale = {
    nombre: 'Ale',
    apellido: 'Añazco',
    edad: 23,
    altura: 1.65
}

var cristian = {
    nombre: 'Cristian',
    apellido: 'Glausser',
    edad: 22,
    altura: 1.75
}

/*
const esAlta = ({ altura }) => altura > 1.7
const esChiquito = ({ altura }) => altura < 1.7
const pasarAlturaACms = ( persona ) =>{
    return {
        ...persona,
        altura: persona.altura * 100
    }
}
*/

const esAlta = ({ altura }) => altura > 1.7
const esChiquito = ({ altura }) => altura < 1.7
const pasarAlturaACms = ( persona ) =>({
        ...persona,
        altura: persona.altura * 100
})


var personas = [carlos, damaris, ale, cristian];
var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esChiquito);

var personasCms = personas.map(pasarAlturaACms);

console.log(personasAltas);
console.log(personasBajas);
console.log(personasCms);
```

> Lo que hace este código es añadir un nuevo array con unos de sus elementos modificados.



**Reducir array a un solo elemento**

Existe otra función común para trabajar con arrays que es reducir los valores de un array a un valor único.

Una forma es la siguiente:

```javascript
var carlos = {
    nombre: 'Carlos',
    apellido: 'Brignardello',
    edad: 21,
    altura: 1.68,
    cantidadDeLibros: 15
}

var damaris = {
    nombre: 'Damaris',
    apellido: 'Bejar',
    edad: 21,
    altura: 1.65,
    cantidadDeLibros: 20

}

var ale = {
    nombre: 'Ale',
    apellido: 'Añazco',
    edad: 23,
    altura: 1.65,
    cantidadDeLibros: 5

}

var cristian = {
    nombre: 'Cristian',
    apellido: 'Glausser',
    edad: 22,
    altura: 1.75,
    cantidadDeLibros: 21

}

var personas = [carlos, damaris, ale, cristian];

var acum = 0;

for(var i = 0; i < personas.length; i++){
    acum = acum + personas[i].cantidadDeLibros;
}

console.log(`En total todos tienen ${acum} libros`);
```

Sin embargo se puede hacer lo mismo pero con `reduce()`.

```javascript
var carlos = {
    nombre: 'Carlos',
    apellido: 'Brignardello',
    edad: 21,
    altura: 1.68,
    cantidadDeLibros: 15
}

var damaris = {
    nombre: 'Damaris',
    apellido: 'Bejar',
    edad: 21,
    altura: 1.65,
    cantidadDeLibros: 20

}

var ale = {
    nombre: 'Ale',
    apellido: 'Añazco',
    edad: 23,
    altura: 1.65,
    cantidadDeLibros: 5

}

var cristian = {
    nombre: 'Cristian',
    apellido: 'Glausser',
    edad: 22,
    altura: 1.75,
    cantidadDeLibros: 21

}

var personas = [carlos, damaris, ale, cristian];

const reducer = (acum, { cantidadDeLibros } ) => acum + cantidadDeLibros;

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`);
```

