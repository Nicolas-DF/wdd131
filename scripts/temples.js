const menuButton = document.getElementById('menu-button');
const navUl = document.querySelector('nav ul');

menuButton.addEventListener("click", () => {
    navUl.classList.toggle("open");

    if (navUl.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});


const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;