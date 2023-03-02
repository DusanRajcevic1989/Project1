let darkToggle = document.querySelector("#toggle-dark-mode");

darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
