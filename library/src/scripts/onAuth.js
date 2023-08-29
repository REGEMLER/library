import {show, close} from "./togglers";
import { registerHandler, loginHandler } from "./auth";

const register = document.querySelector(".register");
const login = document.querySelector(".login");

function onLogin(e){
    e.stopPropagation();
    if(e.target.closest(".register__icon")){
        close(login);
    }
    if(e.target.closest(".register__link")){
        e.preventDefault();
        close(login);
        show(register);
    }
    if(e.target.closest(".register__btn")){
        e.preventDefault();
        loginHandler(e);
    }
}
login.addEventListener("click", onLogin);

function onRegister(e){
    e.stopPropagation();
    if(e.target.closest(".register__icon")){
        close(register);
    }
    if(e.target.closest(".register__link")){
        e.preventDefault();
        close(register);
        show(login);
    }
    if(e.target.closest(".register__btn")){
        e.preventDefault();
        registerHandler(e);
    }
}
register.addEventListener("click", onRegister);