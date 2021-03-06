// Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');


// event Listener

eventListeners();
function eventListeners() {
        // Inicio de la aplicacion y deshabilitar submit
        document.addEventListener('DOMContentLoaded', inicioApp);
        // Campo del formulario
        email.addEventListener('blur', validarCampo);
        asunto.addEventListener('blur', validarCampo);
        mensaje.addEventListener('blur', validarCampo);
}


// Funciones
function inicioApp() {
    // Deshabilitar el envio
    btnEnviar.disabled = true;
}
// Valida que el campo tenga ago escrito

function validarCampo() {
    // Se validar la longitud de texto que no este vacio
    validarLongitud(this);

    // Validar unicamente el email
    if(this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '' ) {
        if(errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
}

function validarLongitud(campo) {
    
    if(campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.remove('error');
    }
}

function validarEmail(campo) {
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1 ) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.remove('error');
    }
}