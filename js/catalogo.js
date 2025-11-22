// Array de mascotas - Catálogo dinámico
const mascotas = [
    {
        id: 1,
        nombre: "RITA",
        especie: "Perro",
        edad: "6 años",
        genero: "female",
        imagen: "images/1.jpg",
        descripcion: "Hembra, 6 años, 20 kilos. Cariñosa, juguetona y dócil. Le encanta caminar y jugar con la pelota. Sana, vacunada y esterilizada.",
        salud: "Vacunada y esterilizada",
        temperamento: "Cariñosa y juguetona",
        necesidades: "Ejercicio diario",
        contacto: "Área de perros - Sector A"
    },
    {
        id: 2,
        nombre: "HAMBURGUESA",
        especie: "Gato",
        edad: "2 años",
        genero: "male",
        imagen: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop",
        descripcion: "Macho, 2 años, 18 kilos. Activo y cariñoso, ideal para familias con niños. Esterilizado y vacunado.",
        salud: "Esterilizado y vacunado",
        temperamento: "Activo y cariñoso",
        necesidades: "Espacio para jugar",
        contacto: "Área de gatos - Sector B"
    },
    {
        id: 3,
        nombre: "LUNA",
        especie: "Gato",
        edad: "3 años",
        genero: "female",
        imagen: "images/3.avif",
        descripcion: "Hembra, 3 años. Amorosa y curiosa. Le encanta dormir al sol y recibir cariño. Esterilizada y lista para un hogar.",
        salud: "Esterilizada",
        temperamento: "Amorosa y curiosa",
        necesidades: "Ambiente tranquilo",
        contacto: "Área de gatos - Sector C"
    },
    {
        id: 4,
        nombre: "BRUNO",
        especie: "Perro",
        edad: "2 años",
        genero: "male",
        imagen: "images/4.jpg",
        descripcion: "Macho, 2 años. Protector y muy inteligente. Requiere ejercicio diario. Vacunado.",
        salud: "Vacunado",
        temperamento: "Protector e inteligente",
        necesidades: "Ejercicio intenso",
        contacto: "Área de perros - Sector D"
    },
    {
        id: 5,
        nombre: "PEPITO",
        especie: "Cuy",
        edad: "1 año",
        genero: "male",
        imagen: "images/5.webp",
        descripcion: "Macho, 1 año. Cuy sociable y tranquilo. Ideal para espacios pequeños y familias que desean una mascota de bajo mantenimiento.",
        salud: "Saludable",
        temperamento: "Sociable y tranquilo",
        necesidades: "Espacio pequeño",
        contacto: "Área de pequeños - Sector E"
    },
    {
        id: 6,
        nombre: "NUBE",
        especie: "Conejo",
        edad: "6 meses",
        genero: "female",
        imagen: "images/6.jpg",
        descripcion: "Hembra, 6 meses. Conejo dócil y curioso. Necesita espacio para brincar y tiempo para su cuidado. Excelente con niños supervisados.",
        salud: "Saludable",
        temperamento: "Dócil y curioso",
        necesidades: "Espacio para saltar",
        contacto: "Área de conejos - Sector F"
    },
    {
        id: 7,
        nombre: "COCO",
        especie: "Perro",
        edad: "8 años",
        genero: "male",
        imagen: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1200&auto=format&fit=crop",
        descripcion: "Macho, 8 años. Perro mayor, tranquilo y fiel. Perfecto para compañía en hogares tranquilos. Requiere cuidados suaves.",
        salud: "Necesita cuidados especiales",
        temperamento: "Tranquilo y fiel",
        necesidades: "Hogar tranquilo",
        contacto: "Área de seniors - Sector G"
    },
    {
        id: 8,
        nombre: "MIMI",
        especie: "Gato",
        edad: "2 años",
        genero: "female",
        imagen: "images/7.jpg",
        descripcion: "Hembra, 2 años. Gata juguetona y sociable. Le encanta trepar y observar. Esterilizada y con vacunas al día.",
        salud: "Esterilizada y vacunada",
        temperamento: "Juguetona y sociable",
        necesidades: "Rascador y juguetes",
        contacto: "Área de gatos - Sector H"
    },
    {
        id: 9,
        nombre: "TORO",
        especie: "Perro",
        edad: "5 años",
        genero: "male",
        imagen: "images/8.webp",
        descripcion: "Macho, 5 años. Enérgico y fuerte. Requiere dueño con experiencia y tiempo para ejercicio. Muy leal.",
        salud: "Vacunado",
        temperamento: "Enérgico y leal",
        necesidades: "Dueño experimentado",
        contacto: "Área de perros - Sector I"
    },
    {
        id: 10,
        nombre: "BELLA",
        especie: "Gato",
        edad: "1 año",
        genero: "female",
        imagen: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=zzz",
        descripcion: "Hembra, 1 año. Dulce y enérgica. Ideal para familias jóvenes y activas. Le encanta correr.",
        salud: "Vacunada",
        temperamento: "Dulce y enérgica",
        necesidades: "Espacio para jugar",
        contacto: "Área de gatos - Sector J"
    },
    {
        id: 11,
        nombre: "CHISPA",
        especie: "Perro",
        edad: "2 años",
        genero: "female",
        imagen: "https://www.shutterstock.com/image-photo/funny-guinea-pig-smiling-on-600nw-2314991407.jpg",
        descripcion: "Hembra, 2 años. Amigable y curiosa. Muy buena para entornos pequeños y cuidados fáciles.",
        salud: "Saludable",
        temperamento: "Amigable y curiosa",
        necesidades: "Cuidados básicos",
        contacto: "Área de perros - Sector K"
    },
    {
        id: 12,
        nombre: "ROCCO",
        especie: "Perro",
        edad: "3 años",
        genero: "male",
        imagen: "images/10.webp",
        descripcion: "Macho, 3 años. Sociable y juguetón. Se adapta a casas con jardín. Vacunado.",
        salud: "Vacunado",
        temperamento: "Sociable y juguetón",
        necesidades: "Espacio exterior",
        contacto: "Área de perros - Sector L"
    },
    {
        id: 13,
        nombre: "LOLA",
        especie: "Gato",
        edad: "4 años",
        genero: "female",
        imagen: "images/11.avif",
        descripcion: "Hembra, 4 años. Tranquila y cariñosa. Perfecta para departamentos. Esterilizada.",
        salud: "Esterilizada",
        temperamento: "Tranquila y cariñosa",
        necesidades: "Ambiente interior",
        contacto: "Área de gatos - Sector M"
    },
    {
        id: 14,
        nombre: "JUAN CARLOS BODOQUE",
        especie: "Conejo",
        edad: "1 año",
        genero: "male",
        imagen: "images/12.webp",
        descripcion: "Macho, 12 años. Amistoso, ideal para primerizos. Requiere rutina simple.",
        salud: "Saludable",
        temperamento: "Amistoso y tranquilo",
        necesidades: "Rutina estable",
        contacto: "Área de conejos - Sector N"
    },
    {
        id: 15,
        nombre: "HARRY",
        especie: "Gato",
        edad: "2 meses",
        genero: "male",
        imagen: "images/gato2-carrusel.avif",
        descripcion: "Macho, 2 meses. Explorador y cariñoso. Le gusta trepar y cazar juguetes. Vacunado.",
        salud: "Vacunado",
        temperamento: "Explorador y cariñoso",
        necesidades: "Supervisión constante",
        contacto: "Área de gatitos - Sector O"
    },
    {
        id: 16,
        nombre: "DAISY",
        especie: "Perro",
        edad: "5 años",
        genero: "female",
        imagen: "images/14.avif",
        descripcion: "Hembra, 5 años. Muy cariñosa y obediente. Buena con niños. Esterilizada y con vacunas.",
        salud: "Esterilizada y vacunada",
        temperamento: "Cariñosa y obediente",
        necesidades: "Familia activa",
        contacto: "Área de perros - Sector P"
    },
    {
        id: 17,
        nombre: "REX",
        especie: "Perro",
        edad: "6 años",
        genero: "male",
        imagen: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
        descripcion: "Macho, 6 años. Calmado y protector. Requiere hogar con espacio exterior. Vacunado.",
        salud: "Vacunado",
        temperamento: "Calmado y protector",
        necesidades: "Espacio exterior",
        contacto: "Área de perros - Sector Q"
    },
    {
        id: 18,
        nombre: "MAYA",
        especie: "Gato",
        edad: "1 año",
        genero: "female",
        imagen: "images/15.jpg",
        descripcion: "Hembra, 1 año. Juguetona y tranquila. Se adapta a personas que trabajan desde casa. Esterilizada.",
        salud: "Esterilizada",
        temperamento: "Juguetona y tranquila",
        necesidades: "Compañía regular",
        contacto: "Área de gatos - Sector R"
    },
    {
        id: 19,
        nombre: "PIP",
        especie: "Gato",
        edad: "1 año",
        genero: "male",
        imagen: "images/16.jpg",
        descripcion: "Macho, 1 año. Pequeña minina, tranquila y fácil de cuidar. Ideal como primera mascota para niños responsables.",
        salud: "Saludable",
        temperamento: "Tranquila y fácil",
        necesidades: "Cuidados básicos",
        contacto: "Área de gatos - Sector S"
    },
    {
        id: 20,
        nombre: "HECTOR",
        especie: "Perro",
        edad: "7 años",
        genero: "male",
        imagen: "images/17.png",
        descripcion: "Macho, 7 años. Paciente y sabio, ideal para compañía. Requiere visitas regulares al veterinario por edad.",
        salud: "Cuidados geriátricos",
        temperamento: "Paciente y sabio",
        necesidades: "Atención veterinaria",
        contacto: "Área de seniors - Sector T"
    },
    {
        id: 21,
        nombre: "KIKI",
        especie: "Conejo",
        edad: "8 meses",
        genero: "female",
        imagen: "images/18.jpg",
        descripcion: "Hembra, 8 meses. Coneja cariñosa, requiere hogar con tiempo para socializar. Excelente con niños supervisados.",
        salud: "Saludable",
        temperamento: "Cariñosa y social",
        necesidades: "Socialización diaria",
        contacto: "Área de conejos - Sector U"
    },
    {
        id: 22,
        nombre: "MILO",
        especie: "Gato",
        edad: "4 años",
        genero: "male",
        imagen: "images/19.jpg",
        descripcion: "Macho, 4 años. Sereno y afectuoso. Le gusta acurrucarse en lapsos tranquilos. Vacunado.",
        salud: "Vacunado",
        temperamento: "Sereno y afectuoso",
        necesidades: "Ambiente calmado",
        contacto: "Área de gatos - Sector V"
    },
    {
        id: 23,
        nombre: "MAX",
        especie: "Perro",
        edad: "3 años",
        genero: "male",
        imagen: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1200&auto=format&fit=crop",
        descripcion: "Macho, 3 años. Labrador mix, muy amigable y juguetón. Perfecto para familias con niños. Adora el agua.",
        salud: "Esterilizado y vacunado",
        temperamento: "Amigable y juguetón",
        necesidades: "Ejercicio regular",
        contacto: "Área de perros - Sector W"
    }
];

