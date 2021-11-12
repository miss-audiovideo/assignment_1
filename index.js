const btn = document.querySelector("#navBtn");
const toggle = document.querySelector("#navToggle");
const items = document.querySelectorAll(".NavItem");

btn.addEventListener("click", () => {
  toggle.classList.toggle("Nav-Toggle");
  if (toggle.classList.contains("Nav-Toggle")) {
    items[0].style.display = "block";
    items[1].style.display = "block";
    items[2].style.display = "block";
  } else {
    items[0].style.display = "none";
    items[1].style.display = "none";
    items[2].style.display = "none";
  }
});
