const pagination1 = document.getElementById("pagination1");
const pagination2 = document.getElementById("pagination2");
const pagination3 = document.getElementById("pagination3");
const pagination4 = document.getElementById("pagination4");
const pagination5 = document.getElementById("pagination5");
const arrowRight = document.querySelector(".about__arrow_right");
const arrowLeft = document.querySelector(".about__arrow_left");
const pagination = document.querySelector(".about_pagination");
const carusel = document.querySelector(".slider__inner"); 

function setEnable(){
    const inputs = [...document.querySelectorAll(".about_pagination input")];
    inputs.forEach( item => item.disabled = false) 
}

function setClass(name){
    carusel.className = "slider__inner " + name;
}

function setClassArrow(name, pagination){
    setClass(name);
    pagination.disabled = true;
    pagination.checked = true;
}

function AR(){
    if(carusel.classList.contains("right")){
        return;
    }
    setEnable();
    arrowLeft.addEventListener("click", AL);
    arrowLeft.classList.remove("about__arrow_passive");
    if(carusel.classList.contains("left")){
        setClassArrow("two", pagination2);
        return;
    }
    if(carusel.classList.contains("two")){
        setClassArrow("center", pagination3);
        return;
    }
    if(carusel.classList.contains("center")){
        setClassArrow("four", pagination4);
        return;
    }
    if(carusel.classList.contains("four")){
        arrowRight.classList.add("about__arrow_passive");
        arrowRight.removeEventListener("click", AR);
        setClassArrow("right", pagination5);
        return;
    }
}

function AL(){
    if(carusel.classList.contains("left")){
        return;
    }
    setEnable();
    arrowRight.classList.remove("about__arrow_passive");
    arrowRight.addEventListener("click", AR);
    if(carusel.classList.contains("right")){
        setClassArrow("four", pagination4);
        return;
    }
    if(carusel.classList.contains("four")){
        setClassArrow("center", pagination3);
        return;
    }
    if(carusel.classList.contains("center")){
        setClassArrow("two", pagination2);
        return;
    }
    if(carusel.classList.contains("two")){
        arrowLeft.removeEventListener("click", AL);
        arrowLeft.classList.add("about__arrow_passive");
        setClassArrow("left", pagination1);
        return;
    }
}

function handler(e){
    if(e.target.name === "about__radio"){
        setEnable();
        arrowLeft.classList.remove("about__arrow_passive");
        arrowRight.classList.remove("about__arrow_passive");
        e.target.disabled = true;

        if(e.target.id === "pagination1"){
            setClass("left"); 
            arrowLeft.classList.add("about__arrow_passive");
        }

        if(e.target.id === "pagination2"){
            if(window.innerWidth < 1025){
                setClass("two"); 
            } else {
                setClass("center"); 
            }
        }

        if(e.target.id === "pagination3"){
            if(window.innerWidth < 1025){
                setClass("center"); 
            } else {
                setClass("right"); 
            }
        }

        if(e.target.id === "pagination4"){
            setClass("four"); 
        }

        if(e.target.id === "pagination5"){
            setClass("right"); 
            arrowRight.classList.add("about__arrow_passive");
        }
    }
}

pagination.addEventListener("click", handler);
arrowRight.addEventListener("click", AR);
arrowLeft.addEventListener("click", AL);