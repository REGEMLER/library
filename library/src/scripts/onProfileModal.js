import {close} from "./togglers";

const profile = document.querySelector(".profile");

function onProfileModale(e){
    e.stopPropagation();
    if(e.target.closest(".profile__x")){
        close(profile);
    }
    if(e.target.closest(".profile__cube")){
        const number = profile.querySelector(".profile__number").textContent;
        navigator.clipboard.writeText(number)
        .then(()=>{
            const copy = profile.querySelector(".profile__cube-copy");
            copy.classList.add("profile__cube-copy_active");
            setTimeout(()=> {
                copy.classList.remove("profile__cube-copy_active");
            },2000)
        });
    }
}
profile.addEventListener("click", onProfileModale);