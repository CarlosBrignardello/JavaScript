var carlos = {
    nombre: 'Carlos',
    apellido: 'Brignardello',
    edad: 28,
    peso: 85,
};

const VARIACION_PESO = 0.300;

const aumentarPeso = (persona, incremento) =>{
    persona.peso += VARIACION_PESO;
}

const bajaPeso = (persona, incremento) =>{
    persona.peso -= VARIACION_PESO;
}

const comeMucho = () => Math.random() < 0.300;
const realizaDeporte = () => Math.random() < 0.400;

console.log(`Al inicio del año ${carlos.nombre} pesa: ${carlos.peso}KG`);

const META = carlos.peso - 3
var dias = 0

while(carlos.peso > META){
    if(comeMucho()){
        aumentarPeso(carlos);
    }
    if(realizaDeporte()){
        bajaPeso(carlos);
    }
dias += 1;
}

console.log(`Han pasado ${dias} dias para que ${carlos.nombre} adelgazara 3 KG`);
