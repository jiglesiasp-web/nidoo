/* Nidoo — interacciones mínimas
   1) Animación suave al hacer scroll (respeta prefers-reduced-motion)
   2) Año automático en el pie
   3) Cierre del menú al pulsar un enlace (en móvil no hay menú desplegable,
      pero dejamos el scroll suave gestionado por CSS)
*/
(function () {
  "use strict";

  // 1) Revelar elementos al entrar en pantalla
  var animables = document.querySelectorAll(".revelar");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce || !("IntersectionObserver" in window)) {
    animables.forEach(function (el) { el.classList.add("visible"); });
  } else {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    animables.forEach(function (el) { obs.observe(el); });
  }

  // 2) Año actual en el pie
  var y = document.getElementById("anio");
  if (y) { y.textContent = new Date().getFullYear(); }
})();
