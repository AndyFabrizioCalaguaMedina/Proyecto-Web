document.addEventListener("DOMContentLoaded", () => {
    console.log("script cargado correctamente");
//menu hambuergesa
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navbar ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

   //carrusel
    const cinta = document.querySelector('.cinta');
    let posicion = 0;

    if (cinta) {
        setInterval(() => {
            posicion -= 1;
            cinta.style.transform = `translateX(${posicion}px)`;

            if (Math.abs(posicion) >= cinta.scrollWidth / 2) {
                posicion = 0;
            }
        }, 20);
    }

  //alerta
    const form = document.getElementById("formDonacion");

    if (form) {
        console.log("Formulario detectado.");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            console.log("Evento submit ejecutado.");

            Swal.fire({
                title: "¡Gracias por tu donación! 💛",
                text: "Tu apoyo es muy importante para nuestros animalitos 🐾",
                icon: "success",
                confirmButtonText: "Cerrar"
            });

            form.reset();
        });
    } else {
        console.log("NO se encontró el formulario");
    }

});
