import {show, close} from "./togglers";

const digital = document.querySelector(".digital-getcard__btns");
function digitalHandler(e){
    if(e.target.classList.contains("digital__btn1")){
        e.stopPropagation();
        show(document.querySelector(".register"));
    }
    if(e.target.classList.contains("digital__btn2")){
        e.stopPropagation();
        show(document.querySelector(".login"));
    }
}
digital.addEventListener("click", digitalHandler);