// --- SWEETALERT AL ENVIAR Y LIMPIAR FORMULARIO DE RECLAMACIONES ---
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formularioReclamaciones');
    if (formulario) {
        formulario.addEventListener('submit', function (e) {
            e.preventDefault();
            // Recopilar datos principales del formulario
            const tipoDocumento = document.getElementById('tipo-documento').value;
            const numeroDocumento = document.getElementById('numero-documento').value;
            const nombres = document.getElementById('nombres').value;
            const apellidos = document.getElementById('apellidos').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const direccion = document.getElementById('direccion').value;
            const tipoReclamo = document.getElementById('tipo-reclamo').value;
            const fechaIncidente = document.getElementById('fecha-incidente').value;
            const detalles = document.getElementById('detalles').value;
            const pedido = document.getElementById('pedido').value;

            Swal.fire({
                icon: 'success',
                title: '¡Reclamación enviada!',
                html: `
                    <div style="text-align:left;max-width:400px;margin:0 auto;">
                        <b>Tipo de Documento:</b> ${tipoDocumento}<br>
                        <b>Número de Documento:</b> ${numeroDocumento}<br>
                        <b>Nombre:</b> ${nombres} ${apellidos}<br>
                        <b>Email:</b> ${email}<br>
                        <b>Teléfono:</b> ${telefono}<br>
                        <b>Dirección:</b> ${direccion || '-'}<br>
                        <b>Tipo de Reclamo:</b> ${tipoReclamo}<br>
                        <b>Fecha del Incidente:</b> ${fechaIncidente}<br>
                        <b>Detalles:</b> ${detalles}<br>
                        <b>Pedido:</b> ${pedido}
                    </div>
                `,
                confirmButtonText: 'Aceptar',
                customClass: {
                    popup: 'swal2-card-popup'
                }
            }).then(() => {
                formulario.reset();
                // Actualizar contador de caracteres si existe
                const charCount = document.getElementById('char-count');
                if (charCount) charCount.textContent = '0';
            });
        });
    }

    // --- SWEETALERT CONFIRMACIÓN AL LIMPIAR FORMULARIO ---
    const btnLimpiar = document.getElementById('btnLimpiar');
    if (btnLimpiar && formulario) {
        btnLimpiar.addEventListener('click', function (e) {
            e.preventDefault();
            Swal.fire({
                title: '¿Estás seguro?',
                text: "Se borrarán todos los datos ingresados en el formulario.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, limpiar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    formulario.reset();
                    // Actualizar contador de caracteres si existe
                    const charCount = document.getElementById('char-count');
                    if (charCount) charCount.textContent = '0';
                    Swal.fire(
                        'Formulario limpio',
                        'Todos los campos han sido borrados.',
                        'success'
                    );
                }
            });
        });
    }
});
// Mostrar información detallada de las tarjetas info-reclamaciones con SweetAlert2
document.addEventListener('DOMContentLoaded', function () {
    const infoCards = document.querySelectorAll('.info-card[data-info]');
    if (infoCards.length) {
        infoCards.forEach(card => {
            card.addEventListener('click', function () {
                mostrarInfoReclamo(Number(card.getAttribute('data-info')));
            });
        });
    }
});

