// === ANIMACIÓN DE APARICIÓN SUAVE ===
document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".narracion, .foto, .chat, h1");

  elementos.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.8s ease";

    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 300 + index * 150);
  });
});

// === EFECTO BOTÓN ===
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
    btn.style.boxShadow = "0 0 20px #ff4d6d";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "none";
  });
});

// === TRANSICIÓN ENTRE PÁGINAS ===
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href && href.endsWith(".html")) {
      e.preventDefault();
      document.body.style.opacity = 0;

      setTimeout(() => {
        window.location.href = href;
      }, 400);
    }
  });
});

// === LATIDO SUAVE DEL TÍTULO ===
const titulo = document.querySelector("h1");
if (titulo) {
  setInterval(() => {
    titulo.style.textShadow = "0 0 20px #ff4d6d";
    setTimeout(() => {
      titulo.style.textShadow = "none";
    }, 600);
  }, 2000);
}
