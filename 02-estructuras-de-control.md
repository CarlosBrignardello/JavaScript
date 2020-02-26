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
