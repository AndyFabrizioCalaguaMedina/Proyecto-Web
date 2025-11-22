if (!localStorage.getItem("adopciones")) {
    localStorage.setItem("adopciones", "0");
}

function leerContador() {
    return parseInt(localStorage.getItem("adopciones") || "0", 10);
}

function escribirContador(n) {
    localStorage.setItem("adopciones", String(n));
    const el = document.getElementById("contador");
    if (el) el.textContent = n;
}

document.addEventListener("DOMContentLoaded", () => {
    
    escribirContador(leerContador());

   
    const botonesSumar = document.querySelectorAll(".btn.primary");
    botonesSumar.forEach(boton => {
        boton.addEventListener("click", () => {
            let valor = leerContador();
            valor++;        
            escribirContador(valor);

          
            const card = boton.closest(".card");
            if (card) card.classList.add("selected");
        });
    });

    
    const botonesQuitar = document.querySelectorAll(".btn.remove");
    botonesQuitar.forEach(boton => {
        boton.addEventListener("click", () => {
            let valor = leerContador();

            if (valor > 0) {
                valor--;    
                escribirContador(valor);
            }

        
            const card = boton.closest(".card");
            if (card) card.classList.remove("selected");
        });
    });
});


window.addEventListener("storage", (e) => {
    if (e.key === "adopciones") {
        const nuevo = parseInt(e.newValue || "0", 10);
        const el = document.getElementById("contador");
        if (el) el.textContent = nuevo;
    }
});

