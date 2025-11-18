

const opcion = document.getElementById("opcion4");
const menu = document.getElementById("menu");
const btnArriba = document.getElementById('btn-arriba');

opcion.addEventListener("click", () => {
  const abierto = menu.style.display === "block";
  menu.style.display = abierto ? "none" : "block";
  opcion.classList.toggle("activo", !abierto);
});

// Si se hace clic fuera, se cierra todo
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !opcion.contains(e.target)) {
    menu.style.display = "none";
    opcion.classList.remove("activo");
  }
});



//para ocultar el boton de la flechita arriba
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { 
    btnArriba.classList.add('visible');
  } else {
    btnArriba.classList.remove('visible');
  }
});