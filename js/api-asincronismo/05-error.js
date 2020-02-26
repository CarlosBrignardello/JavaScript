/* NO FUNCIONAN */
const API_URL = 'https://swapi.co/api/'; 
const PEOPLE_URL = 'people/:id';
const OPTS = {crossDomain: true}; 

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, OPTS, callback).fail(() => {
        console.log(`Hubo un error, no se pudo obtener el personaje ${id}`); 
    }); 
}

obtenerPersonaje(1, function (person){
    console.log(`Hola, yo soy ${person.name}`); 

    obtenerPersonaje(2, function(person){
        console.log(`Hola, yo soy ${person.name}`); 

        obtenerPersonaje(17, function(person){
            console.log(`Hola, yo soy ${person.name}`); 
        })
    })
})