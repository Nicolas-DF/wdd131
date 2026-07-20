const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastmodified").textContent = lastModified;


const temperature = 25;
const windSpeed = 10;

function calculateWindChill(temp, wind) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16))
};

if (temperature <= 10 && windSpeed > 4.8){
    const windChill = calculateWindChill(temperature, windSpeed)
    document.getElementById("windChill").textContent = '${windChill.toFixed(1)}°C';
} else {
    document.getElementById("windChill").textContent = "N/A";
}