# ASINCRONISMO

### Descripción

El contenido del documento es el siguiente:

* **Event Loop**
* **Promesas**
* **Callbacks**
* **`async` | `await`**



### Event Loop - Entendiendo el asincronismo

Los navegadores y node.js están constantemente corriendo un único evento de loop que ejecuta el código, en un comienzo se ejecuta todo el código síncrono y al mismo tiempo se deja en una cola los eventos asincrónicos para ser llamados posteriormente, mientras obtienen los datos de la red. Cuando uno de los datos asíncronos termina de cargar se llama devuelta(**callback**). Independiente del orden en que fueron ejecutados solo serán obtenidos en el orden en que carguen.

```js
// Ejecución Sincrona
console.log('#1 Ejecución sincrona')

// Ejecución Asincrona con 0 de retardo
setTimeout( () => console.log('#2 Timeout'), 0)

// Ejecución asincronica con promesa
Promise.resolve().then( () => console.log('#3 Promesa'))

// Ejecución Sincrona
console.log('#4 Ejecución sincrona')
```

> En este caso el orden de ejecución sería el siguiente [1,4,3,2]. La razón es que mientras las ejecuciones síncronas cargan siempre primero, luego cargan las promesas y al final el resto de elementos en la pila de ejecución.



### Promesas

Las promesas permiten lidiar con el código asíncrono evitando generar varias callbacks. Estas comienzan en un estado *pendiente*. Esto es debido a que la función que la llama continua el resto de ejecuciones y espera a que la promesa retorne un estado, se este `resolve` o `rejected`.



**Crear una promesa**

Para crear una promesa se debe generar un constructor de promesa, que se inicializa mediante la palabra clave `new Promise()`.  En su interior podemos devolver dos valores uno de respuesta y otro  de rechazo, estos valores se declaran mediante `resolve `| `reject.`

```js
let estado = true

const revisarEstado = new Promise((resolve, reject) => {
  if (estado) {
    const exito = 'Todo bien, todo correcto...'
    resolve(exito)
  } else {
    const fracaso = 'Todo mal, todo pesimo...'
    reject(fracaso)
  }
})
```

> Esta promesa revisa si el valor de `estado` es correcto y devuelve una promesa `resuelta`.

Utilizando `resolve` y `reject` podemos comunicar un valor.



**Consumir una promesa**

Para consumir una promesa debemos ejecutar una función que evaluara si la petición fue aceptada o rechazada, mediante la sintaxis `then | catch`.

```js
const revisarEstado = new Promise()
	//...

const consumirRevisarEstado = () => {
  revisarEstado
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}
```

Al consumir la promesa estamos ejecutando como tal la promesa que creamos anteriormente y se espera que esta se resuelva, utilizando `then`, en caso de que falle se devolverá el error mediante `catch`.



**Encadenar promesas**

https://flaviocopes.com/javascript-promises/



### Asincronismo

JavaScript evoluciono el manejo del asincronismo del **callback** a las **promesas** y más recientemente se incorporo la sintaxis `async` / `await` que simplifico aún más el desarrollo.



**JQuery**

Para utilizar Jquery modificamos el `<body>` de nuestro archivo HTML con el siguiente contenido:

```html
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
```



**Request**

Haremos un request para obtener los datos, para hacerlo hacemos uso del método `$.get()`. El código es el siguiente:

```javascript
// Guardamos la API en una constante
const API_URL = 'https://swapi.co/api/'
//Guardamos la ruta de personas de la API en una constante
const PEOPLE_URL = 'people/:id'

// Colocamos la URL que necesitamos y modificamos el string para indicar que buscamos el primer elemento de la ruta.
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
// Indicamos que el request es hacia otra página
const opts = { crossDomain: true }
// Creamos una función que ejecute una acción al realizar exitosamente la solicitud
const onResponse = function (personaje) {
    console.log(`Hola yo soy ${personaje.name}`)
}

// Ejecutamos la petición con los valores generados en las constantes anteriores.
$.get(lukeUrl, opts, onResponse) 
```

