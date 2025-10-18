// Manejo del formulario de reclamaciones
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioReclamaciones');
    const btnLimpiar = document.getElementById('btnLimpiar');
    const textareaDetalles = document.getElementById('detalles');
    const charCount = document.getElementById('char-count');
    const fileInput = document.getElementById('archivos');
    const fileInfo = document.getElementById('file-info');

    // Contador de caracteres
    if (textareaDetalles && charCount) {
        textareaDetalles.addEventListener('input', function() {
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
        fileInput.addEventListener('change', function() {
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

    // Botón limpiar formulario
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', function() {
            if (confirm('¿Estás seguro de que deseas limpiar todo el formulario? Se perderán todos los datos ingresados.')) {
                formulario.reset();
                if (charCount) charCount.textContent = '0';
                if (fileInfo) {
                    fileInfo.textContent = 'No se han seleccionado archivos';
                    fileInfo.style.color = '#6c757d';
                }
            }
        });
    }

    // Validación y envío del formulario
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
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