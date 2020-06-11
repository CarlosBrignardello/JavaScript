# DOM y Eventos



### ÍNDICE

El resto de información acerca de JavaScript se encuentra segmentado en el resto de documentos:

1. [JavaScript](./README.md)

2. [Listas y manejo de listas](./02-arrays.md)
3. [Objetos y Clases](./03-clases-objetos.md)
4. [DOM y Eventos](./04-DOM-eventos.md)
5. [Asincronismo y API](./05-api-asincronismo.md)
6. [ES6](./06-ES6.md)



### CONTENIDO

[TOC]

## DOM

En JavaScript es posible manipular el DOM (Document Object Model) de forma dinámica mediante programación en JavaScript y no de forma estática mediante HTML, resulta ser bastante interesante para agregar interactividad a los sitios web.

A día de hoy existen dos disyuntivas respecto a la manipulación del DOM, hacerlo mediante **Vanilla JavaScript** que es lo que se verá a continuación o hacerlo mediante JQuery. Manejar correctamente la interactividad con el DOM es probablemente una de las habilidades más importantes y útiles para un desarrollador web.







### SELECCIONAR ELEMENTOS



**Alternativas para seleccionar**

```js
// Seleccionar etiqueta según ID
const selectId = document.getElementById('contact')

// Seleccionar etiqueta según clase
const selectClass = document.getElementsByClassName('navigator')

// Seleccionar etiqueta según su nombre
const SelectTag = document.getElementsByTagName('h1')[0]


// LA MEJOR ALTERNATIVA
// Seleccionar clase
const select = document.querySelector('.container')
// Seleccionar ID
const select = document.querySelector('#navigator')
// Seleccionar etiqueta
const select = document.querySelector('h1')
// Seleccionar todos los elementos de un tipo
const select = document.querySelectorAll('a')
// Seleccionar elemento mediante selectores CSS
const links = document.querySelector('#principal a:last-child')
```

> Según se ve la mejor alternativa para seleccionar elementos es mediante `querySelector` pues permite manejar todas las formas de selección.
>
> Para acceder a etiquetas especificas requerimos de indicar la posición del elemento en el caso que existan varias, si no, devolverá el primer elemento existente.



**Seleccionar elementos posteriores o anteriores**

```js
// Selecciona el elemento anterior al mismo nivel
let select = document.querySelector('#principal').firstElementChild
select = select.previusElementSibling

// Selecciona el siguiente elemento al mismo nivel
let select = document.querySelector('#principal').firstElementChild
select = select.nextElementSibling
```

> En el ejemplo primero se selecciona un elemento mediante un ID, se trata de un contenedor que en su interior posee varios enlaces. Para acceder al primero de esos enlaces se utiliza `firstElementChild`.
>
> Esos enlaces se encuentran al mismo nivel de anidación, por tanto es valido utilizar en ellos los métodos `nextElementSibling` o `previusElementSibling`. Pudiendo así seleccionar el enlace siguiente o anterior.



**Seleccionar elementos hijos**

```js
// Seleccionar el primer elemento hijo
const select = document.querySelector('#principal').firstElementChild

// Seleccionar el último elemento hijo
const select = document.querySelector('#principal').lastElementChild

// Seleccionar cualquier elemento hijo
const select = document.querySelector('#principal').children[0]
```

> `children` se puede utilizar varias veces para ir anidando más y más en los elementos internos.



**Seleccionar elemento padre**

```js
// Selecciona al elemento padre
const select = document.querySelector('#principal').parentElement
```







### MANEJAR ESTILOS



**Agregar estilo a una etiqueta**

```js
let select = document.querySelector('#principal').children[0]
select.style.backgroundColor = 'red'
```

> Se puede utilizar cualquier propiedad CSS mediante esta sintaxis.



**Asignar ID o Clase**

```js
select.className = 'enlace'
select.id = 'enlaces'
```



**Añadir estilo CSS**

```js
let select = document.querySelector('#principal').children[0]
select.classList.add('vacio')
```



**Remover estilo CSS**

```js
let select = document.querySelector('#principal').children[0]
select.classList.remove('vacio')
```







### MODIFICAR ETIQUETAS



**Reemplazar contenido de una etiqueta**

```js
let replace = document.querySelector('h1').textContent = 'Contenido nuevo'

// o

let replace = document.querySelector('h1').innerText = 'Reemplazo'
```



**Obtener contenido de una etiqueta**

```js
const contenido = document.querySelector('#principal').children[0].innerText;
```



**Agregar atributos**

```js
let enlace = document.querySelector('a')
enlace.setAttribute('href', '#')
```



**Remover atributo**

```js
let enlace = document.querySelector('a')
enlace.removeAttribute('href')
```



**Saber si existe un atributo**

```js
let enlace = document.querySelector('a')
enlace.removeAttribute('href')

console.log(enlace.hasAttribute('data-id')) // Return: false
```



**Obtener atributos de una etiqueta**

```js
const contenido = document.querySelector('img').getAttribute('src')
```







### GENERAR ETIQUETAS



**Generar etiqueta**

```js
const enlace = document.createElement('a')
```



**Agregar contenido**

```js
enlace.textContent = 'Nuevo enlace'
```



**Agregar atributos**

```js
enlace.setAttribute('href', '#')
```



**Asignar ID o Clase**

```js
enlace.className = 'enlace'
enlace.id = 'enlaces'
```



