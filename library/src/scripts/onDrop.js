import {show, closeDrop} from "./togglers";
import { returnIconProfile, setBooksBtns, changeDrop } from "./helpers";
import { hideCard } from "./checkCard";

const dropMenu = document.querySelector(".drop");

function logOut(){
    changeDrop();
    returnIconProfile();
    hideCard();
    closeDrop();
    setBooksBtns();
}

function onDrop(e){
    e.stopPropagation();
    if(dropMenu.classList.contains("logined")){
        if(e.target.classList.contains("drop__item2")){
            logOut()
            return;
        }
        if(e.target.classList.contains("drop__item1")){
            show(document.querySelector(".profile"));
            closeDrop();
        } 
    } else {
        if(e.target.classList.contains("drop__item2")){
            show(document.querySelector(".register"));
            closeDrop();
        }
        if(e.target.classList.contains("drop__item1")){
            show(document.querySelector(".login"));
            closeDrop();
        } 
    }
}
dropMenu.addEventListener("click", onDrop);