# JavaScript

Este repositorio contiene todos los apuntes que he tomado acerca de JavaScript para el desarrollo Front End.



### ÍNDICE

El resto de información acerca de JavaScript se encuentra segmentado en el resto de documentos:

1. [JavaScript](./README.md)

2. [Listas y manejo de listas](./02-arrays.md)
3. [Objetos y Clases](./03-clases-objetos.md)
4. [DOM y Eventos](./04-DOM-eventos.md)
5. [Asincronismo y API](./05-api-asincronismo.md)
6. [ES6](./06-ES6.md)



### CONTENIDO

* **Variables**
* **Strings**
* **Números**
* **Funciones**
* **Condicionales**



### VARIABLES

**Tipos de variable**

En JavaScript existen tres tipos de variable: `var`, `let` y `const`.

* `var`: Las variables que utilizan `var` poseen un **scope de función** ya que **fuera de las funciones el scope es global y dentro de las funciones el scope es local** por lo que únicamente se pueden utilizar dentro de ellas. Incluso dentro de una función se puede modificar el valor de una variable que se encuentra fuera sin embargo esta solo cambiara dentro de la función, no fuera.
* `let`: Se prefiere su uso por sobre `var`. Las variables con `let` poseen un **scope de bloque**, estas variables al ser declaradas **fuera de una función no poseen un alcance global y al ser declaradas dentro de una función solo operan dentro de un bloque** `{}`.
* `const`: Las variables que utilizan `const` **son inmutables**, lo que quiere decir que no pueden ser modificadas, **posee el mismo scope que `let`**. Cuando se trabaja con arreglos, la constante no puede ser re asignada pero su contenido si.



**Declarar variables**

Las variables pueden ser declaradas en forma simple

```javascript
let nombre;
```

o en serie

```javascript
let nombre, nombre_corto;
```

y se les puede asignar un valor

```javascript
nombre = 'Carlos Brignardello';
```



**Declarar Variables con un valor**

Podemos declarar variables e inmediatamente asignarles un valor

```javascript
let nombre = "Carlos Brignardello", nombre_corto = "Carlos";
```

Estas pueden ser anidadas con otras variables.

```javascript
console.log("Hola " + nombre);
```

> Para imprimir un mensaje por la consola utilizamos la función  `console.log('Mensaje')`. 



### STRINGS

Los strings son cadenas de texto, estos pueden ser declarados de las siguientes formas:

```js
const normal = 'Hola Carlos'
const simple = 'Hola ' + name
const doble = "Hey " + name
const literal = `Hola ${name}`
```



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



**Obtener fragmentos de un string**

Para obtener un pedazo de un string podemos utilizar la función `substr(a, b);`.

```javascript
var str = nombre_corto.substr(0, 3);
```

> De esta forma obtenemos las tres primeras letras de la variable "nombre_corto".



**Obtener última letra de una variable**

```javascript
var ultima = nombre_corto.charAt((nombre_corto.length) -1);
```



### NÚMEROS

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



**Tipos de resultado**

**null**: Indica la ausencia de un valor.

**undefined**: Indica la ausencia de un valor y que la variable no ha sido inicializada.



### FUNCIONES

**Definir y ejecutar funciones**

Para definir una función utilizamos la palabra clave `function` y posteriormente el nombre que recibirá y unos paréntesis "()" con unos parámetros si corresponde.

```javascript
var nombre = 'Carlos', edad = 21;

function mostrarDatos(){
	console.log(`Hola, soy ${nombre} y tengo ${edad} años.`)
}

mostrarDatos();
```

> Para hacer funcionar la variable esta debe ser ejecutada como sucede al final del código.



**Función con parámetros**

Es frecuente recurrir al uso de funciones con parámetros que serán definidos al ejecutar la función.