> El resultado de la ejecución de este programa es lo siguiente:
>
> Hola yo soy Luke Skywalker



**Haciendo multiples request**

En el siguiente código realizamos varios request en paralelo:

```javascript
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }
const onResponse = function (personaje) {
    console.log(`Hola yo soy ${personaje.name}`)
}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onResponse) 
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
obtenerPersonaje(4)
obtenerPersonaje(5)
```

> Al ejecutar el programa obtenemos los personajes, sin embargo el orden en que van apareciendo siempre varia y nunca es ordenado. No sabemos en que orden llegaran las respuestas, es imposible de predecir. Eso es debido al asincronismo.

**Manejar orden y asincronismo**

Mediante el uso de callbacks ordenaremos la forma en que recibimos los datos del request.

```javascript
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }
const onResponse = function (personaje) {
    console.log(`Hola yo soy ${personaje.name}`)
}

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onResponse) 
    if(callback){
        callback()
    }
}

obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4, function(){
                obtenerPersonaje(5)
            })
        })
    })
})
```

**Manejo de errores con callbacks**

A continuación se agrega una solución a una posible eventualidad en caso de que mientras se reciben los callbacks se obtenga una respuesta al quedarse sin internet. Esto lo hacemos utilizando el método `fail()` en la función de JQuery.

```javascript
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, callback).fail(function(){
        console.log('Sucedio un error. No se pudo obtener el personaje')
    }) 

}

obtenerPersonaje(1, function(personaje){
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2, function(personaje){
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function(personaje){
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function(personaje){
                    console.log(`Hola, yo soy ${personaje.name}`)
            })
        })
    })
})
```



### Async Await

La última forma de generar tareas asíncronas y también, la más sencilla y clara es mediante Async-await.

Creamos una función para obtenerlos personajes que realizara lo mismo que hacíamos con la lista anterior.

Sin embargo dentro de las promesas guardaremos los personajes en una variable la cual una vez se obtengan todas las promesas las guardara en la variable, para hacer eso utilizamos la palabra clave `await` de la siguiente forma:

```javascript
async function obtenerPersonajes(){
    var ids = [1, 2, 3, 4, 5, 6]
    var promesas = ids.map( id => obtenerPersonaje(id))
    try{
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    }
    catch(id){
        onError(ID)
    }
}
```

> Lo que haremos es detener la ejecución del código se detendrá hasta que todas las promesas sean resueltas, mientras tanto el resto del código se seguirá ejecutando sin problemas. para poder utilizar `await` debemos marcar la función padre completa como asíncrona, con la palabra clave `async`.
>
> Finalmente la variable que contiene al `await `debe ir dentro de un `try` el cual posteriormente posee un `catch` para detectar un error.

El resultado final es el siguiente:

```javascript
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true };

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, function(data){
        resolve(data);
    })
    .fail(()=>reject(id));
  });
}

function onError(id){
  console.log(`Sucedió un error al obtener el personaje ${id}`);
}

async function obtenerPersonajes(){
    var ids = [1, 2, 3, 4, 5, 6]
    var promesas = ids.map( id => obtenerPersonaje(id))
    try{
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    }
    catch(id){
        onError(ID)
    }
}

obtenerPersonajes()
```











**Sintaxis de la promesa**

La sintaxis de la promesa es la siguiente:

```javascript
new Promise(function(resolve, reject){
	console.log('EXAMPLE')
})
```

**Promesa**

En base a los ejemplos anteriores, los podemos resolver mediante promesas de la siguiente forma:

```javascript
// Obtenemos los datos de la API
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true };

function obtenerPersonaje(id) {
// NO recibimos un callback, se retorna una promesa.    
    return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, function(data){
        resolve(data);
    })
    .fail(()=>reject(id));
  });
}

function onError(id){
  console.log(`Sucedió un error al obtener el personaje ${id}`);
}

// Llamamos la función con la promesa
obtenerPersonaje(1)
.then(function(personaje){
  console.log(`El personaje 1 es: ${personaje.name}`);
})
.catch(onError);
```



