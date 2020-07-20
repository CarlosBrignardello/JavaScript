# Objetos y Clases



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





### OBJETOS

**Definir un Objeto**

Para definir un objeto lo hacemos de la siguiente manera:

```javascript
let nombreObjeto = {
	nombre: 'Carlos',
	apellido: 'Brignardello',
	edad: 22,
};
```

> Los objetos trabajan con un sistema de [clave: valor].



**Operar Objeto**

```js
let objeto = {
    nombre: 'Carlos',
	apellido: 'Brignardello',
	edad: 21,
};

console.log( objeto )
console.log('Nombre', objeto.nombre)
console.log('Soy', objeto['nombre'])
```

> Al pasar por consola un objeto este se ve muestra completo. Y mediante los otros dos métodos es posible obtener la información contenida en un objeto. La última alternativa permite manejar claves con nombres especiales como por ejemplo `objeto['cuenta-rut']`.



**Eliminar clave de un objeto**

```js
delete objeto.nombre
```



**Ingresar valor a un objeto**

```js
objeto.soltero = true
```

> Aunque el objeto este definido como `const` se podrá ingresar el valor de todas formas. 



**Asignar variables con una función**

```js
const crearDatos = (name, lastName) => ( {name, lastName} )
const persona = crearDatos('Carlos', 'Brignardello')
console.log(persona)

// De la propiedad lastName creamos una variable llamada newLastName
const { lastName: newLastName } = crearDatos('Carlos', 'Cerda')
console.log({ newLastName })
```



**Métodos útiles**

```js
// Invalidar la inyección de claves y valores (Los valores internos de una clave pueden ser modificados.)
Object.freeze( objeto )

// Obtener pares de clave valor
const entriesPares = Object.entries( objeto )
console.log( entriesPares )
console.log( entriesPares[0][0] )

// Obtener claves en formato de Array
const propiedades = Object.getOwnPropertyNames( objeto )
console.log({ propiedades })

// Obtener valores en formato de Array
const valores = Object.values( objeto )
console.log({ valores })

// Obtener ambos
const propiedades = Object.getOwnPropertyNames( objeto )
const valores = Object.values( objeto )
console.log({ propiedades, valores })
```



**Trabajar con objetos**

Podemos utilizar este objeto generado y utilizarlo como parámetro en uno de los ejemplos anteriores:

```javascript
let objeto = {
    nombre: 'Carlos',
	apellido: 'Brignardello',
	edad: 21,
};

function nombreMayusculas({ nombre }){
    console.log(nombre.toUpperCase());
}

nombreMayusculas( objeto );
nombreMayusculas({ nombre: "Damaris" });
```

> Podemos acceder a los valores de los objetos poniendo el nombre del objeto seguido de un "." y la clave de la que queremos obtener su valor.
>
> Sin embargo en las ultimas actualizaciones de JavaScript es posible definir en los parámetros la clave que queremos obtener y definir así toda la función, siendo necesario solo declarar como parámetro el nombre del objeto al ejecutar la función.
>
> Es incluso posible predefinir la clave y el valor de un objeto en el momento.



**Desestructurar objetos**

```javascript
let persona = {
    nombre: 'Carlos',
	apellido: 'Brignardello',
	edad: 21,
};

const mostrarDatos = ({ nombre, apellido, edad }) => {
    console.log({nombre})
    console.log({apellido})
    console.log({edad})
}

mostrarDatos(persona)
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



















### CLASES

**Definir una clase**

Las clases se definen mediante la sintaxis `class nombre_clase{}`. En su interior deben poseer un constructor que se encarga de definir los atributos de un nuevo objeto mediante los parámetros que se pasen al crearlo. A su vez pueden definirse métodos en su interior, que no dejan de ser funciones propias de los objetos generados con la clase.

```js
class Persona {
	constructor(name){
        this.name = name
    }
    
    saludar(){
        return `Hola soy ${this.name}.`
    }
}
```



**Crear un objeto de una clase**

```js
const carlos = new Persona('Carlos')
carlos.saludar()
```

> De esta forma generamos un nuevo objeto del tipo Persona mediante la palabra clave `new` y además le asignamos uno de los parámetros, en este caso, el nombre. 
>
> Posterior a esto el objeto podrá utilizar los métodos de su clase.



**Herencia de clase**

Mediante la herencia de clase se puede hacer que un objeto tenga más de una clase, por lo que compartirá sus propiedades y métodos con otra clase.

```js
class Developer extends Persona{
    saludar(){
        return `${super.hello()} Soy desarrollador.`
    }
}

const carlos = new Developer('Carlos')
carlos.saludar() // Devuelve 'Hola soy Carlos. Soy desarrollador.'
```

> Mediante la palabra clave `super` podemos referenciar a la clase padre.



**Métodos estáticos**

Mediante los métodos estáticos es posible ejecutar funciones de una clase sin necesidad de crear un objeto de la misma.

```js
class Persona{
	static dance(){
		return `Estoy bailando!`
	}
}

Persona.dance() // Devuelve 'Estoy bailando!'
```



**Getters and Setters**

Con los métodos Getter and Setter permiten acceder a una variable o modificarla:

```js
class Persona {
	constructor(name) {
		this.name = name
	}
    
	set name(value) {
		this.name = value
	}
	get name() {
		return this.name
	}
}

const carlos = new Persona('Carlos')
carlos.name = 'Damaris' // Utilizamos el Setter
console.log(carlos.name) // Utilizamos el Getter
```













### Prototipos en JavaScript

Los objetos en JavaScript no son tomados como clases, si bien se pueden crear clases, los objetos son más bien prototipos.

Para definir un prototipo lo único que se necesita es definir una función, esta se ejecutara cuando creemos una nueva persona, en otros lenguajes de programación se conoce como constructor. Para generar objetos con ellas se deben generar variables que lo ejecuten.

La sintaxis es la siguiente:

```javascript
function Persona(nombre, apellido){ // Constructor
    this.nombre = nombre;
    this.apellido = apellido;
}

var carlos = new Persona('Carlos', 'Brignardello'); // Variable
```

> Al utilizar la palabra clave `new` seguido del nombre de la función provoca que se genere un nuevo objeto al que se le asignara como prototipo lo que se le indique en los campos.
>
> con `this` lo que estamos haciendo es referenciar al objeto que se acaba de crear.

**Ejecutar funciones con prototipos**

Podemos por ejemplo también ejecutar funciones con un prototipo mediante los datos de un objeto, como se en el código a continuación.



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

