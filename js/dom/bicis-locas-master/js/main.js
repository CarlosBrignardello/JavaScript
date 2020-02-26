function validateForm(){
	/*
	function alertar(mensaje, elem) {
		var span = elem.parentNode.children[2];
		if (!span) {
			span = document.createElement('span');
		}
		span.innerHTML = mensaje;
		elem.parentNode.appendChild(span);
	}
	function limpiar(elem) {
		var span = elem.parentNode.children[2];
		if (!span) { return; }
		elem.parentNode.removeChild(span);
	}*/

	function alertar(mensaje, elem) {
		var span = elem.parentNode.children[2];
		if (!span) { // si span no eixste, entonces lo creo
			var span = document.createElement('span');
		}
		span.innerHTML = mensaje;
		elem.parentNode.appendChild(span);
	}
	function quitar_span(elem) {
		// elimina el span abajo del elemento
		var span = elem.parentNode.children[2];
		if (!span) {
			return;
		}
		elem.parentNode.removeChild(span);
	}
	var name = document.getElementById('name');
	var lastname = document.getElementById('lastname');
	
	// validación nombre
	if (name.value.length == 0) {
		alertar('Debe escribir un nombre', name);

	} else if (!name.value.match(/^[a-zA-Z]+$/)) {
		alertar('El nombre sólo debe contener letras', name);

	} else if (name.value[0] != name.value[0].toUpperCase()) {
		alertar('Debe comenzar con mayúscula', name);

	} else {
		// si todo está correcto, remuevo el span abajo de name
		quitar_span(name);
	}
	if (lastname.value.length == 0) {
		alertar('Debe ingresar un nombre', lastname);
	} else if (!lastname.value.match(/^[a-zA-Z]+$/)) {
		alertar('Debe ingresar puras letras', lastname);
	} else if (lastname.value[0] != lastname.value[0].toUpperCase()) {
		alertar('Nombre debe comenzar con mayúsculas', lastname);
	} else {
		limpiar(lastname);
	}
	// validación email
	// validación select
}
