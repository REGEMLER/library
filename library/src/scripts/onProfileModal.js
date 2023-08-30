import {close} from "./togglers";

const profile = document.querySelector(".profile");

function onProfileModale(e){
    e.stopPropagation();
    if(e.target.closest(".profile__x")){
        close(profile);
    }
    if(e.target.closest(".profile__cube")){
        const number = profile.querySelector(".profile__number").textContent;
        navigator.clipboard.writeText(number);
    }
}
profile.addEventListener("click", onProfileModale);