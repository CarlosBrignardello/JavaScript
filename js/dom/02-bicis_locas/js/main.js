function validateForm(){ 	
	var name = document.getElementById('name');
	var lastname = document.getElementById('lastname');
	var email = document.getElementById('input-email');
	var password = document.getElementById('input-password');
	
	function makeAlert(element, text){
		var span_name = document.createElement('span')
		span_name.innerHTML = text
		element.parentNode.appendChild(span_name)
	}
	
	if(name.value.length == 0){
		makeAlert(name, "DEBES ingresar un nombre")
	}
	if(!name.value.match(/^[a-z]+$/i)){
		makeAlert(name, "DEBES ingresar solo letras")
	}
	if(name.value != name.value.toUpperCase()){
		makeAlert(name, "El nombre DEBE comenzar por mayusculas")
	}

	if(lastname.value.length == 0){
		makeAlert(lastname, "DEBES ingresar un apellido")
	}
	if(!lastname.value.match(/^[a-z]+$/i)){
		makeAlert(lastname, "DEBES ingresar solo letras")
	}
	if(lastname.value != lastname.value.toUpperCase()){
		makeAlert(lastname, "El nombre DEBE comenzar por mayusculas")
	}

	if(email.value.length == 0){
		makeAlert(email, "DEBES ingresar un correo")
	}
	if(!email.value.match(/^[a-z]+$/i)){
		makeAlert(email, "DEBES ingresar solo letras")
	}
	if(email.value != email.value.toUpperCase()){
		makeAlert(email, "El nombre DEBE comenzar por mayusculas")
	}

	if(password.value.length == 0){
		makeAlert(password, "DEBES ingresar una contraseña")
	}
	if(!password.value.match(/^[a-z]+$/i)){
		makeAlert(password, "DEBES ingresar solo letras")
	}
	//else if( mayusculas){
		//makeAlert(lastname, "El nombre DEBE comenzar por mayusculas")
	//}
}