**Agregar etiqueta al DOM**

```js
document.querySelector('#principal').appendChild(enlace)
```



**Reemplazar elemento por otro**

```js
elementoPadre.replaceChild(nuevoHijo, antiguoHijo)
```



**Remover elementos**

```js
// Eliminar elemento del DOM
enlaces[0].remove()

// Eliminar hijos de un elemento
navigation.removeChild(enlaces[0])
```







## EVENTOS









**Añadir evento de clic:**

```js
const boton = document.getElementById('button')
boton.addEventListener('click', () => boton.classList.toggle('alert'))
```







## EXAMPLES

### GENERAR SPAN EN FORMULARIO CON CONDICIONES

**Función para generar alerta:**

```js
	function alertar(mensaje, elem) {
		var span = elem.parentNode.children[2];  // Seleccionamos el lugar del span.
		if (!span) { // si span no existe se crea.
			var span = document.createElement('span'); // Creamos la etiqueta span.
		}
		span.innerHTML = mensaje; // Añadimos el mensaje de error al span.
		elem.parentNode.appendChild(span); // Añadimos el span.
	}
```

**Función para remover span:**

```js
	function quitar_span(elem) {
		var span = elem.parentNode.children[2]; // Seleccionamos el lugar del span.
		if (!span) { // Si el span no existe escapamos.
			return;
		}
		elem.parentNode.removeChild(span); // Eliminamos el span del lugar.
	}
```

**Seleccionamos los inputs del formulario:**

```js
	var name = document.getElementById('name');
	var lastname = document.getElementById('lastname');
	var email = document.getElementById('input-email');
	var password = document.getElementById('input-password');
```

**Configuramos las validaciones:**

Las validaciones son que los campos no deben estar vacíos, el nombre y el apellido debe comenzar por mayúscula y solo contener letras. La contraseña debe ser mayor a seis elementos.

```js
	if (name.value.length == 0) {
		alertar('Debe escribir un nombre', name);
	} 
	else if (!name.value.match(/^[a-zA-Z]+$/)) {
		alertar('Debe ingresar puras letras', name);
	} 
	else if (name.value[0] != name.value[0].toUpperCase()) {
		alertar('Nombre debe comenzar con mayúsculas', name);
	} 
	else{
		quitar_span(name)
	}

	if (lastname.value.length == 0) {
		alertar('Debe escribir un nombre', lastname);
	} 
	else if (!lastname.value.match(/^[a-zA-Z]+$/)) {
		alertar('Debe ingresar puras letras', lastname);
	} 
	else if (lastname.value[0] != lastname.value[0].toUpperCase()) {
		alertar('Nombre debe comenzar con mayúsculas', lastname);
	} 
	else{
		quitar_span(lastname)
	}

	if (email.value.length == 0) {
		alertar('Debe escribir un correo', email);
	}
	else{
		quitar_span(email)
	}

	if (password.value.length == 0) {
		alertar('Debe escribir una contraseña', password);
	}
	else if(password.value.length < 6){
		alertar('La contraseña debe ser mayor o igual a 6 caracteres', password)
	}
	else if(password.value == "password" || password.value == "123456" || password.value == "654321"){
		alertar('La contraseña debe ser más fuerte', password)
	}
	else{
		quitar_span(password)
	}
```



**Modificar campos:**

![](img/sign-in.jpg)

```js
var texto = document.getElementById("form-signin-heading")
var firstname = document.getElementById("name")
var lastname = document.getElementById("lastname")
var check = document.getElementById("recuerda")
var boton = document.getElementById("boton")

texto.innerText = "Porfavor inicia sesión"
firstname.placeholder = "Correo electronico"
lastname.placeholder = "Contraseña"
recuerda.innerText = "Recordar datos"
boton.innerText = "Iniciar sesión"
```

![](img/inicia-sesion.jpg)



### GENERAR MENSAJES EN UN CHAT:

![](C:\Users\Carlos\Google Drive\REPOSITORIO\0-Apuntes\--Apuntes JavaScript\img\chat.jpg)

**Definimos la función para añadir mensajes:**

```js
function addMessage(){
  var message = document.getElementById("mensajes");
  var chat = document.getElementById("chat");
  if(mensajes.value == ""){
    return
  }

  /* Creamos los elementos que se generaran */
  var message_out = document.createElement("div");
  message_out.className = 'w-message-out w-message';

  var message_text = document.createElement("div");
  message_text.className = 'w-message-text';

  var text_chat = document.createElement("p");
  text_chat.innerHTML = message.value;
  
  /* configuramos la hora */
  var time = document.createElement("div");
  var d = new Date();
  time.className = 'time';
  time.innerHTML = d.getHours() + ":" + d.getMinutes();

  
  /* Añadir valores al mensaje de salida y al chat */
  message_text.appendChild(text_chat);
  message_text.appendChild(time);
  message_out.appendChild(message_text);
  chat.appendChild(message_out);
  chat.scrollTop = chat.scrollHeight;
  message.value = "";
}
```

**Configuramos enviar el mensaje al hacer clic al icono y al presionar enter:**

```js
var boton = document.getElementsByClassName('icon-mic')[0]
boton.addEventListener('click', addMessage)
mensajes.addEventListener('keyup', (ev) =>{
  if(ev.keyCode != 13) {
    return;
}
  else{
    addMessage()
  }
});
```

