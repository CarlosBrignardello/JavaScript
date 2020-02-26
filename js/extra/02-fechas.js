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