# **PROYECTO** JUEGO

Comenzamos el proyecto con los siguientes archivos:



**Documento HTML**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Simon Dice</title>
    <link rel="stylesheet" href="./styles.css">
    <link rel="icon" href="https://static.platzi.com/media/achievements/badge-fundamentos-javascript-61c15bdf-0a83-4aed-8537-b4753e4071e1.png">
  </head>
  <body>
    <div class="gameboard">
      <div id="celeste" class="color celeste left" data-color="celeste"></div>
      <div id="violeta" class="color violeta right" data-color="violeta"></div>
      <div id="naranja" class="color naranja left" data-color="naranja"></div>
      <div id="verde" class="color verde right" data-color="verde"></div>
      <button id="btnEmpezar" class="btn-start" onclick="empezarJuego()">Empezar a jugar!</button>
    </div>
    <script src="./01-juego-v1.js"></script>
  </body>
</html>
```



**CSS**

```css
body {
    margin: 0;
    background: #dedede;
    display: flex;
    align-items: center;
    height: 100vh;
  }

  .gameboard {
    height: 100vh;
    width: 100vh;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    max-height: 60vh;
    max-width: 60vh;
  }

  .color {
    width: 50%;
    height: 50%;
    display: inline-block;
  }

  .left {
    float: left;
  }

  .right {
    float: left;
  }

  .celeste {
    background: #22a6b3;
  }

  .celeste.light {
    background: #7ed6df;
  }

  .violeta {
    background: #be2edd;
  }

  .violeta.light {
    background: #e056fd;
  }

  .naranja {
    background: #f0932b;
  }

  .naranja.light {
    background: #ffbe76;
  }

  .verde {
    background: #6ab04c;
  }

  .verde.light {
    background: #badc58;
  }

  .btn-start {
    width: 400px;
    height: 100px;
    background: #ecf0f1;
    color: #2c3e50;
    font-size: 2.5rem;
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 200px);
  }

  .hide {
    display: none;
  }	
```



**Ocultar Botón**

Tenemos un botón para comenzar el juego, primeramente definiremos la función *"**empezarJuego"***, la clase *"**Juego**"* posee toda la lógica del juego, lo hacemos con un constructor que llamara a la función "**inicializar**", este función lo que hará es ocultar el botón de comenzar que definimos en HTML con el id "**btnEmpezar**".

```javascript
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Juego {
  constructor() {
    this.inicializar()
  }

  inicializar() {
    btnEmpezar.classList.add('hide')
  }
}

function empezarJuego() {
  var juego = new Juego()
}
```

> Mediante la constante "**btnEmpezar**" obtendremos el control del botón mediante JavaScript. Lo mismo hacemos con el resto de constantes.
>
> Dentro de la función "**inicializar**" ejecutamos el método `classList.add` para acceder a las opciones de CSS y añadir la configuración de clase denominada "**hide**", la cual dentro del archivo CSS posee la configuración `display: none;` lo que provocara que el botón sea ocultado.



**Generar secuencia de números**

A continuación se añadirá la secuencia de colores que el usuario debe introducir en el juego, para ello definimos un array de números que definirá cada uno de los colores.

En el constructor añadimos la función `generarSecuencia()` generamos la función con un array de números aleatorios para ello utilizamos `new Array(10)` para indicar la cantidad de elementos. llamamos a la función `fill(0)` y la función `map()`, `map()` solo funcionara anteponiendo `fill()` con valor 0. dentro de `map()` agregaremos una variable que contendrá una función que devolverá un número entre 0 y 3, redondeando hacia abajo. Dentro de "**inicializar**" definimos que el nivel actual en 1.

Guardamos también los colores dentro de la función *"**inicializar**"*.

```javascript
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Juego {
  constructor() {
    this.inicializar()
    this.generarSecuencia()
  }

  inicializar() {
    btnEmpezar.classList.add('hide')
    this.nivel = 1
    this.colores = {
        celeste,
        violeta,
        naranja,
        verde
    }
  }

  generarSecuencia(){
      this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
  }
}

