var nombre = 'Carlos', edad = 21;

function mostrarDatos(){
    console.log("DATOS" +
                "\nNombre: " + nombre + 
                "\nEdad: " + edad);
}

console.log(`DATOS
Nombre: ${nombre}
Edad: ${edad}`);

mostrarDatos();

function mostrarEdad(x){
    console.log(`La edad es: ${x}`)
}

mostrarEdad(21);