// ===== LOCALSTORAGE FUNCTIONS =====
function inicializarLocalStorage() {
    console.log("🔧 Inicializando localStorage...");
    
    // Guardar mascotas si no existen
    if (!localStorage.getItem('mascotas')) {
        localStorage.setItem('mascotas', JSON.stringify(mascotas));
        console.log("✅ Mascotas guardadas en localStorage");
    }
    
    // Inicializar favoritos si no existen
    if (!localStorage.getItem('favoritos')) {
        localStorage.setItem('favoritos', JSON.stringify([]));
        console.log("✅ Favoritos inicializados");
    }
    
    // Inicializar solicitudes si no existen
    if (!localStorage.getItem('solicitudesAdopcion')) {
        localStorage.setItem('solicitudesAdopcion', JSON.stringify([]));
        console.log("✅ Solicitudes inicializadas");
    }
    
    // Inicializar likes si no existen
    if (!localStorage.getItem('mascotasLikes')) {
        const likesIniciales = {};
        mascotas.forEach(mascota => {
            likesIniciales[mascota.id] = 0;
        });
        localStorage.setItem('mascotasLikes', JSON.stringify(likesIniciales));
        console.log("✅ Likes inicializados");
    }
    
    // Inicializar formularios guardados
    if (!localStorage.getItem('formulariosPendientes')) {
        localStorage.setItem('formulariosPendientes', JSON.stringify({}));
        console.log("✅ Formularios pendientes inicializados");
    }
    
    // Inicializar contador de adopciones
    if (!localStorage.getItem('totalAdopciones')) {
        localStorage.setItem('totalAdopciones', '0');
        console.log("✅ Contador de adopciones inicializado");
    }
    
    console.log("📊 Estado actual del localStorage:");
    console.log("- Favoritos:", obtenerFavoritos());
    console.log("- Total adopciones:", obtenerTotalAdopciones());
}

