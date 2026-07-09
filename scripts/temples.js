const menuButton = document.getElementById('menu-button');
const navUl = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
    navUl.classList.toggle('open');
})


const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;