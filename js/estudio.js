
document.getElementById("estudio").style.color = "#2196F3";
const openModal = document.querySelector(".seccion__boton");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".cerrar");


openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal--show");
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal--show");
});