function obtenerMascotas() {
    const mascotasGuardadas = JSON.parse(localStorage.getItem('mascotas'));
    return mascotasGuardadas || mascotas;
}

function obtenerFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    console.log("📋 Favoritos obtenidos:", favoritos);
    return favoritos;
}

function guardarFavorito(mascotaId) {
    const favoritos = obtenerFavoritos();
    if (!favoritos.includes(mascotaId)) {
        favoritos.push(mascotaId);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        console.log("❤️ Favorito guardado:", mascotaId, "Total:", favoritos);
        return true;
    }
    return false;
}

function eliminarFavorito(mascotaId) {
    let favoritos = obtenerFavoritos();
    const initialLength = favoritos.length;
    favoritos = favoritos.filter(id => id !== mascotaId);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    console.log("💔 Favorito eliminado:", mascotaId, "Restantes:", favoritos.length);
    return initialLength !== favoritos.length;
}

function obtenerMascotasFavoritas() {
    const favoritos = obtenerFavoritos();
    const todasMascotas = obtenerMascotas();
    const mascotasFavoritas = todasMascotas.filter(mascota => 
        favoritos.includes(mascota.id)
    );
    console.log("🐾 Mascotas favoritas encontradas:", mascotasFavoritas.length);
    return mascotasFavoritas;
}

