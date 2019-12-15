var carlos = {
    nombre: 'Carlos',
    apellido: 'Brignardello',
    edad: 21,
    ingeniero: false,
    tecnico: true,
}

function mostrarProfesion(persona){
    console.log(`${persona.nombre} es: `);
    
    if(persona.ingeniero == true){
        console.log('Ingeniero');
    }; 
    if(persona.tecnico == true){
        console.log('Técnico');
    };
};

function mayoriaEdad(objeto){
    console.log('Mayoria de edad:');
    if(objeto.edad >= 18 ){
        console.log(`${objeto.nombre} es mayor de 18 años`);
    }
    else{
        console.log(`${objeto.nombre} es menor de 18 años`);
    }
};

mostrarProfesion(carlos);
mayoriaEdad(carlos);