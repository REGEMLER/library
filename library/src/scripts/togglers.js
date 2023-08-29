 import { closeMenu } from "./burger";

 export function showRegister(){
    const register = document.querySelector(".register");
    const wrapper = document.querySelector(".wrapper");
    register.classList.add("active");
    wrapper.classList.add("blur");
    document.body.style.overflowY = "hidden";
}

export function closeRegister(){
    const register = document.querySelector(".register");
    const wrapper = document.querySelector(".wrapper");
    register.classList.remove("active");
    wrapper.classList.remove("blur");
    document.body.style.overflowY = "";
}

export function showLogin(){
    const login = document.querySelector(".login");
    const wrapper = document.querySelector(".wrapper");
    login.classList.add("active");
    wrapper.classList.add("blur");
    document.body.style.overflowY = "hidden";
}

export function closeLogin(){
    const login = document.querySelector(".login");
    const wrapper = document.querySelector(".wrapper");
    login.classList.remove("active");
    wrapper.classList.remove("blur");
    document.body.style.overflowY = "";
}

export function showDrop(){
    const dropMenu = document.querySelector(".drop");
    closeMenu();
    dropMenu.classList.add("active");
}

export function closeDrop(){
    const dropMenu = document.querySelector(".drop");
    dropMenu.classList.remove("active");
}