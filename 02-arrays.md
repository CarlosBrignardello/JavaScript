# ARRAYS

### Descripción

* **Iterar listas**

* **foreach**

* **Filtrar elementos | filter**
* **Construir .........**



Son estructuras de datos que permiten agrupar datos dentro de una colección, posteriormente se podrán realizar una serie de acciones dentro de esa colección.



**Declarar array**

La sintaxis para declarar un array es la siguiente.

```javascript
var personas = ["carlos", "damaris", "ale", "cristian"];
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

Para recorrer un array podemos utilizar idealmente un ciclo for.

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



**Recorrer un Array con forEach**

```js
const lenguages = ['Python', 'Java', 'Go', 'JavaScript']

lenguages.forEach(element => {
    console.log(`Lenguaje de programación: ${element}`)    
});
```



### Filtrar elementos de un array - *filter()*

**Filtrar todos los elementos de una lista**

```javascript
const personas = [
    {name: 'Juan', age: 17, class: 'JavaScript'},
    {name: 'Carlos', age: 21, class: 'ReactJS'},
    {name: 'Alexandra', age: 15, class: 'Arte'},
    {name: 'Damaris', age: 21, class: 'Bases de datos'},
    {name: 'Miguel', age: 15, class: 'Redes'}
]

console.log(personas)

personas.filter(persona => {
    console.log(persona)
})
```

> En este caso mostramos todos los objetos por separado.



**Filtrar con condiciones**

```js
const personas = [
    {name: 'Juan', age: 17, class: 'JavaScript'},
    {name: 'Carlos', age: 21, class: 'ReactJS'},
    {name: 'Alexandra', age: 15, class: 'Arte'},
    {name: 'Damaris', age: 21, class: 'Bases de datos'},
    {name: 'Miguel', age: 15, class: 'Redes'}
]

console.log(personas)

const mayores = personas.filter(persona => {
    return persona.age > 18
})

console.log(mayores)
```

> En este caso el filtro me mostrara únicamente los objetos que poseen una la clave de edad con valor mayor a 18.



**Filtrar con funciones**

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



### Encontrar elementos de un Array - *find()*

```js
const personas = [
    {name: 'Juan', age: 17, class: 'JavaScript'},
    {name: 'Carlos', age: 21, class: 'ReactJS'},
    {name: 'Alexandra', age: 15, class: 'Arte'},
    {name: 'Damaris', age: 21, class: 'Bases de datos'},
    {name: 'Miguel', age: 15, class: 'Redes'}
]

console.log(personas)

const damaris = personas.find(persona => {
    return persona.name === 'Damaris'
})

console.log(`${damaris.name} esta aprendiendo ${damaris.class}.`)
```

> De esta forma podemos acceder al objeto que buscamos mediante una nueva variable.



### map



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



### Reducir un Array a un solo elemento - *reduce()*

Existe otra función común para trabajar con Arrays que es reducir los valores de un array a un valor único.



Por ejemplo si quisiéramos conocer la suma total de valores de una lista podemos hacer lo siguiente:

```js
const personas = [
    {name: 'Juan', age: 17, class: 'JavaScript'},
    {name: 'Carlos', age: 21, class: 'ReactJS'},
    {name: 'Alexandra', age: 15, class: 'Arte'},
    {name: 'Damaris', age: 21, class: 'Bases de datos'},
    {name: 'Miguel', age: 15, class: 'Redes'}
]

console.log(personas)

let total = personas.reduce((edadTotalTemporal, persona) => {
    return edadTotalTemporal + persona.age
}, 0)

console.log(`La suma de las edades de todas las personas es ${total}.`)
```



Otra forma es la siguiente:

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



**Object Keys**

```js
const person = {
    name: 'Carlos',
    profession: 'Frontend Developer',
    age: 21
}

console.log(Object.keys(person))
// (3) ['name', 'profession', 'age']
```

Permite comprobar si una llave o un valor existe en un objeto.



**Spread Operator**

Permite aglomerar el contenido de un Array en una única variable, es posible incluso generar nuevos Arrays que sean la combinación de otros.

```javascript
let lenguages = ['JavaScript', 'PHP', 'Python']
let frameworks = ['ReactJS', 'VueJS', 'Angular']

let combinar = [...lenguages, ...frameworks]
console.log(combinar)
```

**¿PORQUE?**: Es útil por que permite copiar arreglos y generar nuevos en base a otros, lo que permite realizar modificaciones a listas sin afectar a la original.



**Introducir elementos en una lista**: 

* lista.push(elemento)

**Eliminar ultimo elemento de una lista y retornarlo**: 

* lista.pop()