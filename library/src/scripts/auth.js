import { close } from "./togglers";
import { setIconProfile, createCardNumber } from "./helpers";
import { changeDrop } from "./changeDrop";

export function registerHandler(e){
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
        close(document.querySelector(".register"));
        setIconProfile();
        let cardNumber = createCardNumber();
        localStorage.setItem("cardNumber", cardNumber);
    }
}

export function loginHandler(e){
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
    close(document.querySelector(".login"));
    setIconProfile();
    changeDrop()
}