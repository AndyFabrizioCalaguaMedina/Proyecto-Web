// Menú hamburguesa 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar ul');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.navbar li a').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Carrusel - SOLO SI EXISTE
document.addEventListener('DOMContentLoaded', function() {
    const carrusel = document.querySelector('.carrusel');
    if (!carrusel) return; // Salir si no hay carrusel

    //  carrusel aquí...
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carrusel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carrusel-btn.prev');
    const nextBtn = document.querySelector('.carrusel-btn.next');

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        if (n >= slides.length) currentSlide = 0;
        else if (n < 0) currentSlide = slides.length - 1;
        else currentSlide = n;
        
        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    setInterval(() => showSlide(currentSlide + 1), 5000);
    showSlide(currentSlide);
});

/* ===========================================================
   SISTEMA DE LOGIN / LOGOUT USANDO LOCALSTORAGE
   =========================================================== */

const btnLoginLogout = document.getElementById("btnLoginLogout");
const modalLogin = document.getElementById("modalLogin");
const btnCerrarLogin = document.getElementById("btnCerrarLogin");
const btnIngresar = document.getElementById("btnIngresar");

// --- ABRIR LOGIN ---
if (btnLoginLogout) {
    btnLoginLogout.addEventListener("click", () => {

        // Si ya se inició sesión  esto sera CERRAR SESIÓN
        const usuario = localStorage.getItem("usuario");

        if (usuario) {
            // Cerrar sesión
            localStorage.removeItem("usuario");
            alert("Sesión cerrada");
            location.reload();
            return;
        }

        // Si no hay sesión → abrir login
        modalLogin.style.display = "flex";
    });
}

// --- CERRAR MODAL ---
if (btnCerrarLogin) {
    btnCerrarLogin.addEventListener("click", () => {
        modalLogin.style.display = "none";
    });
}

// --- VALIDAR LOGIN ---
if (btnIngresar) {
    btnIngresar.addEventListener("click", () => {
        const user = document.getElementById("userLogin").value;
        const pass = document.getElementById("passLogin").value;

        if (user === "admin" && pass === "admin123") {
            localStorage.setItem("usuario", "admin");
            alert("Inicio de sesión exitoso");
            location.reload();
        } else {
            document.getElementById("loginError").style.display = "block";
        }
    });
}

// --- CAMBIAR BOTÓN LOGIN LOGOUT ---
window.addEventListener("load", () => {
    const usuario = localStorage.getItem("usuario");

    if (usuario) {
        btnLoginLogout.textContent = "Cerrar Sesión";
        btnLoginLogout.style.background = "#c0392b";
    }
});






