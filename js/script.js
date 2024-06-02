
// Agrega un evento al botón con la clase 'boton-volver' para volver a la página anterior
document.querySelector('.boton-volver').addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el enlace se comporte como un enlace normal
    // Vuelve a la página anterior en el historial del navegador
    window.history.back();
});

// Agrega eventos a los botones de iniciar sesión y registrarse
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);

// Agrega un evento para redimensionar la ventana que llama a la función anchoPagina
window.addEventListener("resize", anchoPagina);

// Declaración de variables para los elementos del DOM
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

// Llama a la función anchoPagina al cargar la página
anchoPagina();

/**
 * Ajusta la visibilidad y opacidad de los formularios y cajas traseras
 * dependiendo del ancho de la ventana.
 */
function anchoPagina() {
    if (window.innerWidth > 850) { // Si el ancho de la ventana es mayor a 850px
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.opacity = "1";
        caja_trasera_register.style.opacity = "1";
    } else { // Si el ancho de la ventana es menor o igual a 850px
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

/**
 * Muestra el formulario de inicio de sesión y ajusta la visibilidad y opacidad
 * de las cajas traseras dependiendo del ancho de la ventana.
 */
function iniciarSesion() {
    if (window.innerWidth > 850) { // Si el ancho de la ventana es mayor a 850px
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else { // Si el ancho de la ventana es menor o igual a 850px
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}



