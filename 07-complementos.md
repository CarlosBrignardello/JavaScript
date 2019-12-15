# COMPLEMENTOS



### Diferencia entre var y let



**var**

La forma más antigua de declarar variables es mediante var. Por ejemplo en el siguiente programa creamos una función para saber si una persona es mayor de edad.

```js
const MAYORIA_EDAD = 18
var carlos = {
    nombre: 'Carlos',
    apellido: 'Bignardello',
    edad: 21
}

function obtenerMayorEdad(persona){
    if(persona.edad >= MAYORIA_EDAD){
        var mensaje = 'Es mayor de edad'
    }
    else{
        var mensaje = 'Es menor de edad'
    }

    console.log(mensaje)
}

obtenerMayorEdad(carlos)
```



**let**

```js
const MAYORIA_EDAD = 18
var carlos = {
    nombre: 'Carlos',
    apellido: 'Bignardello',
    edad: 21
}

function obtenerMayorEdad(persona){
    let mensaje // OBLIGATORIO | Para aumentar su alcance.
    if(persona.edad >= MAYORIA_EDAD){
        let mensaje = 'Es mayor de edad' // Alcance local.
    }
    else{
        let mensaje = 'Es menor de edad'
    }

    console.log(mensaje)
}

obtenerMayorEdad(carlos)
```

> Al utilizar let para declarar las variables el alcance de la variable sera reducido al bloque donde es utilizada dicha variable.



### Manejo de fechas



```
function daysBetween(date1, date2){
    const oneDay = 1000 * 60 * 60 * 24 // Cantidad de milisegundos en un dia
    const diference = Math.abs(date1 - date2)

    return Math.floor(diference / oneDay)
}

const today = new Date()
const birth = new Date(1998, 08, 11)

result = daysBetween(birth, today)
console.log(`Hoy es: \n${today}`)
console.log(`Fecha de nacimiento: \n${birth}`)
console.log(`Has vivido ${result} días`)
console.log(`Por lo que tienes ${Math.floor(result/365)} años`)
```

> Hoy es: 
> Wed Nov 27 2019 22:14:58 GMT-0300 (hora de verano de Chile)
> Fecha de nacimiento: 
> Fri Sep 11 1998 00:00:00 GMT-0400 (hora estándar de Chile)
> Has vivido 7747 días
> Por lo que tienes 21 años



### Memoización: Ahorrar computo

```js
/* 
Factorial
!6 = 6 * 5 * 4 * 3 * 2 * 1  | 720
!8 = 8 * 7 * !6
*/

function factorial(n){
    if(!this.cache){ // Revisamos si hay cache en caso contrario la creamos.
        this.cache = {}
        debugger
    }

    if(this.cache[n]){
        return this.cache[n]
    }
    
    if (n == 1){
        return 1
    }

    this.cache[n] = n * factorial(n-1)
    debugger
    return this.cache[n]
}
```

> Guardamos en cache los valores previamente calculados.
>
> Al ejecutar un factorial de 6 se crea una cache y luego se guarda el valor obtenido en esa misma cache. Al introducir un factorial menor a 6 se recurrira al factorial de 6 almacenado para obtener rapidamente el valor. Sin embargo al introducir un numero más alto este sera procesado y almacenado en memoria para ser utilizado y ahorrar computo en futuras operaciones.



### Closures en JavaScript

Se trata de funciones que recuerdan el estado de las cosas al ser invocadas.

```js
function createGreeting(finalGreetings){ // Funcion generadora
    return function(name){
        console.log(`Hola ${name} ${finalGreetings}`)
    }
}

const saludoArgentino = createGreeting('che')
const saludoMexicano = createGreeting('guey')
const saludoAmericano = createGreeting('bruh')

saludoArgentino('Carlos')
saludoMexicano('Carlos')
saludoAmericano('Carlos')
```



### Estructuras de datos inmutables

Permiten desasernos del efeco de lado.

```js
const carlos = {
    name: 'Carlos',
    lastName: 'Brignardello',
    age: 28
}

const birthday = person => person.age++ // Esta función esta modificando permanentemente datos.
const birthdayInmutable = person => ({
    ...person,
    age: person.age + 1
})
```

> Con la segunda función obtenemos un nuevo objeto sin modificar ningun valor del objeto original.



### Cambiar contexto al llamar una función

```js
const carlos = {
    name: 'Carlos',
    lastName: 'Brignardello'
}

function makeGreeting(saludo = 'Hola'){
    console.log(`${saludo}, mi nombre es ${this.name}`)
}
const greetingCarlos = makeGreeting.bind(carlos) // Cambiamos contexto

makeGreeting.call(carlos, 'Hi') // Cambiamos contexto y lo mostramos.
makeGreeting.apply(carlos, ['Que tal jeje']) // Se trabaja con un Array para los parametros adicionales.
```

