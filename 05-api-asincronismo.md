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
const apellidos = {
  carlos: 'Brignardello',
  damaris: 'Bejar'
}

const buscarApellidos = ( id ) => {

  return new Promise( ( resolv, reject ) => {
    if( id ){
      resolv( id )
    }
    else {
      reject(`No existe`)
    }
  })
}
```

> Esta promesa revisara si se cumple la condición. En caso contrario devolverá el error `No existe`.

Utilizando `resolve` y `reject` podemos comunicar un valor, siendo resolve la respuesta y reject el mensaje de error.



**Consumir una promesa**

Para consumir una promesa debemos ejecutar una función que evaluara si la petición fue aceptada o rechazada, mediante la sintaxis `then | catch`.

```js
buscarApellidos( apellidos.carlos ).then( lastname => {
  console.log(`La persona de apellido '${lastname}'. Si existe!`)
})
```

Al consumir la promesa estamos ejecutando como tal la promesa que creamos anteriormente y se espera que esta se resuelva, utilizando `then`, en caso de que falle se devolverá el error mediante `catch`.



**Anidar promesas**

```js
buscarApellidos( apellidos.carlos ).then( lastname => {
  buscarApellidos( apellidos.damaris ).then( lastname2 => {
    console.log(`Los apellidos '${lastname}' y '${lastname2}' si existen!`)
  })
})
```



**Anidar promesas con Promise.all**

```js
Promise.all([buscarApellidos(apellidos.carlos), buscarApellidos(apellidos.damaris)]).then( ([val1, val2]) => {
  console.log(`Los apellidos '${val1}' y '${val2}' si existen!`)
})
```

> Resuelve todas las promesas contenidas en su interior. Resuelve en forma abreviada lo mismo que el ejemplo anterior.



**Errores en las promesas**

```js
const apellidos = {
  carlos: 'Brignardello',
  damaris: 'Bejar'
}

const buscarApellidos = ( id ) => {

  return new Promise( ( resolv, reject ) => {
    if( id ){
      resolv( id )
    }
    else {
      reject(`No existe`)
    }
  })
}

buscarApellidos( apellidos.carlossssssss )
  .then( () => {
    console.log('Si existe!')
}).catch( err => {
  alert(err)
})

// Se puede agregar el .finally( () => {}) para realizar una tarea adicional al final de la promesa, como limpiar.
```

> Mediante catch podemos manejar un error, en si podemos manejar el mensaje definido en el reject.



### Async Await

JavaScript evoluciono el manejo del asincronismo del **callback** a las **promesas** y más recientemente se incorporo la sintaxis `async` / `await` que simplifico aún más el desarrollo y la implementación de una promesa.

La última forma de generar tareas asíncronas y también, la más sencilla y clara es mediante Async-await. Que permite realizar lo mismo que se hizo con promesas pero de una forma más breve.



**Generar promesa**

```javascript
const apellidos = {
  carlos: 'Brignardello',
  damaris: 'Bejar'
}

const buscarApellido = async ( id ) => {
  const apellido = apellidos[id]

  if( apellido ){
    return apellido
  } else{
    throw `No existe el apellido de ${id}`
  }
}
```

> A la función que devuelve una promesa le agregamos antes de los argumentos la palabra `async`.



**Manejar promesa**

```js
buscarApellido('carlos2')
  .then( id => console.log(id) )
  .catch( err => console.warn(err) )

// Alternativa
buscarApellido('carlos')
  .then( console.log )
  .catch( console.warn )
```

> Si nos equivocamos mostramos el mensaje de error.



**Await**

Permite esperar los resultados o la resolución de una promesa para poder manejar los resultados.

```js
// Objeto de apellidos
const apellidos = {
  carlos: 'Brignardello',
  damaris: 'Bejar'
}

// Promesa que devuelve el apellido según el nombre
const buscarApellido = async ( id ) => {
  const apellido = apellidos[id]

  if( apellido ){
    return apellido
  } else{
    throw `No existe el apellido de ${id}`
  }
}

// Función que recibe nombres y devuelve apellidos
const nameToLastname = async( ...nombres ) => {
  const apellidos = []

  for( let id of nombres ){
    const apellido = await buscarApellido( id )
    apellidos.push( apellido ) 
  }

  return apellidos
}

// Llamamos a la función con dos nombres
nameToLastname('carlos', 'damaris')
  .then( console.table )
