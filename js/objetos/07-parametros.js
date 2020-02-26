var carlos = {
    nombre: 'Carlos',
    edad: 21,
    trabajo: 'Web'
};

function cumpleanos(persona){
    return{
    ...persona,
        edad: persona.edad + 1
    };
};

var personaNueva = cumpleanos(carlos);