document.getElementById("portafolio").style.color = "#2196F3";
const active = document.querySelector(".contenedor__botones__boton");

const varieble = active.addEventListener("click", () => {
  active.style.background = "#2196F3";
  document.getElementById("contenedor__botones__boton").style.color = "#ffff";
});
