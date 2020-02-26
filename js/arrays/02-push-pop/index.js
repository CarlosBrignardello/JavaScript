list = ["Carlos", "Gabriela", "Joshua", "Adel"]
personasB = ["Carlos", "Gabriela", "Joshua", "Adel"]
personasC = ["Carlos", "Gabriela", "Joshua", "Adel"]

function añadir(persona){
    console.log(`Se añade a ${persona}`)
    list.push(persona)
    console.log(list)
}
function sacarUltimo(){
    var extraido = list.pop()
    console.log(`Se extrajo a ${extraido}`)
    console.log(list)
}

añadir("Daniel")
añadir("Carlos A")
añadir("Edison")
sacarUltimo()
sacarUltimo()
sacarUltimo()

console.log('%c Lista de Personas', 'color: orange; font-weight: bold;')
console.table( list )
console.table( [list] )
console.table( [list, personasB, personasC] )
