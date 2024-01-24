const buttonAboutMeEl = document.getElementById("buttonAboutMe");
const optionsAboutMeEl = document.getElementById("aboutMeOption");
const outputAboutMeEl = document.getElementById("outputAboutMe");
buttonAboutMeEl.addEventListener("click", addToAboutMe );
const navEl = document.getElementById("navIsOut");
const bodyEl = document.getElementById("bodyForStyle")
const footEl = document.getElementById("foot")

function addToAboutMe(){
    
    if(optionsAboutMeEl.value == "schoolAndClasses"){
        outputAboutMeEl.innerHTML = "I currently attend Lillestrøm videregående. I take physics 1, IT 1, chemistry 1 and mathematics R1.";
    }
    else if(optionsAboutMeEl.value == "job"){
        outputAboutMeEl.innerHTML = "I work for LUCIA AS, which is an IT company. Position: personal assistant.";
    }
    else if(optionsAboutMeEl.value == "hobby"){
        outputAboutMeEl.innerHTML = "on my free time i bake, crochet or play valorant. however my day to day is usually spent on studying.";
    }
    else if(optionsAboutMeEl.value == "projects"){
        outputAboutMeEl.innerHTML = "other projects can be found by clicking the picture to the left" + "<br>" + "<----" + "<br>" + "or by clicking projects on the bar at the top of the site";
    }
}


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