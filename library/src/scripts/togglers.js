 import { closeMenu } from "./burger";

 export function show(elem){
    const wrapper = document.querySelector(".wrapper");
    elem.classList.add("active");
    wrapper.classList.add("blur");
    document.body.style.overflowY = "hidden";
}

export function close(elem){
    const wrapper = document.querySelector(".wrapper");
    elem.classList.remove("active");
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