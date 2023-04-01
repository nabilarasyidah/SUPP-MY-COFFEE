const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = document.querySelector(".mode-text");
const switchh = document.querySelector(".switch");
const aturPengiriman = document.querySelectorAll(".btn-atur");
console.log(aturPengiriman);


toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerHTML = "Light Mode"
  } else {
    modeText.innerHTML = "Dark Mode"
  }
});

$(document).ready(function () {
  $('#example').DataTable();
});

aturPengiriman.forEach((x) => {
  x.addEventListener("click", () => {
    if (x.innerHTML == "Atur Pengiriman") {
      x.classList.toggle("btn-secondary")
      x.innerHTML = "Batal"
    } else {
      x.classList.toggle("btn-secondary")
      x.innerHTML = "Atur Pengiriman"
    }
    x.parentNode.querySelector(".form-group").classList.toggle("d-none");
  });
})