function obtenerLikes() {
    return JSON.parse(localStorage.getItem('mascotasLikes')) || {};
}

function guardarLike(mascotaId) {
    const likes = obtenerLikes();
    if (!likes[mascotaId]) {
        likes[mascotaId] = 0;
    }
    likes[mascotaId]++;
    localStorage.setItem('mascotasLikes', JSON.stringify(likes));
    return likes[mascotaId];
}

function obtenerLikesMascota(mascotaId) {
    const likes = obtenerLikes();
    return likes[mascotaId] || 0;
}

// ===== PERSISTENCIA DE FORMULARIOS =====
function guardarFormularioPendiente(mascotaId, formData) {
    const formularios = JSON.parse(localStorage.getItem('formulariosPendientes')) || {};
    formularios[mascotaId] = formData;
    localStorage.setItem('formulariosPendientes', JSON.stringify(formularios));
    console.log("💾 Formulario guardado para mascota:", mascotaId);
}

function obtenerFormularioPendiente(mascotaId) {
    const formularios = JSON.parse(localStorage.getItem('formulariosPendientes')) || {};
    return formularios[mascotaId] || null;
}

function eliminarFormularioPendiente(mascotaId) {
    const formularios = JSON.parse(localStorage.getItem('formulariosPendientes')) || {};
    if (formularios[mascotaId]) {
        delete formularios[mascotaId];
        localStorage.setItem('formulariosPendientes', JSON.stringify(formularios));
        console.log("🗑️ Formulario eliminado para mascota:", mascotaId);
    }
}

function guardarSolicitudAdopcion(solicitud) {
    const solicitudes = JSON.parse(localStorage.getItem('solicitudesAdopcion')) || [];
    solicitud.id = Date.now();
    solicitud.fecha = new Date().toLocaleString();
    solicitudes.push(solicitud);
    localStorage.setItem('solicitudesAdopcion', JSON.stringify(solicitudes));
    
    // Actualizar contador total de adopciones
    const totalAdopciones = parseInt(localStorage.getItem('totalAdopciones') || '0') + 1;
    localStorage.setItem('totalAdopciones', totalAdopciones.toString());
    
    // Eliminar formulario pendiente si existe
    eliminarFormularioPendiente(solicitud.mascotaId);
    
    console.log("📨 Solicitud guardada:", solicitud.id);
    return solicitud.id;
}

function obtenerTotalAdopciones() {
    return parseInt(localStorage.getItem('totalAdopciones') || '0');
}

