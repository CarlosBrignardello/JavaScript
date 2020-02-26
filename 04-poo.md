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



