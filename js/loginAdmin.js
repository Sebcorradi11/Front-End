document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del formulario

        // Obtener los valores ingresados en los campos de usuario y contraseña
        let user = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        // Validar las credenciales
        if (user === "hola" && password === "mundo") {
            // Redirigir a la página de administración si las credenciales son correctas
            window.location.href = "myAdmin.html";
        } else {
            // Mostrar un mensaje de error si las credenciales no son correctas
            alert("Datos incorrectos");
        }
    });
});