function empezarJuego() {
  var juego = new Juego()
  window.juego = new Juego()
}
```

Con el método `window` podemos revisar la lista generada, la cual en forma aleatoria, tendrá este formato:

```
> juego
Juego {nivel: 1, secuencia: Array(10)}
	nivel: 1
	secuencia: (10) [0, 3, 2, 1, 2, 2, 0, 3, 2, 0]
```



**Iluminando la secuencia de colores**

La secuencia posee diez números la idea es que en el primer nivel se repita uno, en el segundo dos, en el tercero tres y así sucesivamente.

Nos dirigimos al constructor y vinculamos la función "**siguienteNivel()**" la cual al ejecutarse llama a otra función denominada "**iluminarSecuencia()**" utilizamos un ciclo **for** la cual será repetida tantas veces como el número del nivel en que nos encontremos. 

Para transformar un número a color utilizaremos una función la cual recibirá como parámetro un número, en su interior utilizamos un **switch** que vinculara cada número con un color. Dentro del **for** añadiremos una variable denominada "**color**" que ira transformando los colores según la secuencia.

Creamos también la función "**iluminarColor(color)**" que modificara el estilo del color correspondiente. que al final ejecutara una clase contraria para quitar el efecto de luz. Debemos añadir también una secuencia que muestre por cierto tiempo los estilos.

```javascript
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Juego{
    constructor(){
        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()
    } 
    
    inicializar(){     
        btnEmpezar.classList.add('hide')
        this.nivel = 7 
        this.colores = {
            celeste, 
            violeta,
            naranja,
            verde
        }    
    }  

    generarSecuencia(){
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random()*4))
    }

    siguienteNivel(){
        this.iluminarSecuencia()
    }

    transformarNumeroAColor(numero){
        switch (numero){
            case 0: 
                return'celeste'
            case 1:
                return'violeta'
            case 2:
                return'naranja'
            case 3:
                return'verde'
        }
    }

    iluminarSecuencia(){ // let mantiene la variable a diferencia de var que siempre pisa la misma variable, usar siempre conts antes que let y usar siepre let antes de var.
        for (let i = 0; i < this.nivel; i++){
            const color = this.transformarNumeroAColor(this.secuencia[i]) 
            setTimeout(() => this.iluminarColor(color), 1000 * i)
        }
    }

    iluminarColor(color){
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color), 350)
    }

    apagarColor(color){
        this.colores[color].classList.remove('light')
    }
}    

function empezarJuego(){    
    window.juego = new Juego()
}
```



**Obtener input del usuario**

Una vez el usuario sabe que botón debe pulsar en cada nivel, necesitamos obtener el `input()` del usuario. Para ello crearemos un evento denominado "**agregarEventosClick**" al ejecutar "**siguienteNivel**". Cuando definimos la función le agregamos una escucha a cada color.

En cada escucha se llamara a la función "**elegirColor**" con `bind()` establecemos `this`, para que no convierta en algún otro elemento y cause problemas. De esta forma `this` sigue siendo el objeto del juego.

```javascript
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Juego{
    constructor(){
        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()
    } 
    
    inicializar(){
        this.elegirColor = this.elegirColor.bind(this)
        btnEmpezar.classList.add('hide')
        this.nivel = 7 
        this.colores = {
            celeste, 
            violeta,
            naranja,
            verde
        }    
    }  

    generarSecuencia(){
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random()*4))
    }

    siguienteNivel(){
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }

    transformarNumeroAColor(numero){
        switch (numero){
            case 0: 
                return'celeste'
            case 1:
                return'violeta'
            case 2:
                return'naranja'
            case 3:
                return'verde'
        }
    }

    iluminarSecuencia(){ 
        for (let i = 0; i < this.nivel; i++){
            const color = this.transformarNumeroAColor(this.secuencia[i]) 
            setTimeout(() => this.iluminarColor(color), 1000 * i)
        }
    }

    iluminarColor(color){
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color), 350)
    }

    apagarColor(color){
        this.colores[color].classList.remove('light')
    }

    agregarEventosClick(){
        this.colores.celeste.addEventListener('click', this.elegirColor)
        this.colores.violeta.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
        this.colores.verde.addEventListener('click', this.elegirColor)
    }

    elegirColor(ev){
        console.log(this)
    }

}    

