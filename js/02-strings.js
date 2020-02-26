var nombre = "Carlos Brignardello", nombre_corto = 'Carlos', apellido = 'Brignardello';
var nombreMayus = nombre.toUpperCase();
var nombre_cortoMinus = nombre_corto.toLowerCase();
var nombreCaracter = nombre_corto.charAt(0);
var letrasEnNombre = nombre_corto.length;

var nombreCompleto = nombre_corto + " " + apellido; 
var nombreCompleto2 = `${nombre_corto} ${apellido}`;
var str = nombre_corto.substr(0, 3);

var ultima = nombre_corto.charAt((nombre_corto.length) -1);