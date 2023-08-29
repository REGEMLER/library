import { closeRegister, closeLogin } from "./togglers";
const registerBtn = document.querySelector(".register .register__btn");
const loginBtn = document.querySelector(".login .register__btn");
const checkCardBtn = document.querySelector(".digital-form__btn");

let cardNumber = null; 

function register(e){
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/;
    if(!firstName || !lastName || !regEmail.test(email) || password.length < 8){
        alert("Incorrect data!");
        return false;
    } else {
        e.preventDefault();
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        closeRegister();
        setIconProfile();
        cardNumber = createCardNumber();
        localStorage.setItem("cardNumber", cardNumber);
    }
}
registerBtn.addEventListener("click", register);

function setIconProfile(){
    const icon = document.querySelector(".header__icons .icon");
    const img = document.getElementById("iconProfile");
    img.style.display = "none";
    const name = localStorage.getItem('firstName').slice(0, 1).toUpperCase();
    const surname = localStorage.getItem('lastName').slice(0, 1).toUpperCase();
    icon.textContent = name + surname; 
    icon.classList.add("icon_registred");
}

function createCardNumber(){
    const SYMBOLS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let result = "";
    for(let i = 0; i < 9; i++){
        let number = Math.floor(Math.random() * 16);
        result += SYMBOLS[number];
    }
    return result; 
}

function checkCard(e){
    const name = localStorage.getItem('firstName');
    const cardNumber = localStorage.getItem('cardNumber');
    if(!cardNumber || !name){
        alert("You are not registered!");
        return; 
    }
    let readersName = document.getElementById("readersName");
    let readersCard = document.getElementById("readeersCard");
    if( name !== readersName.value || cardNumber !== readersCard.value){
        alert("Incorrect data!");
        return; 
    }
    e.preventDefault();
    const icons = document.querySelector(".digital__icons");
    const btn = document.querySelector(".digital-form__btn");
    icons.classList.add("digital__icons_active");
    btn.style.display = "none";
    setTimeout(()=> {
        icons.classList.remove("digital__icons_active");
        btn.style.display = "block";
        readersName.value = "";
        readersCard.value = "";
    },10000)
}
checkCardBtn.addEventListener("click", checkCard)

function login(e){
    const userLogin = document.getElementById("login").value;
    const userPassword = document.getElementById("passwordCheck").value;
    if(!userLogin || userPassword.length < 8){
        alert("Incorrect data!");
        return false;
    } 
    const cardNumber = localStorage.getItem('cardNumber');
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    if(userPassword !== password || userLogin !== cardNumber && userLogin !== email){
        alert("Incorrect data!");
        return false;
    } 
    e.preventDefault();
    closeLogin();
    setIconProfile();
}
loginBtn.addEventListener("click", login);