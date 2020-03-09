# JAVASCRIPT

### Descripción

Este documento contiene los siguientes conceptos:

* Actualizaciones ES6
  * Arrow Functions
  * let | const
  * Template Literal | `${expresión}`
  * Funciones con valores por defecto
  * Spread Operators
  * Desestructuración de objetos
  * Clases | Constructor
* Variables
* Strings
* Funciones
* Objetos | Básicos
* Prototypes | **Añadir más adelante**
* Comparaciones
* Estructuras de control

En los siguientes documentos mark down encontraras el resto del contenido.



### ES6

EcmaScript 6 es la versión más reciente de JavaScript. En ella se incluyen un montón de nuevas funcionalidades que serán descritas a continuación:



**Arrow Functions**

Las funciones flecha significaron un cambio en como las funciones de JavaScript funcionan y lucen. Esto es debido a que visualmente recibieron un cambio en comparación con las funciones originales, de:

```js
const info = function info(){
	// ...
}
```

a

```js
const info = () => {
   // ...
}
```

Si la función solo tiene una línea, se puede escribir de la siguiente forma:

```js
const info = params => console.log('Hola!')
```



**let y const**

`var` era la forma convencional de declarar una variable y tiene un scope de función, es decir que puede modificar valores dentro y fuera de una función.

`let` es una de las nuevas formas de declarar una variable que tiene un scope limitado de bloque, es decir que si se modifica dentro de una función esta no afectara a nada fuera de la misma.

`const` es como `let` pero inmutable. Su valor no puede ser modificado durante ejecución.



**Strings Template Literal**

Ahora se pueden introducir expresiones al interior de strings mediante la siguiente sintaxis:

```js
const saludo = `Hola soy ${name}`
const validar = `Validaciones:
	1. No se aceptan campos vaciós
	2. No se aceptan números.`
```



**Funciones con valores por defecto**

```js
const test = function(index = 0, testing = true) { 
    // ...
}
test()
```



**Spread Operator**

Es posible expandir un array, un objeto o un string utilizando el spread operator `...`

Permite manejar todo el contenido de un elemento para pasárselo a otro:

```js
const frameworks = ['Angular', '"React"', 'Vue']
const skills = [...frameworks, 'Java', 'Python'] // ['Angular', '"React"', 'Vue', 'Java', 'Python']
```

También es posible copiar el contenido completo de un elemento a otro para realizar operaciones seguras, sin reemplazar el contenido del elemento original.

```js
const lista = ['frutilla', 'avena']
const desayuno = [...lista]
```

Es posible incluso crear un array de las letras separadas de un string facilmente.

```js
const hey = 'Carlos'
const arrayized = [...hey] // ['C', 'a', 'r', 'l', 'o', 's']
```

Finalmente también se pueden asignar atributos a una función mediante los spread operators:

```js
const carta = (msg, autor) => {
    `${msg}
	by: ${autor}`
}
const msgCarlos = ['Hola que tal jejeje', 'Carlos B.']
carta(...msgCarlos)
```



**Desestructurar objetos**

De un objeto es posible extraer los valores necesarios y guardarlos en variables:

```js
const carlos = {
	firstName: 'Carlos',
	lastName: 'Brignardello',
	job: 'Frontend Developer',
	age: 21
}

const { firstName, age } = carlos
console.log(firstName) // 'Carlos'
console.log(age) // 21
```



**Elementos restantes y spread operators**

Es posible desestructurar varios elementos de forma rápida con spread operators:

```js
const numeros = [1, 2, 3, 4, 5]
[uno, dos, ...resto] = numeros
console.log(uno) // 1
console.log(dos) // 2
console.log(resto) // [3, 4, 5]
```

Se puede hacer lo mismo con objetos:

```js
const { first, second, ...others } = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5
}
first // 1
second // 2
others // { third: 3, fourth: 4, fifth: 5 }
```



**Clases**

JavaScript es el único lenguaje que maneja la herencia a base de prototipos. Sin embargo ahora con la llegada de las clases la forma en que estas se construyen para programar la herencia tradicional es muy similar.

```js
class Persona{
	constructor(nombre){
		this.nombre = nombre
	}
	
	saludo(){
		return `Hola, Soy ${this.name}.`
	}
}
```

```js
Class Programador extends Persona{
    saludo(){
        return super.saludo() + ` Soy programador.`
    }
}

let carlos = new Programador('Carlos Brignardello')
carlos.saludar()
```



**Constructor**

Ahora las clases tienen un nuevo método denominado `constructor` que se llama cuando una clase se inicia con la palabra clave `new`.

> Las clases padre pueden ser referenciadas mediante `super()`.



**Getters y Setters**

Un getter se puede declarar de la siguiente forma:

```js
class Persona{
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
```

Los setters se escriben de la misma forma:

```js
class Persona{
	set age(years){
	this.theAge = years
	}
}
```



**Importar modulos**

Ahora es posible importar mediante la sintaxis `import ... from ...`

```js
import React from 'react'
```



### Variables

**Declarar Variables**

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

Estas pueden ser anidadas con otras funciones

```javascript
console.log("Hola " + nombre);
```

> Para imprimir un mensaje por la consola utilizamos la función  `console.log('Mensaje')`. 



### Strings

Los strings son cadenas de texto, estos pueden ser declarados de las siguientes formas:

```js
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



**Obtener última letra de una variable**

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

```javascript
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



**Object Constructor**

Tras las nuevas actualizaciones de JavaScript es posible generar objetos de una forma mucho más dinámica. 

