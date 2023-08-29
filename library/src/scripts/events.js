import {showRegister, closeRegister, showDrop, closeDrop, showLogin, closeLogin} from "./togglers";
const profile = document.querySelector(".icon");
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
        closeLogin();
    }
    if(e.target.closest(".register__link")){
        e.preventDefault();
        closeLogin();
        showRegister();
    }
}
login.addEventListener("click", loginHandler);

function onDrop(e){
    e.stopPropagation();
    if(e.target.classList.contains("drop__item2")){
        showRegister();
        closeDrop();
    }
    if(e.target.classList.contains("drop__item1")){
        showLogin();
        closeDrop();
    } 
}
dropMenu.addEventListener("click", onDrop);

function registerHandler(e){
    e.stopPropagation();
    if(e.target.closest(".register__icon")){
        closeRegister();
    }
    if(e.target.closest(".register__link")){
        e.preventDefault();
        closeRegister();
        showLogin();
    }
}
register.addEventListener("click", registerHandler);

function digitalHandler(e){
    if(e.target.classList.contains("digital__btn1")){
        e.stopPropagation();
        showRegister();
    }
    if(e.target.classList.contains("digital__btn2")){
        e.stopPropagation();
        showLogin();
    }
}
digital.addEventListener("click", digitalHandler);

function bodyHandler(e){
    if(dropMenu.classList.contains("active")){
        closeDrop();
    }
    if(register.classList.contains("active")){
     closeRegister()
    }
    if(login.classList.contains("active")){
        closeLogin()
    }
}
document.body.addEventListener("click", bodyHandler);