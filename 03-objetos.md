# PROGRAMACIÓN ORIENTADA A OBJETOS



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

