function validateForm(){

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

	/* SELECCIONAMOS LOS INPUTS */
	var name = document.getElementById('name');
	var lastname = document.getElementById('lastname');
	var email = document.getElementById('input-email');
	var password = document.getElementById('input-password');
	

	/* VALIDACIONES */
	if (name.value.length == 0) {
		alertar('Debe escribir un nombre', name);
	} 
	else if (!name.value.match(/^[a-zA-Z]+$/)) {
		alertar('Debe ingresar puras letras', name);
	} 
	else if (name.value[0] != name.value[0].toUpperCase()) {
		alertar('Nombre debe comenzar con mayúsculas', name);
	} 
	else{
		quitar_span(name)
	}

	if (lastname.value.length == 0) {
		alertar('Debe escribir un nombre', lastname);
	} 
	else if (!lastname.value.match(/^[a-zA-Z]+$/)) {
		alertar('Debe ingresar puras letras', lastname);
	} 
	else if (lastname.value[0] != lastname.value[0].toUpperCase()) {
		alertar('Nombre debe comenzar con mayúsculas', lastname);
	} 
	else{
		quitar_span(lastname)
	}

	if (email.value.length == 0) {
		alertar('Debe escribir un correo', email);
	}
	else{
		quitar_span(email)
	}

	if (password.value.length == 0) {
		alertar('Debe escribir una contraseña', password);
	}
	else if(password.value.length < 6){
		alertar('La contraseña debe ser mayor o igual a 6 caracteres', password)
	}
	else if(password.value == "password" || password.value == "123456" || password.value == "654321"){
		alertar('La contraseña debe ser más fuerte', password)
	}
	else{
		quitar_span(password)
	}
}