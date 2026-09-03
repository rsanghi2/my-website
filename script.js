const circles = document.querySelectorAll(".circle");
const panels = document.querySelectorAll(".panel");

circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    circles.forEach((c) => c.classList.remove("is-active"));
    panels.forEach((p) => p.classList.remove("is-active"));

    circle.classList.add("is-active");
    document.getElementById(circle.dataset.tab).classList.add("is-active");
  });
});
