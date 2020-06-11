#  ARRAYS

Las listas son estructuras de datos que permiten agrupar información dentro de una colección para posteriormente realizar una serie de acciones dentro de esa colección.



### ÍNDICE

El resto de información acerca de JavaScript se encuentra segmentado en el resto de documentos:

1. [JavaScript](./README.md)

2. [Listas y manejo de listas](./02-arrays.md)
3. [Objetos y Clases](./03-clases-objetos.md)
4. [DOM y Eventos](./04-DOM-eventos.md)
5. [Asincronismo y API](./05-api-asincronismo.md)
6. [ES6](./06-ES6.md)



### CONTENIDO

* **Iterar listas**

* **Filter()**
* **Construir .........**





### OPERAR LISTAS

**Declarar Array**

La sintaxis para declarar un array es la siguiente.

```javascript
var personas = ["carlos", "damaris", "camila", 'gloria'];
var unos = Array(6).fill(1)		// Genera 6 veces el número 1.
```



**Conocer largo de un Array**

```js
let letras = ['a', 'b', 'c', 'd', 'e']
console.log(letras.length) // Devuelve 5
```



**Obtener datos de un Array**

Para obtener los datos de un array se puede utilizar cualquiera de los siguientes métodos:

```javascript
console.log(personas[0])
console.log(personas[0].nombre)
console.log(personas[0]['apellido'])
```



**Añadir elemento al final de una lista**

```js
lista.push('Juan')
```



**Añadir elemento al comienzo de una lista**

```js
lista.unshift(0)
```



**Eliminar elemento del final de una lista**

```js
lista.pop()
```

> detalles.......



**Elimina elemento desde el comienzo**

```js
lista.shift()
```



**Obtener parte de una lista**

```js
lista.splice(1, 4) // Obten los valores desde el indice 1 hasta el 4.
```



**Obtener x valores desde x índice**

```js
lista.splice(0, 2) // Obten los dos primeros valores.
lista.splice(3, 2) // Obtiene dos valores comenzando por el indice 3.
```



**Reemplazar valores**

```js
lista.splice(0, 2, 2, 'cero', 'uno') // Eliminamos los primeros dos valores y agregamos dos nuevos.
```



**Ubicar primera posición de un elemento en una lista**

```js
lista.indexOf('Sandia')  // Devolvera el indice donde se encontro el objeto por primera vez.
```



**Ubicar última posición de un elemento en una lista**

```js
lista.lastIndexOf('Sandia')  // Devolvera el indice donde se encontro el objeto por última vez.
```



**Saber si existe un valor en una lista**

```js
lista.includes(valor)
```



**Ordenar valores de una lista de menor a mayor**

```js
const lista = [1, 20, 15, 4, 13]
lista.sort()  // Devuelve [1, 4, 13, 15, 20]
```



**Invertir valores de una lista**

```js
const lista = [1, 20, 15, 4, 13]
lista.reverse()  // Devuelve [20, 15, 13, 3, 1]
```



**Convertir lista en String**

```js
const nombre = ['c', 'a', 'r', 'l', 'o', 's']
nombre.toString()  // Convierte 'c,a,r,l,o,s'
```



**Convertir lista en String con formato**

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.join(' '); // Convierte "Banana Orange Apple Mango"
```



**Recorrer un Array**

Para recorrer un array podemos utilizar idealmente un ciclo for.

```javascript
var animales = [gato, perro, ninfa, tigre, cocodrilo, buho];

for(let i = 0; personas.length ; i++){
    console.log(animales[i])
}
```



**Recorrer un Array con forEach**

```js
const lenguages = ['Python', 'Java', 'Go', 'JavaScript']

lenguages.forEach(element => {
    console.log(`Lenguaje de programación: ${element}`)    
});
```





### FILTER()

........

**Filtrar todos los elementos de una lista**

```javascript
*****
```



**Filtrar con condiciones**

```js
const personas = [
***********************************
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
****
```

> Con la función `filter()` devolvemos un array nuevo en base al parámetro introducido.



### FIND()

......

**......**

```js
***********
```

> De esta forma podemos acceder al objeto que buscamos mediante una nueva variable.





### MAP()

......

**Transformar arrays**

La función `map()` nos devuelve un nuevo array que modificara cada elemento que introduzcamos del array original.

```javascript
*******
```

> Lo que hace este código es añadir un nuevo array con unos de sus elementos modificados.



### REDUCE()

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