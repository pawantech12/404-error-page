let hamburgerbtn = document.querySelector(".hamburger");
let nav_list = document.querySelector(".nav-list");
hamburgerbtn.addEventListener("click", () => {
  hamburgerbtn.classList.toggle("active");
  nav_list.classList.toggle("active");
});
