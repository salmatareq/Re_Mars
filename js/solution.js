const stages = document.querySelectorAll(".stage");

stages.forEach((stage) => {
  stage.addEventListener("click", () => {
    stages.forEach((s) => s.classList.remove("active"));
    stage.classList.add("active");
  });
});
const links = document.querySelectorAll("nav a");
links.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});