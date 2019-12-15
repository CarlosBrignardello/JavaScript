var signo = prompt('¿Cual es tu signo? \n[Acuario|Piscis|Aries|Tauro|Géminis|Cáncer|Leo|Virgo|Libra|Escorpio|Sagitario|Capricornio]');
console.log(`Tú signo es ${signo}`);

switch (signo){
    case'acuario':
        console.log('Me enamoré de la vida, es la única que no me dejará sin antes yo hacerlo. – Pablo Neruda.')
    break;
    case'piscis':
        console.log('Las palabras abren puertas sobre el mar. – Rafael Alberti.')
    break;
    case'aries':
        console.log('Y he llegado a la conclusión de que si las cicatrices enseñan, las caricias también. – Mario Benedetti.')
    break;
    case'tauro':
        console.log('El prejuicio es una carga que confunde el pasado, amenaza el futuro y hace inaccesible el presente. – Maya Angelou.')
    break;
    case'géminis':
        console.log('Nada es real hasta que se experimenta, aún un proverbio no lo es hasta que la vida lo haya ilustrado. – John Keats.')
    break;
    case'cáncer':
        console.log('Amurallar el propio sentimiento es arriesgarte a que te devore desde el interior. – Frida Khalo.')
    break;
    case'leo':
        console.log('Requiere coraje crecer y convertirte en lo que realmente eres. – e.e cummings.') 
    break;
    case'virgo':
        console.log('Es propio de aquellos con mentes estrechas embestir contra todo aquello que no les cabe en la cabez. – Antonio Machado.') 
    break;
    case'libra':
        console.log('Parece, cuando se ama, que el mundo entero tiene rumor de primavera. – Juan Ramón Jiménez.') 
    break;
    case'escorpio':
        console.log('La duda es uno de los nombres de la inteligencia. – Jorge Luis Borges.') 
    break;
    case'sagitario':
        console.log('Muere lentamente quien no viaja, quien no oye música, quien no encuentra gracia en sí mismo. – Pablo Neruda.') 
    break;
    case'capricornio':
        console.log('La perfección es una pulida colección de errores. – Mario Benedetti.')
    default:
        console.log('Eso no es un signo, verifica el dato que ingresaste')
    break;
}