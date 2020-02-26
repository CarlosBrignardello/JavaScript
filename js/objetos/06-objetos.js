var carlos = {
    nombre: 'Carlos',
	apellido: 'Brignardello',
	edad: 21,
};

var felix = {
    nombre: 'Felix',
    apellido: 'Desconocido',
    edad: 21,
};

function nombreMayusculas({ nombre }){
    console.log(nombre.toUpperCase());
}

function nombreMayuscula( persona ){
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

nombreMayusculas(carlos);
nombreMayusculas(felix);
nombreMayusculas({ nombre: "Sebastian" });

nombreMayuscula(carlos);
nombreMayuscula(felix);
nombreMayuscula({ nombre: "Sebastian" });