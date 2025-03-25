import DropdownMenu from "./menu.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    new DropdownMenu(".dropdown-menu", ".dropdown-hide");
  } catch (error) {
    console.error("Erro ao inicializar o menu suspenso:", error);
  }
});
// console.log("Evento disparado:");
// window.alert("pego");
