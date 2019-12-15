/* NO FUNCIONAN */
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }
const onResponse = function (personaje) {
    console.log(`Hola yo soy ${personaje.name}`)
}

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onResponse) 
    if(callback){
        callback()
    }
}

obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4, function(){
                obtenerPersonaje(5)
            })
        })
    })
})