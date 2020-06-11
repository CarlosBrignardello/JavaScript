# ASINCRONISMO



### ÍNDICE

El resto de información acerca de JavaScript se encuentra segmentado en el resto de documentos:

1. [JavaScript](./README.md)

2. [Listas y manejo de listas](./02-arrays.md)
3. [Objetos y Clases](./03-clases-objetos.md)
4. [Asincronismo y API](./04-api-asincronismo.md)
5. [Manipular el DOM](./05-manipular-DOM.md)
6. [ES6](./06-ES6.md)



### CONTENIDO

El contenido del documento es el siguiente:

* **Callbacks**
* **Promesas**
* **`async` | `await`**
* **Comparación**
* **AJAX**
* **Fetch**
* **Axios**
* **JQuery**





### Event Loop - Entendiendo el asincronismo

En el desarrollo de sitios o aplicativos web es muy común realizar consultas a ***A***pplication ***P***rogramming ***I***nterface(***API***) estas pueden ser propias o de terceros, lo cual al final del día se puede traducir como una petición al servidor, dicha petición se realiza utilizando funciones de *JavaScript* de las cuales algunas presentan **asincronía.**



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

Las promesas permiten lidiar con el código asíncrono evitando generar varias callbacks. Estas comienzan en un estado *pendiente*. Esto es debido a que la función que la llama continua el resto de ejecuciones y espera a que la promesa retorne un estado, sea este `resolve` o `rejected`.



**Crear una promesa**

Para crear una promesa se debe generar un constructor de promesa, que se inicializa mediante la palabra clave `new Promise()`.  En su interior podemos devolver dos valores uno de respuesta y otro  de rechazo, estos valores se declaran mediante `resolve `| `reject.`

```js
let estado = true

const promesa = new Promise((resolve, reject) => {
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

Utilizando `resolve` y `reject` podemos comunicar un valor, siendo resolve la respuesta y refect el mensaje de error.



**Consumir una promesa**

Para consumir una promesa debemos ejecutar una función que evaluara si la petición fue aceptada o rechazada, mediante la sintaxis `then | catch`.

```js
const revisarEstado = new Promise()
	//...

// Ejecutamos cuando se valide una petición.
revisarEstado.then(res => {
    console.log(`EXITO: ${res}`)
})

// Ejecutamos cuando falle una petición.
revisarEstado.catch(err => {
    console.log(`ERROR: ${err}`)
})
```

Al consumir la promesa estamos ejecutando como tal la promesa que creamos anteriormente y se espera que esta se resuelva, utilizando `then`, en caso de que falle se devolverá el error mediante `catch`.





### Async Await

JavaScript evoluciono el manejo del asincronismo del **callback** a las **promesas** y más recientemente se incorporo la sintaxis `async` / `await` que simplifico aún más el desarrollo.

La última forma de generar tareas asíncronas y también, la más sencilla y clara es mediante Async-await.

```javascript

```

> SSSS





### Comparación [Callback - Promesa - Async|Await]

En los ejemplos se simulan el manejo de las peticiones de los usuarios en un servidor de node.js para poder responder.



**Callback**

```js
// Manejador de petición que recibe la petición y la respuesta.
function requestHandler(req, res) {
  // Consultamos un ID en un modelo, según la petición del usuario.
  // Al añadir una función se espera por la respuesta, siendo la consulta o un error.
  User.findById(req.userId, function(err, user) {
    // Validamos
    if (err) {
      res.send(err);
    // Si funciona buscamos en el modelo de tareas.
    } else {
      Tasks.findById(user.tasksId, function (err, tasks) {
        if (err) {
          return res.send(err);
        // Si funciona modificamos las tareas.
        } else {
          tasks.completed = true;
          // Esperamos la respuesa al incluir una función.
          tasks.save(function(err) {
            if (err) {
              return res.send(err);
            } else {
              // Si todo funciona enviamos un mensaje.
              res.send('Task Completed');
            }
          });
        }
      });
    }
  });
}
```

> La petición en si es muy sencilla pero al manejarla mediante callbacks se genera mucho código lo que lo vuelve difícil de mantener.



**Promesa**

```js
function requestHandler(req, res) {
  User.findById(req.userId)
    // Utilizamos .then para esperar la respuesta y manejarla.
    .then(function (user) {
      return Tasks.findById(user.tasksId)
    })
    // Al terminar el primer .then pasamos al segundo.
    .then(function (tasks) {
      tasks.completed = true;
      return tasks.save();
    })
    // Al terminar el .then anterior pasamos.
    .then(function () {
      res.send('Tasks Completed!');
    })
    // con .cath manejamos todos los errores que pudieron ocurrir en la consulta.
    .catch(function (errors) {
      res.send(erros);
    });
}
```

> Las promesas simplifican mucho más el código al existir un único manejador de los errores, al mismo tiempo vuelve más ordenado el código.



**Async Await**

```js
// Al manejar operaciones asincronicas utilizamos la palabra clave async.
async function requestHandler(req, res) {
  // Intentamos ejecutar el código.
  try {
    // Ejecutamos todas las operaciones requeridas y anteponemos la palabra clave await en las que se deba esperar una respuesta.
    const user = await User.findById(req.userId);
    const tasks = await Tasks.findById(user.tasksId);
    tasks.completed = true;
    await tasks.save();
    res.send('Tasks Saved');
  }
  // Si existe un error lo capturamos.
  catch (e) {
    res.send(e);
  }
}
```

> Mediante Async-Await es muchísimo más fácil manejar las peticiones, el código se reduce y es simple de mantener.





### AJAX

Sus siglas significan básicamente JavaScript Asíncrono y XML. En Ajax se programa un objeto denominado `XMLHttpRequest` que permite solicitar datos al servidor y procesarlos. Ajax cuenta con la característica de que realiza actualizaciones asincrónicas, por lo que no se requiere de refrescar la página al obtener nueva información.



### Fetch

Es un nuevo estándar que entrega una alternativa para interactuar con el protocolo HTTP. Se basa en promesas, esta disponible también en **node**.

```js
const url = 'https://pokeapi.co/api/v2/pokemon/1/'

fetch(url)
.then(response => response.json())
.then(data => {
  console.log(data)
})
.catch(err => console.log(err))
```

https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch





**Axios**







**JQuery**