function mostrarInfoReclamo(idx) {
    const data = [
        {
            icon: '<i class="fas fa-shield-alt fa-3x" style="color:#795548;"></i>',
            title: 'Protegemos tus Derechos',
            text: 'Todas las reclamaciones son tratadas con confidencialidad y seguimos los protocolos establecidos.'
        },
        {
            icon: '<i class="fas fa-clock fa-3x" style="color:#795548;"></i>',
            title: 'Respuesta Rápida',
            text: 'Nos comprometemos a responder tu reclamación en un plazo máximo de 15 días hábiles.'
        },
        {
            icon: '<i class="fas fa-hand-holding-heart fa-3x" style="color:#795548;"></i>',
            title: 'Compromiso con la Calidad',
            text: 'Tus comentarios nos ayudan a mejorar nuestros servicios y atención hacia los animales.'
        }
    ];
    const card = data[idx];
    Swal.fire({
        title: `<div style='margin-bottom:1rem;'>${card.icon}</div>${card.title}`,
        html: `<div style='font-size:1.1rem; color:#4e342e;'>${card.text}</div>`,
        confirmButtonText: 'Cerrar',
        background: '#fffbe9',
        customClass: {
            title: 'swal2-title',
            popup: 'swal2-card-popup'
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formularioReclamaciones');
    const btnLimpiar = document.getElementById('btnLimpiar');
    const textareaDetalles = document.getElementById('detalles');
    const charCount = document.getElementById('char-count');
    const fileInput = document.getElementById('archivos');
    const fileInfo = document.getElementById('file-info');

    // Contador de caracteres
    if (textareaDetalles && charCount) {
        textareaDetalles.addEventListener('input', function () {
            const length = this.value.length;
            charCount.textContent = length;

            if (length > 1000) {
                charCount.style.color = '#dc3545';
            } else if (length > 800) {
                charCount.style.color = '#ffc107';
            } else {
                charCount.style.color = '#28a745';
            }
        });
    }

    // Manejo de archivos
    if (fileInput && fileInfo) {
        fileInput.addEventListener('change', function () {
            const files = this.files;
            if (files.length > 0) {
                let fileNames = [];
                let totalSize = 0;

                for (let file of files) {
                    fileNames.push(file.name);
                    totalSize += file.size;
                }

                const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);
                fileInfo.textContent = `${files.length} archivo(s) seleccionado(s) - ${totalSizeMB} MB`;

                // Validar tamaño total
                if (totalSize > 10 * 1024 * 1024) {
                    fileInfo.style.color = '#dc3545';
                    fileInfo.innerHTML += ' <strong>(Tamaño excede el límite de 10MB)</strong>';
                } else {
                    fileInfo.style.color = '#28a745';
                }
            } else {
                fileInfo.textContent = 'No se han seleccionado archivos';
                fileInfo.style.color = '#6c757d';
            }
        });
    }
    // Validación y envío del formulario
    if (formulario) {
        formulario.addEventListener('submit', function (e) {
            e.preventDefault();

            if (validarFormularioReclamaciones()) {
                enviarReclamacion();
            }
        });
    }

    function validarFormularioReclamaciones() {
        let isValid = true;

        // Validar campos obligatorios
        const camposObligatorios = [
            'tipo-documento', 'numero-documento', 'nombres', 'apellidos',
            'email', 'telefono', 'tipo-reclamo', 'fecha-incidente',
            'detalles', 'pedido', 'consentimiento'
        ];

        camposObligatorios.forEach(campo => {
            const elemento = document.getElementById(campo);
            if (elemento) {
                const valor = elemento.type === 'checkbox' ? elemento.checked : elemento.value.trim();

                limpiarError(elemento);

                if (!valor) {
                    mostrarError(elemento, 'Este campo es obligatorio');
                    isValid = false;
                } else if (campo === 'email' && !validarEmail(elemento.value)) {
                    mostrarError(elemento, 'Por favor ingresa un email válido');
                    isValid = false;
                } else if (campo === 'detalles' && elemento.value.length > 1000) {
                    mostrarError(elemento, 'El mensaje no puede exceder los 1000 caracteres');
                    isValid = false;
                }
            }
        });

        return isValid;
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function mostrarError(elemento, mensaje) {
        elemento.style.borderColor = '#dc3545';
        elemento.style.background = '#fff5f5';

        const errorMensaje = document.createElement('div');
        errorMensaje.className = 'error-mensaje';
        errorMensaje.style.cssText = `
            color: #dc3545;
            font-size: 0.9rem;
            margin-top: 0.5rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        `;
        errorMensaje.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            ${mensaje}
        `;

        elemento.parentNode.appendChild(errorMensaje);
    }

    function limpiarError(elemento) {
        elemento.style.borderColor = '#e9ecef';
        elemento.style.background = '#f8f9fa';

        const errorExistente = elemento.parentNode.querySelector('.error-mensaje');
        if (errorExistente) {
            errorExistente.remove();
        }
    }

    function enviarReclamacion() {
        const btnEnviar = document.querySelector('.btn-enviar-reclamo');
        const textoOriginal = btnEnviar.innerHTML;
        guardarReclamoStorage();

        // Animación de envío
        btnEnviar.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando Reclamación...';
        btnEnviar.disabled = true;

        // Simular envío al servidor
        setTimeout(() => {
            // Generar número de ticket
            const ticketNumber = 'TKT-' + Date.now().toString().slice(-6);

            mostrarMensajeExito(ticketNumber);
            formulario.reset();

            // Restaurar botón
            setTimeout(() => {
                btnEnviar.innerHTML = textoOriginal;
                btnEnviar.disabled = false;
            }, 2000);

        }, 3000);
    }

    function mostrarMensajeExito(ticketNumber) {
        const mensajeExito = document.createElement('div');
        mensajeExito.style.cssText = `
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            color: white;
            padding: 2rem;
            border-radius: 15px;
            margin-top: 2rem;
            text-align: center;
            box-shadow: 0 10px 30px rgba(40, 167, 69, 0.3);
            animation: slideInUp 0.5s ease-out;
        `;
        mensajeExito.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 1rem;">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3 style="margin: 0 0 1rem 0; font-family: 'Quicksand', sans-serif;">
                ¡Reclamación Enviada con Éxito!
            </h3>
            <div style="background: rgba(255,255,255,0.2); padding: 1rem; border-radius: 10px; margin: 1rem 0;">
                <strong>Número de Ticket:</strong>
                <div style="font-size: 1.5rem; font-weight: bold; margin-top: 0.5rem;">${ticketNumber}</div>
            </div>
            <p style="margin: 0; opacity: 0.9;">
                Hemos recibido tu reclamación. Te contactaremos dentro de los próximos 15 días hábiles.<br>
                <strong>Guarda tu número de ticket para cualquier consulta.</strong>
            </p>
        `;

        formulario.parentNode.insertBefore(mensajeExito, formulario.nextSibling);

        // Remover mensaje después de 8 segundos
        setTimeout(() => {
            mensajeExito.style.animation = 'slideOutDown 0.5s ease-in';
            setTimeout(() => {
                if (mensajeExito.parentNode) {
                    mensajeExito.remove();
                }
            }, 500);
        }, 8000);
    }

    // Agregar estilos de animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInUp {
            from {
                transform: translateY(30px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutDown {
            from {
                transform: translateY(0);
                opacity: 1;
            }
            to {
                transform: translateY(30px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// GUARDAR DATOS DEL RECLAMO EN LOCALSTORAGE
function guardarReclamoStorage() {
    const reclamo = {
        nombre: document.getElementById("nombres").value,
        apellido: document.getElementById("apellidos").value,
        tipo: document.getElementById("tipo-reclamo").value,
        detalles: document.getElementById("detalles").value,
        fecha: new Date().toLocaleString()
    };

    let lista = JSON.parse(localStorage.getItem("reclamos")) || [];
    lista.push(reclamo);
    localStorage.setItem("reclamos", JSON.stringify(lista));
}

// Abrir lista de reclamos en PDF
document.getElementById("btnListaReclamos").addEventListener("click", () => {
    const reclamos = JSON.parse(localStorage.getItem("reclamos")) || [];

    let html = `
            <h1>LISTA DE RECLAMACIONES</h1>
            <table border="1" cellpadding="8" cellspacing="0">
                <tr><th>Nombre</th><th>Apellido</th><th>Tipo</th><th>Mensaje</th><th>Fecha</th></tr>
        `;

    reclamos.forEach(r => {
        html += `
                <tr>
                    <td>${r.nombre}</td>
                    <td>${r.apellido}</td>
                    <td>${r.tipo}</td>
                    <td>${r.detalles}</td>
                    <td>${r.fecha}</td>
                </tr>
            `;
    });

    html += "</table>";

    const win = window.open("", "_blank");
    win.document.write(html);
    win.print();
});



document.getElementById("btnEliminarReclamos").addEventListener("click", eliminarTodasReclamaciones);

function eliminarTodasReclamaciones() {
    if (confirm("¿Seguro que deseas eliminar TODAS las reclamaciones? Esta acción no se puede deshacer.")) {
        localStorage.removeItem("reclamos");
        alert("Todas las reclamaciones han sido eliminadas.");
    }
}

// --- CONTROL DE BOTONES SOLO PARA ADMIN EN RECLAMACIONES.HTML ---
window.addEventListener("DOMContentLoaded", () => {
    const usuario = localStorage.getItem("usuario");

    // Botones solo para admin
    const btnLista = document.getElementById("btnListaReclamos");
    const btnEliminar = document.getElementById("btnEliminarReclamaciones");

    // Verificar si los botones existen antes de hacer la validación
    if (btnLista && btnEliminar) {
        if (usuario !== "admin") {
            // Si el usuario no es admin, ocultar los botones
            btnLista.style.display = "none";
            btnEliminar.style.display = "none";
        } else {
            // Si el usuario es admin, asegurarse que los botones estén visibles
            btnLista.style.display = "block";
            btnEliminar.style.display = "block";
        }
    }
});
// Mostrar botón solo si es admin
if (localStorage.getItem("usuario") === "admin") {
    document.getElementById("btnListaReclamos").style.display = "inline-block";
}

if (localStorage.getItem("usuario") === "admin") {
    document.getElementById("btnListaReclamos").style.display = "inline-block";
    document.getElementById("btnEliminarReclamos").style.display = "inline-block";
}




