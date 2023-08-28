const profile = document.querySelector(".icon");
const dropMenu = document.querySelector(".drop");
const register = document.querySelector(".register");
const login = document.querySelector(".login");
const wrapper = document.querySelector(".wrapper");
const digital = document.querySelector(".digital-getcard__btns");

let isVisibleDrop = false; 
let isVisibleRegister = false; 
let isVisibleLogin = false; 

function showDrop(){
    dropMenu.classList.add("drop_active");
    isVisibleDrop = true;
}

function closeDrop(){
    dropMenu.classList.remove("drop_active");
    isVisibleDrop = false;
}

function onProfile(e){
    e.stopPropagation();
    if(isVisibleDrop){
        closeDrop();
    } else {
        showDrop();
    }
}
profile.addEventListener("click", onProfile);

function showLogin(){
    login.classList.add("register_active");
    wrapper.classList.add("blur");
    document.body.style.overflowY = "hidden";
    isVisibleLogin = true;
}

function closeLogin(){
    login.classList.remove("register_active");
    wrapper.classList.remove("blur");
    document.body.style.overflowY = "";
    isVisibleLogin = false;
}

function loginHandler(e){
    e.stopPropagation();
    if(e.target.closest(".register__icon")){
        closeLogin();
    }
}
login.addEventListener("click", loginHandler);

function showRegister(){
    register.classList.add("register_active");
    wrapper.classList.add("blur");
    document.body.style.overflowY = "hidden";
    isVisibleRegister = true;
}

function closeRegister(){
    register.classList.remove("register_active");
    wrapper.classList.remove("blur");
    document.body.style.overflowY = "";
    isVisibleRegister = false;
}

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
    if(isVisibleDrop){
        closeDrop();
    }
    if(isVisibleRegister){
     closeRegister()
    }
    if(isVisibleLogin){
        closeLogin()
    }
}
document.body.addEventListener("click", bodyHandler);