// ===== GENERAR CATÁLOGO =====
function generarCatalogo(mascotasFiltradas = obtenerMascotas()) {
    const contenedor = document.getElementById('catalogoMascotas');
    const favoritos = obtenerFavoritos();
    const likes = obtenerLikes();

    if (mascotasFiltradas.length === 0) {
        contenedor.innerHTML = `
            <div class="sin-resultados">
                <i class="fas fa-paw" style="font-size: 3rem; color: #795548; margin-bottom: 1rem;"></i>
                <h3>No se encontraron mascotas</h3>
                <p>Intenta con otros filtros o revisa más tarde.</p>
            </div>
        `;
        return;
    }

    contenedor.innerHTML = mascotasFiltradas.map(mascota => {
        const likeCount = likes[mascota.id] || 0;
        const esFavorito = favoritos.includes(mascota.id);
        
        return `
        <article class="card ${mascota.genero}" tabindex="0" data-id="${mascota.id}" data-especie="${mascota.especie}">
            <div class="media">
                <img src="${mascota.imagen}" alt="${mascota.nombre} - ${mascota.especie}" loading="lazy">
                <div class="overlay">
                    <h2>${mascota.nombre}</h2>
                    <h3>ADOPTA</h3>
                    <p>${mascota.descripcion}</p>
                    <div class="like-counter">
                        <i class="fas fa-heart"></i>
                        <span>${likeCount} me gusta</span>
                    </div>
                </div>
            </div>
            <div class="meta">
                <div class="left">
                    <div class="species">${mascota.especie}</div>
                    <div class="age">${mascota.edad}</div>
                </div>
                <div class="actions">
                    <button class="btn like-btn" onclick="darLike(${mascota.id})" title="Me gusta">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="btn favorito ${esFavorito ? 'activo' : ''}" 
                            onclick="toggleFavorito(${mascota.id})" title="${esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}">
                        <i class="fas fa-star"></i>
                    </button>
                    <button class="btn primary" onclick="mostrarFormularioAdopcion(${mascota.id})">Adoptar</button>
                    
                    <button class="btn ghost" onclick="mostrarDetalles(${mascota.id})">Detalles</button>
                </div>
            </div>
        </article>
        `;
    }).join('');



    // Actualizar contador
    document.getElementById('contador').textContent = mascotasFiltradas.length;
    
    // Actualizar estadísticas
    actualizarEstadisticas();
}

// ===== FUNCIONES PRINCIPALES =====
function darLike(mascotaId) {
    const nuevoCount = guardarLike(mascotaId);
    mostrarNotificacion(`¡Like agregado! Total: ${nuevoCount}`, 'success');
    generarCatalogo();
}

function toggleFavorito(mascotaId) {
    const favoritos = obtenerFavoritos();
    const esFavorito = favoritos.includes(mascotaId);

    if (esFavorito) {
        if (eliminarFavorito(mascotaId)) {
            mostrarNotificacion('Removido de favoritos', 'info');
            // Si estamos en la vista de favoritos, actualizar
            if (document.querySelector('.filtro-btn[data-filter="favoritos"]')?.classList.contains('active')) {
                mostrarFavoritos();
            }
        }
    } else {
        if (guardarFavorito(mascotaId)) {
            mostrarNotificacion('Agregado a favoritos', 'success');
        }
    }

    generarCatalogo();
}

function mostrarFavoritos() {
    const mascotasFavoritas = obtenerMascotasFavoritas();
    if (mascotasFavoritas.length === 0) {
        document.getElementById('catalogoMascotas').innerHTML = `
            <div class="sin-resultados">
                <i class="fas fa-star" style="font-size: 3rem; color: #795548; margin-bottom: 1rem;"></i>
                <h3>No tienes mascotas favoritas</h3>
                <p>Agrega algunas mascotas a tus favoritos haciendo clic en la estrella ★</p>
            </div>
        `;
        document.getElementById('contador').textContent = '0';
    } else {
        generarCatalogo(mascotasFavoritas);
    }
}

