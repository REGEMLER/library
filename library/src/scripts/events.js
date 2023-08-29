import {show, close, closeDrop, showDrop} from "./togglers";
import { changeDrop } from "./changeDrop";
import { returnIconProfile } from "./helpers";
const profile = document.querySelector(".icon");
const profileModal = document.querySelector(".profile");
const buyModal = document.querySelector(".buy");
const dropMenu = document.querySelector(".drop");
const register = document.querySelector(".register");
const login = document.querySelector(".login");
const digital = document.querySelector(".digital-getcard__btns");

function onProfile(e){
    e.stopPropagation();
    if(dropMenu.classList.contains("active")){
        closeDrop();
    } else {
        showDrop();
    }
}
profile.addEventListener("click", onProfile);

function loginHandler(e){
    e.stopPropagation();
    if(e.target.closest(".register__icon")){
        close(login);
    }
    if(e.target.closest(".register__link")){
        e.preventDefault();
        close(login);
        show(register);
    }
}
login.addEventListener("click", loginHandler);

function onDrop(e){
    e.stopPropagation();
    if(dropMenu.classList.contains("logined")){
        if(e.target.classList.contains("drop__item2")){
            changeDrop();
            returnIconProfile();
            closeDrop();
        }
        if(e.target.classList.contains("drop__item1")){
            show(profileModal);
            closeDrop();
        } 
    } else {
        if(e.target.classList.contains("drop__item2")){
            show(register);
            closeDrop();
        }
        if(e.target.classList.contains("drop__item1")){
            show(login);
            closeDrop();
        } 
    }
}
dropMenu.addEventListener("click", onDrop);

function registerHandler(e){
    e.stopPropagation();
    if(e.target.closest(".register__icon")){
        close(register);
    }
    if(e.target.closest(".register__link")){
        e.preventDefault();
        close(register);
        show(login);
    }
}
register.addEventListener("click", registerHandler);

function digitalHandler(e){
    if(e.target.classList.contains("digital__btn1")){
        e.stopPropagation();
        show(register);
    }
    if(e.target.classList.contains("digital__btn2")){
        e.stopPropagation();
        show(login);
    }
}
digital.addEventListener("click", digitalHandler);

function bodyHandler(e){
    if(dropMenu.classList.contains("active")){
        closeDrop();
    }
    if(register.classList.contains("active")){
        close(register);
    }
    if(profileModal.classList.contains("active")){
        close(profileModal);
    }
    if(buyModal.classList.contains("active")){
        close(buyModal);
    }
}
document.body.addEventListener("click", bodyHandler);