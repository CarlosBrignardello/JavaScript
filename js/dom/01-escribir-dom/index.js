/* 1. Escribir Texto */
document.write("1. Este texto fue escrito con document.write")

/* 2. Modificar el estilo mediante clase */
const text_one = document.querySelector('.title') // Seleccionar elemento por clase.
text_one.style.backgroundColor = 'red'

/* 3. Activar estilo vinculado */
const text_two = document.getElementsByTagName('h1')[1]
text_two.classList.add('alert')

/* 4. Eliminar estilo */
const text_three = document.getElementsByTagName('h1')[2]
text_three.classList.remove('border')

/* 5. Agregar evento */
const text_four = document.getElementsByTagName('h1')[3]
text_four.addEventListener('click', alerta => text_four.classList.toggle('alert'))

/* Crear etiquetas y agregarlas */
const header = document.createElement
('h1')
const div = document.getElementById('contenedor')
const texto = document.createTextNode("6. Etiqueta generada por JS")
header.appendChild(texto)
contenedor.appendChild(header)