```javascript
var nombre = 'Carlos', edad = 21;

function mostrarDatos(name, age){
	console.log(`Hola, soy ${name} y tengo ${age} años.`)
}

mostrarDatos(nombre, edad);
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



### CONDICIONALES

**IF**

En el siguiente código evaluaremos si un objeto cumple con unos requisitos específicos para mostrar su información con una función.

```javascript
var carlos = {
    nombre: 'Carlos',
    apellido: 'Brignardello',
    edad: 21,
    ingeniero: false,
    tecnico: true,
}

function mostrarProfesion(persona){
    console.log(`${persona.nombre} es: `);
    
    if(persona.ingeniero == true){
        console.log('Ingeniero');
    };
    if(persona.tecnico == true){
        console.log('Técnico');
    };
};
```

> Este código da como resultado lo siguiente:
>
> Carlos es:
>
> Técnico



Otro ejemplo sería la siguiente función para determinar si la persona es mayor o menor de edad.

```javascript
function mayoriaEdad(objeto){
    console.log('Mayoria de edad:');
    if(objeto.edad >= 18 ){
        console.log(`${objeto.nombre} es mayor de 18 años`);
    }
    else{
        console.log(`${objeto.nombre} es menor de 18 años`);
    }
};

mayoriaEdad(carlos);
```



**FOR**

For permite realizar en forma repetitiva una cierta tarea.

En el ejemplo tenemos una persona que a lo largo de un año variara su peso.

```javascript
var carlos = {
    nombre: 'Carlos',
    apellido: 'Brignardello',
    edad: 28,
    peso: 85,
};

const VARIACION_PESO = 0.200;

const aumentarPeso = (persona, incremento) =>{
    persona.peso += VARIACION_PESO;
}

const bajaPeso = (persona, incremento) =>{
    persona.peso -= VARIACION_PESO;
}

const mantienePeso = (persona, incremento) =>{
    persona.peso = persona.peso;
}

console.log(`Al inicio del año ${carlos.nombre} pesa: ${carlos.peso}KG`);

for(var i = 1; i<=365; i++){
    var random = Math.random() * 100;
    if(random < 25){
        aumentarPeso(carlos);
    }
    else if(random < 50){
        bajaPeso(carlos);
    }
    else{
        mantienePeso(carlos);
    }
    
};

console.log(`Al final del año ${carlos.nombre} pesa: ${carlos.peso.toFixed(1)}KG`);
```



**WHILE**

Podemos repetir un código hasta que se cumpla una condición mediante el ciclo While. En el ejemplo poseemos un programa que ejecuta un ciclo hasta que la clave peso del objeto "carlos" reduce en tres su valor inicial.

```javascript
var carlos = {
    nombre: 'Carlos',
    apellido: 'Brignardello',
    edad: 28,
    peso: 85,
};

const VARIACION_PESO = 0.300;

const aumentarPeso = (persona, incremento) =>{
    persona.peso += VARIACION_PESO;
}

const bajaPeso = (persona, incremento) =>{
    persona.peso -= VARIACION_PESO;
}

const comeMucho = () => Math.random() < 0.300;
const realizaDeporte = () => Math.random() < 0.400;

console.log(`Al inicio del año ${carlos.nombre} pesa: ${carlos.peso}KG`);

const META = carlos.peso - 3
var dias = 0

while(carlos.peso > META){
    if(comeMucho()){
        aumentarPeso(carlos);
    }
    if(realizaDeporte()){
        bajaPeso(carlos);
    }
dias += 1;
}

console.log(`Han pasado ${dias} dias para que ${carlos.nombre} adelgazara 3 KG`);
```



**Do-While**

Se diferencia de While puesto que ejecuta al menos una vez un código especifico.

```javascript
var contador = 0;
const llueve = () => Math.random() < 0.25

do{
    contador++
} while(!llueve())

if(contador === 1){
    console.log(`Fui a ver si llovia ${contador} vez`)
}
else{
    console.log(`Fui a ver si llovia ${contador} veces`)

}
```

> En este ejemplo se obtiene la cantidad de veces que se ejecuta el ciclo con un cuarto de posibilidades.
