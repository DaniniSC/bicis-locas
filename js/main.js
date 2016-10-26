function validateForm(){
	//VALIDAR NOMBRE
	contenidoNombre = document.getElementById("name").value;
	if (contenidoNombre==null || contenidoNombre.length==0) {
		alert("Ingresa tu nombre - requerido");
		return false;
	}
	caracteresNombre = document.getElementById("name").value;
	if (/[0-9]/.test(caracteresNombre)) {
		alert("Para tu nombre ingresa sólo letras");
		return false;
	}
	inicialNombre = contenidoNombre.charAt(0);
	if (!(/[A-Z]/.test(inicialNombre))){
		alert("Verifica que tu nombre empiece con mayúscula");
		return false;
	}
	//VALIDAR APELLIDO
	contenidoApellido = document.getElementById("lastname").value;
	if (contenidoApellido==null || contenidoApellido.length==0) {
		alert("Ingresa tu apellido - requerido");
		return false;
	}
	caracteresApellido = document.getElementById("lastname").value;
	if (/[0-9]/.test(caracteresApellido)) {
		alert("Para tu apellido ingresa sólo letras");
		return false;
	}
	inicialApellido = contenidoApellido.charAt(0);
	if (!(/[A-Z]/.test(inicialApellido))){
		alert("Verifica que tu apellido empiece con mayúscula");
		return false;
	}
	//VALIDAR EMAIL
	emailValido = document.getElementById("input-email").value;
	if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(emailValido))) {
  		alert("Por favor ingresa un Email válido");
  		return false;
	}
	//VALIDAR CONTRASEÑA
	contraseñaValida = document.getElementById("input-password").value;
	if (contraseñaValida.length<6 || contraseñaValida=="password" || contraseñaValida==123456 || contraseñaValida==098754) {
		alert("Por favor ingresa una contraseña válida");
		return false;
	}
	//VALIDAR SELECCIÓN
	seleccionarBici = document.querySelector("select").value;
	if(seleccionarBici==0) {
	 	alert("Selecciona tu tipo de Bici - requerido");
	 	return false;
    }
}
validateForm();