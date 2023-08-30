import { close } from "./togglers";
import { setIconProfile, createCardNumber, getUsers } from "./helpers";
import { changeDrop } from "./changeDrop";

export function registerHandler(e){
    let oldUsers = getUsers();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/;
    const checkEmail = oldUsers.some(item => item.email === email);
    if(!firstName || !lastName || !regEmail.test(email) || password.length < 8){
        alert("Incorrect data!");
        return false;
    } 
    if(checkEmail){
        alert("This email already exists!");
        return false;
    } 
    e.preventDefault();
    let cardNumber = createCardNumber();
    let newUser = {
        firstName,
        lastName,
        email,
        password,
        cardNumber,
        visits : 1,
        books : [],
        bonuses : Math.floor(Math.random() * 9999),
    }
    let newUsers = [...oldUsers, newUser];
    let lsnewUsers = JSON.stringify(newUsers);
    localStorage.setItem("users", lsnewUsers);
    close(document.querySelector(".register"));
    console.log(lsnewUsers)
    setIconProfile(cardNumber);
}

export function loginHandler(e){
    const userLogin = document.getElementById("login").value;
    const userPassword = document.getElementById("passwordCheck").value;
    if(!userLogin || userPassword.length < 8){
        alert("Incorrect data!");
        return false;
    } 
    const users = getUsers();
    let currentUser = users.find(item => item.cardNumber == userLogin);
    if(!currentUser){
        currentUser = users.find(item => item.email == userLogin);
    }
    if(!currentUser){
        alert("Incorrect data!");
        return false;
    }
    const {password, cardNumber}  = currentUser;
    if(userPassword !== password){
        alert("Incorrect password!");
        return false;
    } 
    e.preventDefault();
    close(document.querySelector(".login"));
    setIconProfile(cardNumber);
    changeDrop()
}