function mostrarDetalles(mascotaId) {
    const mascotasData = obtenerMascotas();
    const mascota = mascotasData.find(m => m.id === mascotaId);
    if (!mascota) return;

    const likesCount = obtenerLikesMascota(mascotaId);
    const modal = document.getElementById('modalDetalles');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="mascota-detalles">
            <div class="mascota-imagen">
                <img src="${mascota.imagen}" alt="${mascota.nombre}">
                <div class="estadisticas">
                    <div class="estadistica-item">
                        <i class="fas fa-heart"></i>
                        <span>${likesCount} me gusta</span>
                    </div>
                </div>
            </div>
            <div class="mascota-info">
                <h2>${mascota.nombre}</h2>
                <span class="mascota-especie">${mascota.especie}</span>
                <p class="mascota-descripcion">${mascota.descripcion}</p>
                
                <div class="mascota-caracteristicas">
                    <div class="caracteristica">
                        <i class="fas fa-venus-mars"></i>
                        <span>Género: ${mascota.genero === 'male' ? 'Macho' : mascota.genero === 'female' ? 'Hembra' : 'Otro'}</span>
                    </div>
                    <div class="caracteristica">
                        <i class="fas fa-birthday-cake"></i>
                        <span>Edad: ${mascota.edad}</span>
                    </div>
                    <div class="caracteristica">
                        <i class="fas fa-heartbeat"></i>
                        <span>Salud: ${mascota.salud}</span>
                    </div>
                    <div class="caracteristica">
                        <i class="fas fa-brain"></i>
                        <span>Temperamento: ${mascota.temperamento}</span>
                    </div>
                    <div class="caracteristica">
                        <i class="fas fa-home"></i>
                        <span>Necesidades: ${mascota.necesidades}</span>
                    </div>
                    <div class="caracteristica">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Ubicación: ${mascota.contacto}</span>
                    </div>
                </div>
                
                <div class="actions-detalles">
                    <button class="btn like-btn" onclick="darLike(${mascota.id})">
                        <i class="fas fa-heart"></i> Me gusta (${likesCount})
                    </button>
                    <button class="btn favorito ${obtenerFavoritos().includes(mascota.id) ? 'activo' : ''}" 
                            onclick="toggleFavorito(${mascota.id})">
                        <i class="fas fa-star"></i> ${obtenerFavoritos().includes(mascota.id) ? 'Quitar favorito' : 'Agregar favorito'}
                    </button>
                    <button class="btn primary" onclick="mostrarFormularioAdopcion(${mascota.id})">
                        <i class="fas fa-paw"></i> Adoptar
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'block';
}
// toggleFavorito (versión sencilla que usa localStorage y SweetAlert2)
function toggleFavorito(id) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const mascota = mascotas.find(m => m.id === id);

    const esFavorito = favoritos.includes(id);

    if (esFavorito) {
        // Quitar
        const index = favoritos.indexOf(id);
        favoritos.splice(index, 1);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));

        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "info",
            title: `${mascota.nombre} eliminado de favoritos`,
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        // Agregar
        favoritos.push(id);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));

        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: `${mascota.nombre} agregado a favoritos`,
            showConfirmButton: false,
            timer: 1500
        });
    }

    // <-- Aquí estaba mostrarMascotas(); lo corregimos a generarCatalogo()
    generarCatalogo();
}

// darLike (usa tu función guardarLike y luego refresca con generarCatalogo)
function darLike(id) {
    const nuevoCount = guardarLike(id);

    Swal.fire({
        toast: true,
        position: "bottom-end",
        icon: "success",
        title: `Has dado like. Total: ${nuevoCount}`,
        showConfirmButton: false,
        timer: 1200
    });

    // refrescar el catálogo para mostrar el nuevo conteo
    generarCatalogo();
}


