const modeBtn = document.querySelector(".header__dark-mode");
const html = document.querySelector("html");
const body = document.querySelector("body");

const modeFromLocal = localStorage.getItem("mode")
  ? localStorage.getItem("mode")
  : null;

if (modeFromLocal) {
  html.classList.add("dark");
}

modeBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
  modeFromLocal
    ? localStorage.setItem("mode", "")
    : localStorage.setItem("mode", "dark");
});