```js
// Generar constructor
function Tasks(name, time){
	this.name = name
	this.time = time
}

// Crear nuevo objeto
const task_pan = new Tasks('Comprar Pan', '1 Hora')

// Obtener valores
console.log(task_pan.name)
```

> Se crea general a una función, como convención se nombran con mayúscula, estas permiten generar nuevos objetos con sus parámetros mediante el uso de la palabra clave `new`.



### Prototypes

En ocasiones será necesario generar una función que sea de uso exclusivo de un objeto, para ello hacemos uso de lo prototype.

En el siguiente ejemplo generamos dos objetos y dos funciones (una global y otra exclusiva de un objeto)

```js
/*
// Objeto literal
const gato = {
    nombre: 'Mojito',
    color: 'blanco con gris',
    personalidad: 'indiferente'
}

// Objeto constructor
function Task(name, time){
    this.name = name
    this.time = time
}
const comprar_pan = new Task('Comprar Pan', '2 Horas')

// Mostrar Objetos
console.log(gato)
console.log(comprar_pan)

// Crear función
function mostrarInfoTarea(name, time){
    return `La tarea ${name} se cumplira en ${time}.`
}
console.log(mostrarInfoTarea(comprar_pan.name, comprar_pan.time))
*/

// Crear función exclusiva del objeto Task
Task.prototype.mostrarInfoTarea2 = function(){
    return `La tarea ${this.name} se cumplira en ${this.time}.`
}
console.log(comprar_pan.mostrarInfoTarea2())
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



# ESTRUCTURAS DE CONTROL



### Condicionales



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



### Arrow Function

En JavaScript existe otra forma de escribir funciones, asignando a una variable una función:

```javascript
const esMayorDeEdad = fuction(persona){
    
}
```

> Estas funciones reciben el nombre de funciones anónimas pues no poseen un nombre pero si una variable asignada.



Otra forma de escribir esto es mediante el uso de arrow function, de la siguiente manera:

```javascript
var carlos = {
    nombre: 'Carlos',
    apellido: 'Brignardello',
    edad: 21,
}

var damaris = {
    nombre: 'Damaris',
    apellido: 'Bejar',
    edad: 17,
}

const mayorDeEdad = (persona) => {
    if(persona.edad >= 18 ){
        console.log(`${persona.nombre} es mayor de 18 años`);
    }
    else{
        console.log(`${persona.nombre} es menor de 18 años`);
    }
}

mayorDeEdad(carlos);
mayorDeEdad(damaris);
```

> Siempre que nos encontremos con la sintaxis de *VARIABLE => {.......}* lo entendemos como una función.
>
> En este caso el resultado es:
>
> Carlos es mayor de 18 años
> Damaris es menor de 18 años



Una ultima forma utilizando referencias:

```javascript
const MAYORIA_EDAD = 18;
const mayorEdad = ({ edad }) => edad >= MAYORIA_EDAD;


const esMayorDeEdad = (persona) => {
    if(mayorEdad(persona)){
        console.log(`${persona.nombre} es mayor de 18 años`);
    }
    else{
        console.log(`${persona.nombre} es menor de 18 años`);
    }
}

esMayorDeEdad(carlos);
esMayorDeEdad(damaris);
```



### FOR



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



### WHILE

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



### Do-While

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



### Switch

Con la estructura de control Switch se nos permite ejecutar un código de acuerdo a múltiples condiciones.

```javascript
var signo = prompt('¿Cual es tu signo? \n[Acuario|Piscis|Aries|Tauro|Géminis|Cáncer|Leo|Virgo|Libra|Escorpio|Sagitario|Capricornio]');
console.log(`Tú signo es ${signo}`);

switch (signo){
    case'acuario':
        console.log('Me enamoré de la vida, es la única que no me dejará sin antes yo hacerlo. – Pablo Neruda.')
    break;
    case'piscis':
        console.log('Las palabras abren puertas sobre el mar. – Rafael Alberti.')
    break;
    case'aries':
        console.log('Y he llegado a la conclusión de que si las cicatrices enseñan, las caricias también. – Mario Benedetti.')
    break;
    case'tauro':
        console.log('El prejuicio es una carga que confunde el pasado, amenaza el futuro y hace inaccesible el presente. – Maya Angelou.')
    break;
    case'géminis':
        console.log('Nada es real hasta que se experimenta, aún un proverbio no lo es hasta que la vida lo haya ilustrado. – John Keats.')
    break;
    case'cáncer':
        console.log('Amurallar el propio sentimiento es arriesgarte a que te devore desde el interior. – Frida Khalo.')
    break;
    case'leo':
        console.log('Requiere coraje crecer y convertirte en lo que realmente eres. – e.e cummings.') 
    break;
    case'virgo':
        console.log('Es propio de aquellos con mentes estrechas embestir contra todo aquello que no les cabe en la cabez. – Antonio Machado.') 
    break;
    case'libra':
        console.log('Parece, cuando se ama, que el mundo entero tiene rumor de primavera. – Juan Ramón Jiménez.') 
    break;
    case'escorpio':
        console.log('La duda es uno de los nombres de la inteligencia. – Jorge Luis Borges.') 
    break;
    case'sagitario':
        console.log('Muere lentamente quien no viaja, quien no oye música, quien no encuentra gracia en sí mismo. – Pablo Neruda.') 
    break;
    case'capricornio':
        console.log('La perfección es una pulida colección de errores. – Mario Benedetti.')
    default:
        console.log('Eso no es un signo, verifica el dato que ingresaste')
    break;
}
```

> La función `prompt()` nos permite solicitar datos al usuario.