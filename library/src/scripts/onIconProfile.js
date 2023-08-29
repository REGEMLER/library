import {show, close, closeDrop, showDrop} from "./togglers";

const iconProfile = document.querySelector(".icon");

function onProfile(e){
    e.stopPropagation();
    const dropMenu = document.querySelector(".drop");
    if(dropMenu.classList.contains("active")){
        closeDrop();
    } else {
        showDrop();
    }
}
iconProfile.addEventListener("click", onProfile);