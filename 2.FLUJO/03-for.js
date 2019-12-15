var carlos = {
    nombre: 'Carlos',
    apellido: 'Brignardello',
    edad: 28,
    peso: 85,
};

const VARIACION_PESO = 0.200;

const aumentarPeso = (persona, incremento) =>{
    persona.peso += VARIACION_PESO;
}

const bajaPeso = (persona, incremento) =>{
    persona.peso -= VARIACION_PESO;
}

const mantienePeso = (persona, incremento) =>{
    persona.peso = persona.peso;
}

console.log(`Al inicio del año ${carlos.nombre} pesa: ${carlos.peso}KG`);

for(var i = 1; i<=365; i++){
    var random = Math.random() * 100;
    if(random < 25){
        aumentarPeso(carlos);
    }
    else if(random < 50){
        bajaPeso(carlos);
    }
    else{
        mantienePeso(carlos);
    }
    
};

console.log(`Al final del año ${carlos.nombre} pesa: ${carlos.peso.toFixed(1)}KG`);
