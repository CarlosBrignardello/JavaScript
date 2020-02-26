var compañeros = ["Carlos", "Claudia", "Gastón", "Gabriela"]
var notas = [3.5, 7, 4.0, 6.5]
var largo = compañeros.length

console.log(`Los alumnos ${compañeros} tienen las siguientes notas ${notas}`)

compañeros.push("Vladimir")

console.log(`Ahora que llego Vladimir los alumnos son: ${compañeros}`)

console.log("El segundo compañero es: " + compañeros[1])

console.log("Mis compañeros son: ")
for(i = 0; i < compañeros.length; i++){
    console.log(compañeros[i])
}