const urlServer = "https://66413943a7500fcf1a9fde2e.mockapi.io/animal";

let btns = document.querySelectorAll("a", ".menuLink");
let currentUrl = window.location.href;

for (let btn of btns) {
  if (btn.href === currentUrl) {
    btn.classList.add("active");
    break;
  }
}
