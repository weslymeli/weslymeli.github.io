// =========================================================
// Carrusel: cada proyecto muestra sus pantallazos uno a uno.
// No necesitas cambiar nada aquí: solo agrega o quita <img> en el HTML.
// =========================================================

const carruseles = document.querySelectorAll(".carrusel");

carruseles.forEach(function (carrusel) {
  const imagenes = carrusel.querySelectorAll("img");
  let actual = 0;

  function mostrar(posicion) {
    imagenes[actual].classList.remove("activa");
    // Si se pasa del final vuelve al inicio, y al revés
    actual = (posicion + imagenes.length) % imagenes.length;
    imagenes[actual].classList.add("activa");
  }

  carrusel.querySelector(".siguiente").addEventListener("click", function () {
    mostrar(actual + 1);
  });
  carrusel.querySelector(".anterior").addEventListener("click", function () {
    mostrar(actual - 1);
  });

  // Cambia solo cada 4 segundos. Si no lo quieres, borra estas 3 líneas.
  setInterval(function () {
    mostrar(actual + 1);
  }, 4000);
});

// El año del pie de página se actualiza solo
document.getElementById("anio").textContent = new Date().getFullYear();