function mostrarFormularioAdopcion(mascotaId) {
    const mascotasData = obtenerMascotas();
    const mascota = mascotasData.find(m => m.id === mascotaId);
    if (!mascota) return;

    const modal = document.getElementById('modalAdopcion');
    const modalBody = document.getElementById('modalAdopcionBody');

    // Cargar datos guardados del formulario
    const formularioGuardado = obtenerFormularioPendiente(mascotaId);

    modalBody.innerHTML = `
        <h2 style="font-family: 'Poppins', sans-serif; color: #1e293b; margin-bottom: 20px;">
            <i class="fas fa-paw"></i> Adoptar a ${mascota.nombre}
        </h2>
        
        <div class="estadisticas-adopcion">
            <p>
                <i class="fas fa-chart-line"></i> 
                Total de adopciones realizadas: <strong>${obtenerTotalAdopciones()}</strong>
            </p>
            ${formularioGuardado ? '<p class="formulario-guardado"><i class="fas fa-save"></i> Tienes un formulario guardado</p>' : ''}
        </div>
        
        <form class="form-adopcion" id="formAdopcion${mascotaId}" onsubmit="enviarSolicitudAdopcion(event, ${mascotaId})">
            <input type="hidden" name="mascotaId" value="${mascota.id}">
            <input type="hidden" name="mascotaNombre" value="${mascota.nombre}">
            
            <div class="form-group">
                <label for="nombre${mascotaId}">Nombre completo *</label>
                <input type="text" id="nombre${mascotaId}" name="nombre" value="${formularioGuardado?.nombre || ''}" required>
            </div>
            
            <div class="form-group">
                <label for="email${mascotaId}">Email *</label>
                <input type="email" id="email${mascotaId}" name="email" value="${formularioGuardado?.email || ''}" required>
            </div>
            
            <div class="form-group">
                <label for="telefono${mascotaId}">Teléfono *</label>
                <input type="tel" id="telefono${mascotaId}" name="telefono" value="${formularioGuardado?.telefono || ''}" required>
            </div>
            
            <div class="form-group">
                <label for="direccion${mascotaId}">Dirección *</label>
                <input type="text" id="direccion${mascotaId}" name="direccion" value="${formularioGuardado?.direccion || ''}" required>
            </div>
            
            <div class="form-group">
                <label for="vivienda${mascotaId}">Tipo de vivienda *</label>
                <select id="vivienda${mascotaId}" name="vivienda" required>
                    <option value="">Selecciona...</option>
                    <option value="casa" ${formularioGuardado?.vivienda === 'casa' ? 'selected' : ''}>Casa con patio</option>
                    <option value="casa_sin_patio" ${formularioGuardado?.vivienda === 'casa_sin_patio' ? 'selected' : ''}>Casa sin patio</option>
                    <option value="departamento" ${formularioGuardado?.vivienda === 'departamento' ? 'selected' : ''}>Departamento</option>
                    <option value="otro" ${formularioGuardado?.vivienda === 'otro' ? 'selected' : ''}>Otro</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="experiencia${mascotaId}">¿Tienes experiencia con mascotas? *</label>
                <select id="experiencia${mascotaId}" name="experiencia" required>
                    <option value="">Selecciona...</option>
                    <option value="si" ${formularioGuardado?.experiencia === 'si' ? 'selected' : ''}>Sí, mucha experiencia</option>
                    <option value="algo" ${formularioGuardado?.experiencia === 'algo' ? 'selected' : ''}>Algo de experiencia</option>
                    <option value="poca" ${formularioGuardado?.experiencia === 'poca' ? 'selected' : ''}>Poca experiencia</option>
                    <option value="ninguna" ${formularioGuardado?.experiencia === 'ninguna' ? 'selected' : ''}>Ninguna experiencia</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="motivo${mascotaId}">¿Por qué quieres adoptar a ${mascota.nombre}? *</label>
                <textarea id="motivo${mascotaId}" name="motivo" rows="4" required>${formularioGuardado?.motivo || ''}</textarea>
            </div>
            
            <div class="form-actions">
                <button type="button" class="btn ghost" onclick="guardarFormularioActual(${mascotaId})">
                    <i class="fas fa-save"></i> Guardar y continuar después
                </button>
                <button type="submit" class="btn-enviar">
                    <i class="fas fa-paper-plane"></i> Enviar Solicitud
                </button>
            </div>
        </form>
    `;

    // Agregar evento para guardar automáticamente al cambiar campos
    const form = document.getElementById(`formAdopcion${mascotaId}`);
    form.addEventListener('input', () => {
        guardarFormularioDesdeEvento(mascotaId);
    });

    modal.style.display = 'block';
}

function guardarFormularioDesdeEvento(mascotaId) {
    const form = document.getElementById(`formAdopcion${mascotaId}`);
    if (!form) return;

    const formData = {
        nombre: form.nombre.value,
        email: form.email.value,
        telefono: form.telefono.value,
        direccion: form.direccion.value,
        vivienda: form.vivienda.value,
        experiencia: form.experiencia.value,
        motivo: form.motivo.value
    };

    // Solo guardar si hay al menos un campo completado
    const hayDatos = Object.values(formData).some(valor => valor.trim() !== '');
    if (hayDatos) {
        guardarFormularioPendiente(mascotaId, formData);
    }
}

