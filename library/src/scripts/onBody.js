import { closeDrop, close } from "./togglers";

function bodyHandler(e){

    const profileModal = document.querySelector(".profile");
    const buyModal = document.querySelector(".buy");
    const dropMenu = document.querySelector(".drop");
    const register = document.querySelector(".register");
    const login = document.querySelector(".login");


    if(dropMenu.classList.contains("active")){
        closeDrop();
    }
    if(register.classList.contains("active")){
        close(register);
    }
    if(login.classList.contains("active")){
        close(login);
    }
    if(profileModal.classList.contains("active")){
        close(profileModal);
    }
    if(buyModal.classList.contains("active")){
        close(buyModal);
    }
}
document.body.addEventListener("click", bodyHandler);