# JavaScript en el DOM



**Escribir texto en HTML mediante JavaScript**:







https://www.discoduroderoer.es/ejercicios-propuestos-y-resueltos-basicos-javascript/









```javascript
var row = document.createElement("div")
var cont = document.getElementsByClassName("container")[0]
row.className = "row"
cont.appendChild(row)
```





### Eventos

onclick: al hacer clic

onhover: pasar cursos por encima

onsubmit: al enviar un formulario

ondblclick: al hacer doble clic

onchange: cuando cambia un elemento