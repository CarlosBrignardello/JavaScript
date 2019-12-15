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
