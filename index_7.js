function validateForm(e){
	let email = document.forms["myForm"]["email"].value;
	let password = document.forms["myForm"]["password"].value;

    if (email === "") {
        let msg1 = document.getElementById('error-email').innerHTML = "Campo obligatorio";
        document.getElementById('error-email').style.color = 'red';
        e.preventDefault();
    } else if (!(/\w+@\w/).test(email)) {
        let msg2 = document.getElementById('error-email').innerHTML = "Falta el @ en el usuario";
        document.getElementById('error-email').style.color = 'red';
        e.preventDefault();
    } 
    if (password.length<1) {
        let msg3 = document.getElementById('error-password').innerHTML = "Ingresá una contraseña";   
        document.getElementById('error-password').style.color = 'red';
        e.preventDefault();     
    } 
    else {
        alert("Formulario enviado");   
    }    
}

myForm.addEventListener('submit', validateForm);




  