function empezarJuego(){    
    window.juego = new Juego()
}
```



**Verificando color elegido**

Es necesario verificar si el usuario realizo correctamente la secuencia. Para agregar esa lógica trabajaremos la función "**elegirColor**", para ello poseemos un atributo denominado "**target**" el cual a su vez posee un atributo denominado "**dataset**" el cual posee el dato del color, este fue obtenido mediante clases, con un elemento en los botones denominado, "data-color". Por ello dentro de la función generarnos un constante denominada "**nombreColor**" del cual obtendremos el color como string.

De esta forma obtendremos el dato de un color pulsado, para operar correctamente generaremos una función para transformar de color a numero. Para determinar la secuencia correcta haremos que en cada nivel, se comienza en 0 con la secuencia. 

La lógica la realizamos con un **if**, si el numero del color que toco el usuario es igual a la secuencia del subnivel aumentamos el subnivel, luego si el subnivel es igual al nivel, se incrementara el nivel. Llamamos un método que imposibilitara que el usuario haga clic mientras se pasa de nivel.

Definimos también cual será el ultimo nivel con una constante, finalmente en la lógica revisamos si el nivel actual es igual al ultimo nivel para disparar que el juego acabo.

En caso de que no sea el ultimo nivel utilizamos un condicional **else** para pasar al siguiente nivel. Adicionalmente añadimos la lógica por si el usuario comete un error. 

Añadimos también unas configuraciones a lo retrasos.

```javascript
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 10

class Juego{
    constructor(){
        setTimeout(() =>{
            this.siguienteNivel()
        }, 1000)
        this.inicializar()
        this.generarSecuencia()
    } 
    
    inicializar(){
        this.elegirColor = this.elegirColor.bind(this)
        this.siguienteNivel = this.siguienteNivel.bind(this)
        btnEmpezar.classList.add('hide')
        this.nivel = 1 
        this.colores = {
            celeste, 
            violeta,
            naranja,
            verde
        }    
    }  

    generarSecuencia(){
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random()*4))
    }

    siguienteNivel(){
        this.subnivel = 0
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }

    transformarNumeroAColor(numero){
        switch (numero){
            case 0: 
                return'celeste'
            case 1:
                return'violeta'
            case 2:
                return'naranja'
            case 3:
                return'verde'
        }
    }

    transformarColorANumero(color){
        switch (color){
            case 'celeste': 
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }
    }
    
    iluminarSecuencia(){ 
        for (let i = 0; i < this.nivel; i++){
            const color = this.transformarNumeroAColor(this.secuencia[i]) 
            setTimeout(() => this.iluminarColor(color), 1000 * i)
        }
    }

    iluminarColor(color){
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color), 350)
    }

    apagarColor(color){
        this.colores[color].classList.remove('light')
    }

    agregarEventosClick(){
        this.colores.celeste.addEventListener('click', this.elegirColor)
        this.colores.violeta.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
        this.colores.verde.addEventListener('click', this.elegirColor)
    }

    eliminarEventosClick(){
        this.colores.violeta.removeEventListener('click', this.elegirColor)
        this.colores.celeste.removeEventListener('click', this.elegirColor)
        this.colores.naranja.removeEventListener('click', this.elegirColor)
        this.colores.verde.removeEventListener('click', this.elegirColor)
    }

    elegirColor(ev){
        console.log(ev)
        const nombreColor = ev.target.dataset.color
        const numeroColor = this.transformarColorANumero(nombreColor)
        this.iluminarColor(nombreColor)
        if(numeroColor === this.secuencia[this.subnivel]){
            this.subnivel++
            if(this.subnivel === this.nivel){
                this.nivel++
                this.eliminarEventosClick()
                if(this.nivel === (ULTIMO_NIVEL + 1)){
                    //terminarJuego()
                }
                else{
                    setTimeout(this.siguienteNivel, 1000)
                }
            }
        }
        else{
            //perderJuego()
        }
    }

}    

