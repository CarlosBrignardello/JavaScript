// Obtenemos los datos de la API
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true };

function obtenerPersonaje(id) {
// NO recibimos un callback, se retorna una promesa.    
    return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, function(data){
        resolve(data);
    })
    .fail(()=>reject(id));
  });
}

function onError(id){
  console.log(`Sucedió un error al obtener el personaje ${id}`);
}

// Llamamos la función con la promesa
obtenerPersonaje(1)
.then(function(personaje){
  console.log(`El personaje 1 es: ${personaje.name}`);
})
.catch(onError);