// Manejo del formulario de contacto mejorado
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioContacto');
    
    if (formulario) {
        // Agregar efectos a los inputs
        const inputs = formulario.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (this.value === '') {
                    this.parentElement.classList.remove('focused');
                }
            });
        });

        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validarFormulario()) {
                enviarFormulario();
            }
        });
    }
    
    function validarFormulario() {
        let isValid = true;
        const campos = [
            { id: 'nombre', tipo: 'texto' },
            { id: 'email', tipo: 'email' },
            { id: 'asunto', tipo: 'select' },
            { id: 'mensaje', tipo: 'texto' }
        ];

        campos.forEach(campo => {
            const elemento = document.getElementById(campo.id);
            const valor = elemento.value.trim();
            
            // Limpiar errores previos
            limpiarError(elemento);
            
            if (valor === '') {
                mostrarError(elemento, 'Este campo es obligatorio');
                isValid = false;
            } else if (campo.tipo === 'email' && !validarEmail(valor)) {
                mostrarError(elemento, 'Por favor ingresa un email válido');
                isValid = false;
            }
        });

        return isValid;
    }
    
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    function mostrarError(elemento, mensaje) {
        elemento.style.borderColor = '#ff6b6b';
        elemento.style.background = '#fff5f5';
        
        const errorMensaje = document.createElement('div');
        errorMensaje.className = 'error-mensaje';
        errorMensaje.style.cssText = `
            color: #e53e3e;
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
    
    function enviarFormulario() {
        const btnEnviar = document.querySelector('.btn-enviar');
        const textoOriginal = btnEnviar.innerHTML;
        
        // Animación de envío
        btnEnviar.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        btnEnviar.disabled = true;
        btnEnviar.style.opacity = '0.8';
        
        // Simular envío al servidor
        setTimeout(() => {
            mostrarMensajeExito();
            formulario.reset();
            
            // Restaurar botón
            setTimeout(() => {
                btnEnviar.innerHTML = textoOriginal;
                btnEnviar.disabled = false;
                btnEnviar.style.opacity = '1';
            }, 2000);
            
        }, 2000);
    }
    
    function mostrarMensajeExito() {
        const mensajeExito = document.createElement('div');
        mensajeExito.style.cssText = `
            background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 15px;
            margin-top: 2rem;
            text-align: center;
            box-shadow: 0 10px 30px rgba(72, 187, 120, 0.3);
            animation: slideInUp 0.5s ease-out;
        `;
        mensajeExito.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 1rem;">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3 style="margin: 0 0 0.5rem 0; font-family: 'Quicksand', sans-serif;">
                ¡Mensaje enviado con éxito!
            </h3>
            <p style="margin: 0; opacity: 0.9;">
                Te contactaremos dentro de las próximas 24 horas.
            </p>
        `;
        
        formulario.parentNode.insertBefore(mensajeExito, formulario.nextSibling);
        
        // Remover mensaje después de 5 segundos
        setTimeout(() => {
            mensajeExito.style.animation = 'slideOutDown 0.5s ease-in';
            setTimeout(() => {
                if (mensajeExito.parentNode) {
                    mensajeExito.remove();
                }
            }, 500);
        }, 5000);
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