function empezarJuego(){    
    window.juego = new Juego()
}
```



**Mensajes de Victoria y Derrota**

Ahora debemos configurar una pantalla especial para cuando se pierda o se gane en el juego para ello utilizaremos la librería sweetalert.

**Librería Sweet Alert:**

* **Sitio**
  * https://sweetalert2.github.io

* **Añadirlo a HTML**

```html
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
```



Definimos la función para ganar el juego en el cual se active la librería, lo mismo para cuando se pierde. Añadimos un método para volver a mostrar el botón.

```javascript
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 7

class Juego{
    constructor(){
        setTimeout(() =>{
            this.siguienteNivel()
        }, 1000)
        this.inicializar()
        this.generarSecuencia()
    } 
    
    inicializar(){
        this.elegirColor = this.elegirColor.bind(this)
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.inicializar = this.inicializar.bind(this)
        this.toggleBtnEmpezar()
        this.nivel = 1 
        this.colores = {
            celeste, 
            violeta,
            naranja,
            verde
        }    
    }  

    toggleBtnEmpezar(){
        if(btnEmpezar.classList.contains('hide')){
            btnEmpezar.classList.remove('hide')
        }
        else{
            btnEmpezar.classList.add('hide')
        }
    }

    generarSecuencia(){
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random()*4))
    }

    siguienteNivel(){
        this.subnivel = 0
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }

    transformarNumeroAColor(numero){
        switch (numero){
            case 0: 
                return'celeste'
            case 1:
                return'violeta'
            case 2:
                return'naranja'
            case 3:
                return'verde'
        }
    }

    transformarColorANumero(color){
        switch (color){
            case 'celeste': 
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }
    }
    
    iluminarSecuencia(){ 
        for (let i = 0; i < this.nivel; i++){
            const color = this.transformarNumeroAColor(this.secuencia[i]) 
            setTimeout(() => this.iluminarColor(color), 1000 * i)
        }
    }

    iluminarColor(color){
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color), 350)
    }

    apagarColor(color){
        this.colores[color].classList.remove('light')
    }

    agregarEventosClick(){
        this.colores.celeste.addEventListener('click', this.elegirColor)
        this.colores.violeta.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
        this.colores.verde.addEventListener('click', this.elegirColor)
    }

    eliminarEventosClick(){
        this.colores.violeta.removeEventListener('click', this.elegirColor)
        this.colores.celeste.removeEventListener('click', this.elegirColor)
        this.colores.naranja.removeEventListener('click', this.elegirColor)
        this.colores.verde.removeEventListener('click', this.elegirColor)
    }

    elegirColor(ev){
        console.log(ev)
        const nombreColor = ev.target.dataset.color
        const numeroColor = this.transformarColorANumero(nombreColor)
        this.iluminarColor(nombreColor)
        if(numeroColor === this.secuencia[this.subnivel]){
            this.subnivel++
            if(this.subnivel === this.nivel){
                this.nivel++
                this.eliminarEventosClick()
                if(this.nivel === (ULTIMO_NIVEL + 1)){
                    this.terminarJuego()
                }
                else{
                    setTimeout(this.siguienteNivel, 1000)
                }
            }
        }
        else{
            this.perderJuego()
        }
    }

    terminarJuego(){
        Swal.fire('Carlos Brignardello',
            'Felicidades, ganaste el juego!',
            'success')
            .then(()=>{
                this.inicializar()
            })
    }

    perderJuego(){
        Swal.fire('Carlos Brignardello',
            'Perdiste!',
            'error')
            .then(()=>{
                this.eliminarEventosClick()
                this.inicializar()
            })
    }
    
}    

function empezarJuego(){    
    window.juego = new Juego()
}
```

