/* Analizar caracteres
var nombre = "Carlos Brignardello"

nombre.includes('Brignardello')
nombre.endsWith('Brignardello')
nombre.startsWith('Carlos')
*/

var reemplazar = 'Carlos Brignardello'.replace('Brignardello', 'Cerda')
console.log(reemplazar)

var cortar = 'Carlos Brignardello'.split(' ')
console.log(cortar)

var cortarI = 'Carlos Brignardello'.split('')[2]
console.log(cortarI)

var subCortar = "Hola Mundo!".substring(2)
var subCortarRange = "Hola Mundo!".substring(2,7)
console.log(subCortar)
console.log(subCortarRange)

var subCortarCantidad = "Hola Mundo!".substr(2,7)
console.log(subCortarCantidad)