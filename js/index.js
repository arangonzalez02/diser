// Movimiento de fotos
let contenedor_placas = document.querySelectorAll (".placas")

contenedor_placas.forEach(placas => {
    let widhOrig = placas.clientWidth;
    let heightOrig = placas.clientHeight;

    placas.addEventListener("mouseover", function() {
        //Aumenta el tamaño
        placas.style.width = (widhOrig * 1.2) + "px";
        placas.style.height = (heightOrigOrig * 1.2) + "px";
    });

    placas.addEventListener("mouseout", function() {
        //Disminuir el tamaño
        placas.style.width = widhOrig + "px";
        placas.style.height = heightOrigOrig + "px";
    });
});



//Bienvenida
alert("Bienvenida, existe una nueva sección de suscripción de noticias.   Espero que disfrute del examen :)");