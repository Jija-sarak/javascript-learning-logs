const div = document.getElementById("page");
div.classList.add("light-mode");

const btn = document.getElementById("toggleBtn");

btn.addEventListener("click", () => {
    div.classList.toggle("light-mode");
    div.classList.toggle("dark-mode");
});