**Promesas encadenadas**

Cuando se usan Promesas la ejecución de las llamadas no se hacen de manera anidada sino de manera encadenada, al mismo nivel una debajo de la otra, lo que hace que el código sea mucho más legible y mantenible.

Modificamos la función anterior para obtener la función mediante una arrow function. Para devolver una nueva promesa retornaremos la misma función anterior.

```javascript
obtenerPersonaje(1)
.then((personaje) =>{
  console.log(`El personaje 1 es: ${personaje.name}`);
    return obtenerPersonaje(2)
})
.catch(onError);
```

Sin embargo seguiremos encadenando mediante el uso del método then, quedando de la siguiente manera:

```javascript
obtenerPersonaje(1)
.then((personaje) =>{
  console.log(`El personaje 1 es: ${personaje.name}`);
    return obtenerPersonaje(2)
})
.then((personaje) =>{
  console.log(`El personaje 2 es: ${personaje.name}`);
    return obtenerPersonaje(3)
})
.then((personaje) =>{
  console.log(`El personaje 3 es: ${personaje.name}`);
    return obtenerPersonaje(4)
})
.then((personaje) =>{
  console.log(`El personaje 4 es: ${personaje.name}`);
    return obtenerPersonaje(5)
})
.catch(onError);
```

> Lo que hacemos en el ejemplo es solicitar un personaje, recibirlo y solicitar otro, así todo el tiempo.
>
> De esta forma todo queda más claro, el método `catch()` sigue aplicando para todos los casos. Así todos los request se están haciendo en serie.
>
> Resultado:
>
> El personaje 1 es: Luke Skywalker
> El personaje 2 es: C-3PO
> El personaje 3 es: R2-D2
> El personaje 4 es: Darth Vader

Finalmente el archivo completo es el siguiente:

```javascript
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true };

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, function(data){
        resolve(data);
    })
    .fail(()=>reject(id));
  });
}

function onError(id){
  console.log(`Sucedió un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
.then((personaje) =>{
  console.log(`El personaje 1 es: ${personaje.name}`);
    return obtenerPersonaje(2)
})
.then((personaje) =>{
  console.log(`El personaje 2 es: ${personaje.name}`);
    return obtenerPersonaje(3)
})
.then((personaje) =>{
  console.log(`El personaje 3 es: ${personaje.name}`);
    return obtenerPersonaje(4)
})
.then((personaje) =>{
  console.log(`El personaje 4 es: ${personaje.name}`);
    return obtenerPersonaje(5)
})
.catch(onError);
```



**Promesas en paralelo**

Hasta el momento estamos haciendo funcionar las promesas en serie, NO en paralelo, lo cual se puede mejorar haciendo que mejore el rendimiento del programa. El problema era el orden en que recibíamos las promesas en paralelo, sin embargo ahora si podemos modificar esto.

En base al ejemplo anterior generaremos un array donde guardaremos los ID de los personajes que queremos mostrar. Recorreremos el array y devolveremos elementos nuevos que serán promesas.

```javascript
var ids = [1, 2, 3, 4, 5, 6]
var promesas = ids.map( id => obtenerPersonaje(id))
```

Con esto lo que obtenemos es un array lleno de promesas(en caso de que revisemos "promesas" en la consola). Ahora podemos llamar a un método de la clase de promesas llamado `all()`, lo que hacemos es mediante `then()` obtener 
las promesas de cada personaje.

```javascript
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true };

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, function(data){
        resolve(data);
    })
    .fail(()=>reject(id));
  });
}

function onError(id){
  console.log(`Sucedió un error al obtener el personaje ${id}`);
}

var ids = [1, 2, 3, 4, 5, 6]
/* Alternativa #1
var promesas = ids.map((id) =>{
    return obtenerPersonaje(id)
})
*/
var promesas = ids.map( id => obtenerPersonaje(id))
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)
```

