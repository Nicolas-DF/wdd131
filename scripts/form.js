const Year = new Date().getFullYear();
document.getElementById("currentYear").textContent = Year;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;