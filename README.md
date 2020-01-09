# JAVASCRIPT



### Variables

Para imprimir un mensaje por la consola utilizamos la función  `console.log('Mensaje')`. 



**Declarar Variables**

Las variables pueden ser declaradas en forma simple

```javascript
var nombre;
```

o en serie

```javascript
var nombre, nombre_corto;
```

y se les puede asignar un valor

```javascript
nombre = 'Carlos Brignardello';
```



**Declarar Variables con un valor**

Podemos declarar variables e inmediatamente asignarles un valor

```javascript
var nombre = "Carlos Brignardello", nombre_corto = "Carlos";
```

Estas pueden ser anidadas con otras funciones

```javascript
console.log("Hola " + nombre);
```





### Strings



**Upper Case**

Podemos declarar una variable con un texto que pondremos en mayúsculas mediante el uso de la función `toUpperCase();` , de la siguiente forma:

```javascript
var nombreMayus = nombre.toUpperCase();
```

**Lower case**

y también lo contrario devolviendo la variable en minúsculas con la función `toLowerCase();`.

```javascript
var nombre_cortoMinus = nombre_corto.toLowerCase();
```

**Obtener carácter**

Podemos obtener el cualquier carácter de un string mediante la función `charAt(NÚMERO);` en el siguiente ejemplo permite devolver la primera letra del string.

```javascript
var nombreCaracter = nombre_corto.charAt(0);
```

**Obtener largo de un string**

Podemos obtener la cantidad de letras que posee una palabra mediante el atributo `length`.

```javascript
var letrasEnNombre = nombre_corto.length;
```

**Concatenar strings**

Poseemos las siguientes formas de concatenar strings en JavaScript.

```javascript
var nombreCompleto = nombre_corto + " " + apellido; 
var nombreCompleto = `${nombre_corto} ${apellido}`;
```

> Ambos otorgan el mismo resultado.

**Obtener fragmentos de un string**

Para obtener un pedazo de un string podemos utilizar la función `substr(a, b);`.

```javascript
var str = nombre_corto.substr(0, 3);
```

> De esta forma obtenemos las tres primeras letras de la variable "nombre_corto".

**Obtener ultima letra de una variable**

```javascript
var ultima = nombre_corto.charAt((nombre_corto.length) -1);
```



### Números



**Incrementar y decrementar una variable**

Podemos incrementar una variable de las siguientes formas:

```javascript
edad = edad + 1
edad += 1;
```

Lo mismo se puede aplicar a la inversa con distintos valores.

```javascript
edadMenos = edad - 2;
edadMenos -= 2;
```

**Sumar variables**

Podemos sumar dos variables numéricas de la siguiente forma:

```javascript
edad = edad + tiempo;
```

**Operar decimales**

Para trabajar con decimales en por ejemplo una multiplicación debemos multiplicar por una cantidad equivalente a la parte entera con el fin de volver el número completo entero y después dividir por la cantidad agregada:

```javascript
var precio = 200.5;
var total = Math.round(precio * 3 * 100) / 100;
```

**Convertir string a decimal y aumentar número de decimales**

Para incrementar el número de decimales recurrimos a la función `toFixed();` y para convertir un string a decimal utilizamos `parseFloat();`

```javascript
var totalNumeroDecimales = total.toFixed(2);
var total = parseFloat(totalNumeroDecimales);
```



### Funciones



**Definir y ejecutar funciones**

Para definir una función utilizamos la palabra clave `function` y posteriormente el nombre que recibirá y unos paréntesis "()" con unos parámetros si corresponde.

```javascript
var nombre = 'Carlos', edad = 21;

function mostrarDatos(){
    console.log("DATOS" +
                "\nNombre: " + nombre + 
                "\nEdad: " + edad);
}

mostrarDatos();
```

> En este caso se definió una función que por consola muestra la información de una serie de variables. Para hacer funcionar la variable esta debe ser ejecutada como sucede al final del código.

Otra forma de mostrar la misma información es la siguiente:

```javascript
var nombre = 'Carlos', edad = 21;

console.log(`DATOS
Nombre: ${nombre}
Edad: ${edad}`);
```



**Función con parámetros**

Es frecuente recurrir al uso de funciones con parámetros que serán definidos al ejecutar la función.

```javascript
function mostrarEdad(x){
    console.log(`La edad es: ${x}`)
}

mostrarEdad(21);
```



