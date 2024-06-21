// Obligar Formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    let nombre = document.getElementById('nombre').value;
    let errorMessage = document.getElementById('error-message');

    if (nombre === "") {
        errorMessage.textContent = "El campo del nombre es obligatorio.";
        errorMessage.style.display = "block";
        event.preventDefault(); // Evita el envío del formulario
    } else {
        errorMessage.style.display = "none"; // Oculta el mensaje de error si el nombre no está vacío
    }
});

