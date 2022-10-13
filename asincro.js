const menubar = document.querySelector(".Menu");
const bar = document.querySelector(".bar");

menubar.addEventListener("click", () => {
  bar.classList.toggle("Menu")
});