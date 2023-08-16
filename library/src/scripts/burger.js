const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
const nav = document.querySelector(".header__nav");
const logo = document.querySelector(".header__logo");
const bg = document.querySelector(".bg__header");
const line1 = document.querySelector(".burger__item1");
const line2 = document.querySelector(".burger__item2");
const line3 = document.querySelector(".burger__item3");

let isActive = false; 

 function showMenu(event){
    if(!isActive){
        event.stopPropagation()
        document.body.style.overflowY = "hidden";
        menu.classList.add("header__menu_active");
        logo.classList.add("header__logo_active");
        bg.classList.add("bg__header_active");
        line1.classList.add("burger__item1_active");
        line2.classList.add("burger__item2_active");
        line3.classList.add("burger__item3_active");
        isActive = true; 
    } else {
        closeMenu(); 
    }
 }

 function closeMenu(){
    if(isActive){
        document.body.style.overflowY = "";
        menu.classList.remove("header__menu_active");
        bg.classList.remove("bg__header_active");
        line1.classList.remove("burger__item1_active");
        line2.classList.remove("burger__item2_active");
        line3.classList.remove("burger__item3_active");
        logo.classList.remove("header__logo_active");
        isActive = false; 
    } else {
        return
    }

 }

 burger.addEventListener("click", showMenu);
 nav.addEventListener("click", closeMenu)