function guardarFormularioActual(mascotaId) {
    const form = document.getElementById(`formAdopcion${mascotaId}`);
    if (!form) return;

    const formData = {
        nombre: form.nombre.value,
        email: form.email.value,
        telefono: form.telefono.value,
        direccion: form.direccion.value,
        vivienda: form.vivienda.value,
        experiencia: form.experiencia.value,
        motivo: form.motivo.value
    };

    guardarFormularioPendiente(mascotaId, formData);
    mostrarNotificacion('Formulario guardado. Puedes continuar más tarde.', 'success');
    cerrarModal('modalAdopcion');
}

function enviarSolicitudAdopcion(event, mascotaId) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const solicitud = {
        mascotaId: mascotaId,
        mascotaNombre: formData.get('mascotaNombre'),
        nombre: formData.get('nombre'),
        email: formData.get('email'),
        telefono: formData.get('telefono'),
        direccion: formData.get('direccion'),
        vivienda: formData.get('vivienda'),
        experiencia: formData.get('experiencia'),
        motivo: formData.get('motivo')
    };

    const solicitudId = guardarSolicitudAdopcion(solicitud);

    // Mostrar notificación con estadísticas
    const totalAdopciones = obtenerTotalAdopciones();
    mostrarNotificacion(
        `¡Solicitud #${solicitudId} enviada! Total de adopciones: ${totalAdopciones}. Te contactaremos pronto.`, 
        'success'
    );

    cerrarModal('modalAdopcion');
    event.target.reset();
}

function actualizarEstadisticas() {
    const totalAdopciones = obtenerTotalAdopciones();
    const totalFavoritos = obtenerFavoritos().length;
    
    console.log(` Estadísticas - Adopciones: ${totalAdopciones}, Favoritos: ${totalFavoritos}`);
}

// ===== UTILIDADES =====
function mostrarNotificacion(mensaje, tipo = 'success') {
    let notificacion = document.getElementById('notificacion');
    if (!notificacion) {
        notificacion = document.createElement('div');
        notificacion.id = 'notificacion';
        notificacion.className = 'notificacion';
        document.body.appendChild(notificacion);
    }

    notificacion.textContent = mensaje;
    notificacion.className = `notificacion ${tipo === 'error' ? 'error' : ''}`;
    notificacion.style.display = 'block';

    setTimeout(() => {
        notificacion.style.display = 'none';
    }, 4000);
}

function cerrarModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// ===== INICIALIZACIÓN =====
function inicializarApp() {
    console.log(" Iniciando aplicación...");
    inicializarLocalStorage();
    
    // Agregar filtro de favoritos
    const filtrosContainer = document.querySelector('.filtros');
    if (filtrosContainer && !document.querySelector('.filtro-btn[data-filter="favoritos"]')) {
        const favoritosBtn = document.createElement('button');
        favoritosBtn.className = 'filtro-btn';
        favoritosBtn.setAttribute('data-filter', 'favoritos');
        favoritosBtn.innerHTML = '<i class="fas fa-star"></i> Favoritos';
        filtrosContainer.appendChild(favoritosBtn);
    }

    generarCatalogo();

    // Configurar filtros
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const filtro = e.target.getAttribute('data-filter');
            
            if (filtro === 'favoritos') {
                mostrarFavoritos();
            } else {
                filtrarMascotas(filtro);
            }
        });
    });

    // Configurar cierre de modales
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Guardar estado antes de cerrar la página
    window.addEventListener('beforeunload', () => {
        console.log("💾 Guardando estado antes de cerrar...");
    });

    console.log("✅ Aplicación inicializada correctamente");
}

// Filtrar mascotas
function filtrarMascotas(especie) {
    const mascotasData = obtenerMascotas();
    if (especie === 'todos') {
        generarCatalogo(mascotasData);
    } else {
        const mascotasFiltradas = mascotasData.filter(m => m.especie === especie);
        generarCatalogo(mascotasFiltradas);
    }
}

document.addEventListener('DOMContentLoaded', inicializarApp);

