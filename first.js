
const navEl = document.getElementById("navIsOut");
const bodyEl = document.getElementById("bodyForStyle")
const footEl = document.getElementById("foot")


function toggleDarkMode() {
    bodyEl.classList.toggle("darkmode");
    footEl.classList.toggle("darkModeFoot");
    navEl.classList.toggle("darkModeNav");
}

function togglePinkMode() {
    bodyEl.classList.toggle("pinkmode");
    footEl.classList.toggle("pinkModeFoot");
    navEl.classList.toggle("pinkModeNav");
}