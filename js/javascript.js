

const opcion = document.getElementById("opcion4");
const menu = document.getElementById("menu");

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