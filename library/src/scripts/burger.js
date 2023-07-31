const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
console.dir(menu)

let isActive = false; 

function blurBG(isBlured) {

    if(!isBlured){
        const temp  = document.createElement("DIV");
        temp.classList.add("blur");
        document.body.append(temp); 
    } else{
        const temp  = document.querySelector(".blur");
        temp.remove(); 
    }
 }

 function showMenu(){
    blurBG(isActive); 
    document.body.style.overflowY = "hidden";
    menu.style.overflow = ""; 
    menu.classList.add(".header__menu_active");
    isActive = true; 
 }

 function closeMenu(){
    blurBG(isActive); 
    document.body.style.overflowY = "";
    menu.style.overflow = "hidden"; 
    menu.classList.remove(".header__menu_active");
    isActive = false; 
 }

 burger.addEventListener("click", showMenu);
 menu.addEventListener("click", closeMenu)