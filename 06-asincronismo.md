# ASINCRONISMO



### Funciones como parámetros

Hasta el momento se han estado pasando parámetros del tipo texto, número, etc. Sin embargo es importante saber que en JavaScript es posible pasar **funciones como parámetro**.

El código que utilizaremos para ello es el siguiente:

```javascript
class NOMBRE_CLASE{   
    constructor(param1, param2, param3){
        this.param1 = param1;
        ...........
    }
    NOMRE_FUNCIÓN(fn){
        console.log(`EXAMPLE`)
        if(fn){
            fn(this.param1, this.param2, param3)
        }
    }

function NOMBRE_FUNCIÓN_PARAMETRO(param1, param2, param3){
    console.log(`EXAMPLE`)
    if(esDev){
        console.log(`EXAMPLE`)
    }
}
    
var obj1 = new NOMBRE_CLASE('Carlos', 'Brignardello', 1.68)
var obj2 = new NOMBRE_CLASE('Damaris', 'Bejar', 1.58)
obj1.NOMBRE_FUNCIÓN(NOMBRE_FUNCIÓN_PARAMETRO)
obj2.NOMBRE_FUNCIÓN()
```

Lo que hacemos en el siguiente código es que al ejecutar la función *"saludar"* esta pasará como parámetro en algunos casos una función, la cual en caso de ocurrir ejecutara la función que enviamos como parámetro con los valores definidos en la función.

```javascript
class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura; 
    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if(fn){
            fn(this.nombre, this.apellido, false)
        }
    }
    soyAlto(){
        return this.altura > 1.7
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
        if(fn){
            fn(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev){
        console.log(`Veo que eres desarrollador/a`)
    }
}

var carlos = new Persona('Carlos', 'Brignardello', 1.68)
var damaris = new Persona('Damaris', 'Bejar', 1.58)
var dante = new Desarrollador('Dante', 'Ruiz', 1.75)
carlos.saludar(responderSaludo)
damaris.saludar()
dante.saludar(responderSaludo)
```

> En el caso del objeto Damaris no se envía ningún parámetro por lo que simplemente se omite el condicional que ejecuta la función.
>
> Resultado:
>
> Hola, me llamo Carlos Brignardello
> Buen día Carlos Brignardello
> Hola, me llamo Damaris Bejar
> Hola, me llamo Dante Ruiz y soy desarrollador
> Buen día Dante Ruiz
> Veo que eres desarrollador/a



### Asincronismo

JavaScript solo puede hacer una tarea a la vez, sin embargo puede delegar la ejecución de ciertas funciones a otros procesos.

Este modelo de concurrencia se llama EVENT LOOP. JavaScript posee un componente llamado pila de ejecución o Call Stack, donde ordena las llamadas a funciones según el orden de ejecución, al terminar de ejecutar una función la retira de la pila.

Por ejemplo se puede ejecutar una función al obtener los datos del servidor. Este proceso recibe el nombre de Call Back, mientras llega la respuesta se seguirán ejecutando tareas e incluso cuando la respuesta ya este lista ira a parar a la cola de tareas, a esta cola de tareas van a parar peticiones a servidores, navegación, eventos cada cierto tiempo, una vez se quede sin tareas en la pila de ejecución se utilizara el dato que se pidió inicialmente. Por esta razón es importante no generar un cuello de botella o varias tareas pesadas en la cola de tareas.



**El tiempo en JavaScript**

Podemos comprobar el tiempo en JavaScript con el siguiente código, donde agregaremos un retraso.

```javascript
setTimeout(() => console.log('100ms'), 100)
setTimeout(() => console.log('200ms'), 200)
setTimeout(() => console.log('400ms'), 400)
setTimeout(() => console.log('800ms'), 800)
setTimeout(() => console.log('1600ms'), 1600)
console.log('a')
console.log('b')
console.log('c')
console.log('d')
console.log('e')
```

> Con este ejemplo el orden de ejecución es el siguiente:
>
> a
>
> b
>
> c
>
> d
>
> e
>
> 100ms
>
> 200ms
>
> 400ms
>
> 800ms
>
> 1600ms

Otro ejemplo que podemos ejecutar es el siguiente, otorgando 0 milisegundos de retraso y colocándolo en primer lugar del orden de ejecución.

```javascript
setTimeout(() => console.log('A - 0ms'), 0)
console.log('B')
console.log('C')
console.log('D')
```

> El resultado es el siguiente:
>
> B
>
> C
>
> D
>
> A - 0ms
>
> Lo que sucede es que al utilizar una función es que la ponemos en la cola de tareas y el resto del código se sigue ejecutando con normalidad, por lo que la función concreta será ejecutada al terminar de ejecutar todo el resto de operaciones.

Otro ejemplo:

```javascript
setTimeout(() => console.log('A - 500ms'), 500)
setTimeout(() => console.log('B - 1000ms'), 1000)
console.log('C')
setTimeout(() => console.log('D - 250ms'), 250)
console.log('E')
```

> Donde el resultado es:
>
> C
>
> E
>
> D - 250ms
>
> A - 500ms
>
> B - 1000ms
>
> Lo que sucede es que pese a encontrarse en la cola de tareas en orden distinto, estas se van disparando en orden y mientras se ejecuta la función de una ya se disparo la otra, por lo que los tiempos de las funciones si son prioridades.

Otro ejemplo:

```javascript
setTimeout(() => console.log('A - 100ms'), 100)
for(var i = 0; i < 900000000; i++){

}
```

> Con este ejemplo una vez pasaros ciertos segundos se completa el ciclo for y se muestra el mensaje *"A - 100ms"* por consola.



### Callbacks



Mediante la librería JQuery realizaremos request para obtener datos con una Api externa.

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

### Promesas

Al utilizar los sistemas anteriores para ordenar al flujo de ejecución de los request se llegaba a producir un problema denominado "callback hell", para optimizar la forma en que son solicitadas la request utilizamos un nuevo concepto denominado promesas.

Las promesas son valores que aun no se conocen, es la promesa de que existirá un valor cuando una acción asíncrona suceda y se resuelva.

1. Primer estado (Pending): es el primer estado de la promesa, sucede cuando se crea, mientras sucede la solicitud se esta resolviendo.
2. Segundo estado (Fulfilled):  una vez se resuelve al promesa se pasa a este estado.
   * Podemos obtener el valor de la resolución de la promesa con `.then(val => ...)`
3. Tercer estado (Rejected): si ocurre cualquier error la promesa pasa a este estado.
   * Para obtener el valor del error de la promesa utilizamos `.catch(err => ...)`

* Finalmente podemos encadenar una nueva promesa al finalizar la anterior.

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



**Async-await**

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