**Funciones con alcance**

En el siguiente código de ejemplo tenemos una función que permite poner en mayúsculas un string, en este caso se le introduce la variable "nombre", sin embargo con este método al volver a utilizar la variable "nombre" esta habrá cambiado su contenido debido a la función de forma permanente.

```javascript
var nombre = 'Carlos';

function nombreMayusculas(){
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

nombreMayusculas();
```

> Función con alcance GLOBAL.



Para solucionarlo podemos utilizar la siguiente forma para definir una función con alcance local. Al utilizar el mismo nombre en los parámetros y en el resto de variables de la función se restringe el alcance global. Otra alternativa es cambiar el nombre de las variables utilizadas al interior de la función.

```javascript
var nombre = 'Carlos';

function nombreMayusculas(nombre){
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

nombreMayusculas(nombre);
```

> Función con alcance LOCAL.



### Objetos



**Definir Objetos**

No podemos tener dos variables con el mismo nombre y distinto contenido, pues estas se sobrescriben. En el caso que por ejemplo con la variable nombre quisiéramos definir varios nombres, como se ve a continuación.

```javascript
var nombre = 'Carlos';
var nombre = 'Felix';
var nombre = 'Damaris';
```

Un objeto reúne características que tienen en común elementos de la vida real que queremos representar en el programa. Es por eso que al objeto se le asignan ciertas características o atributos.

Para definir un objeto lo hacemos de la siguiente manera:

``` javascript
var nombreObjeto = {
	nombre: 'Carlos',
	apellido: 'Brignardello',
	edad: 22,
};
```

> Los objetos trabajan con un sistema de [clave: valor].



**Trabajar con objetos**

Podemos utilizar este objeto generado y utilizarlo como parámetro en uno de los ejemplos anteriores:

```javascript
var carlos = {
    nombre: 'Carlos',
	apellido: 'Brignardello',
	edad: 21,
};

var felix = {
    nombre: 'Felix',
    apellido: 'Desconocido',
    edad: 21,
};

function nombreMayusculas({ nombre }){
    console.log(nombre.toUpperCase());
}

nombreMayusculas(carlos);
nombreMayusculas(felix);
nombreMayusculas({ nombre: "Sebastian" });
```

> Podemos acceder a los valores de los objetos poniendo el nombre del objeto seguido de un "." y la clave de la que queremos obtener su valor.
>
> Sin embargo en las ultimas actualizaciones de JavaScript es posible definir en los parámetros la clave que queremos obtener y definir así toda la función, siendo necesario solo declarar como parámetro el nombre del objeto al ejecutar la función.
>
> Es incluso posible predefinir la clave y el valor de un objeto en el momento.



**Desestructurar objetos**

Existe otra forma de hacer el ejemplo anterior para trabajar con objetos

```javascript
function nombreMayuscula( persona ){
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

nombreMayusculas(carlos);
nombreMayusculas(felix);
nombreMayusculas({ nombre: "Sebastian" });
```



### Parámetros como referencia



**Crear nuevos objetos con funciones**

Podemos crear objetos dentro de funciones que serán generados en base a otro objeto existente, como se ve en el código de ejemplo:

```javascript
var carlos = {
    nombre: 'Carlos',
    edad: 21,
    trabajo: 'Web'
};

function cumpleanos(persona){
    return{
    ...persona,
        edad: persona.edad + 1
    };
};

var personaNueva = cumpleanos(carlos);
```

> Con este método al ver el objeto "carlos" nos mostrara la mismo información y al ver el objeto "personaNueva" nos mostrara la información anterior con la edad incrementada.



### Comparaciones



**Comparar variables**

En JavaScript poseemos dos formas de comparar variables:

```javascript
var x = 4, y = '4';
console.log(x == y);
console.log(x === y);
```

> Poseemos dos variables, una numérica y otra de tipo string, sin embargo al compararla con "==" se identifican como iguales y al utilizar "===" se identifican como diferentes.



**Comparar objetos**

Si comparamos objetos de la forma en que se ve en el código resultara que estas son distintas:

```javascript
var carlos = {
    nombre: 'Carlos',
};

var otroCarlos = {
    ...carlos /* Igualamos los objetos */
};

console.log(carlos == otroCarlos);
console.log(carlos === otroCarlos);
```

> Al comparar objetos en JavaScript se pregunta por la referencia a la variable que estamos utilizando, por lo que resulta ser falso.