```

> En base a los ejemplos anteriores implementamos una función denominada `nameToLastname` que recibe nombres y devuelve apellidos si es que estos se encuentran en el objeto de apellidos. Lo que hace es esperar mediante `await` para obtener el retorno de la promesa `buscarApellido` y rellenar un Array con él para finalmente mostrarlo por consola. El `await` es necesario pues debemos esperar a que la promesa se cumpla y se ejecute para ingresar el valor devuelto al Array. 



**Await en paralelo**

Si quisiéramos replicar el ejemplo anterior pero agregando un tiempo de espera forzado de 1s por cada petición de promesa. Acabaríamos tardando tres segundos en regresar todas las peticiones, existe una forma de resolverlas todas en paralelo y esperar un segundo en total.

```js
const nameToLastname = async( ...nombres ) => {
  const apellidos = []

  for( let id of nombres ){
    apellidos.push(buscarApellido( id ))
  }

  // Esperamos simultaneamente por todas las promesas.
  return await Promise.all(apellidos)
}

// Llamamos a la función con dos nombres
nameToLastname('carlos', 'damaris')
  .then( console.table )
```

> El tip básicamente es nunca definir un `await` dentro de un ciclo for.



**Await mejorado**

Es posible reducir las líneas de código para realizar lo mismo mediante ES6.

```js
// Espera a que todas las promesas se resuelvan
const nameToLastname = async( ...nombres ) => {
  return await Promise.all(nombres.map( buscarApellido ))
}

// Llamamos a la función con dos nombres
nameToLastname('carlos', 'damaris')
  .then( console.table )
```



**Manejo de errores**

```js
// Espera a que todas las promesas se resuelvan
const nameToLastname = async( ...nombres ) => {
  try{
    return await Promise.all(nombres.map( buscarApellido ))
  }
  catch(err){
    console.log('El nombre ingresado a la función nameToLastname no es valido')
    throw err
  }
}
```

> Los errores los manejamos mediante `try - catch`. De esta forma el retorno de la función será el error especificado. Para ello debemos declarar siempre `throw err`. 



**Devolver error personalizado**

```js
// Espera a que todas las promesas se resuelvan
const nameToLastname = async( ...nombres ) => {
  try{
    return await Promise.all(nombres.map( buscarApellido ))
  }
  catch(err){
    console.log('El nombre ingresado a la función nameToLastname no es valido')
    return {
      nombre: 'Sin apellido'
    }
  }
}
```

> De esta forma podemos devolver un valor adicional si nuestra petición fallo para complementar en caso de error.



**for await **

```js
const apellidoCiclo = async () => {
    for await(const apelido of apellidosArray ){
        ...
    }
}
    
// Lo mismo
    
const apellidos = await Promise.all( apellidosArray )
```

> Lo mismo ocurre con if.
>





### Peticiones HTTP

Las peticiones son el estándar para obtener información desde internet de un back end. Todas ellas se obtienen en un formato JSON. La forma más común de manejar información es mediante el consumo de una API. Las peticiones se centralizan en una ruta tipo: `js/provider.js`





### AJAX

Sus siglas significan básicamente JavaScript Asíncrono y XML. En Ajax se programa un objeto denominado `XMLHttpRequest` que permite solicitar datos al servidor y procesarlos. Ajax cuenta con la característica de que realiza actualizaciones asincrónicas, por lo que no se requiere de refrescar la página al obtener nueva información.



### Fetch

Es un nuevo estándar que entrega una alternativa para interactuar con el protocolo HTTP. Se basa en promesas, esta disponible también en **node**.

> Si hay problemas con CORS instalar la extensión de chrome:
>
> * https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc



**Realizar petición con URL**

```js
const URL = 'https://api.chucknorris.io/jokes/random'

fetch( URL )
  .then( resp => {
    console.log( resp )
  })
```

> De esta forma solo podemos ver el objeto por consola.



**Obtener valores de la petición con JSON**

```js
const URL = 'https://api.chucknorris.io/jokes/random'

fetch( URL )
  .then( resp => {
    resp.json().then( data => {
      console.log(data)
    })
  })

// De estructurar data
const URL = 'https://api.chucknorris.io/jokes/random'

fetch( URL )
  .then( resp => {
    resp.json().then( ({ id, value }) => {
      console.log(id)
      console.log(value)
    })
  })

// Versión acordatada
const URL = 'https://api.chucknorris.io/jokes/random'

fetch( URL )
  .then( resp => resp.json() )
  .then( ({ value }) =>  console.log(value) )
```

> Ahora la data si es manejable y podemos operar la información contenida como queramos.



**Peticiones con funciones**

```js
const URL = 'https://api.chucknorris.io/jokes/random'

const obtenerValor = async() => {
  try{
    const resp = await fetch( URL )

    if( !resp.ok ) throw `No se pudo realizar la petición`
    const { icon_url, id, value } =  await resp.json()
    return { icon_url, id, value}  
  }
  catch(err){
    throw err
  }
}

obtenerValor()
.then( console.log )
```

> Gracias a la exportación e importación de funciones se pueden centralizar las llamadas HTTP. 



**CRUD**



**Axios**