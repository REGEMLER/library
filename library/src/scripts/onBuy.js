import {close} from "./togglers";
import { getUsers, setUsers } from "./helpers";

const bankCard = document.getElementById("bankCard");
const bankCode1 = document.getElementById("bankCode1");
const bankCode2 = document.getElementById("bankCode2");
const cvc = document.getElementById("cvc");
const bankName = document.getElementById("bankName");
const bankPostal = document.getElementById("bankPostal");
const bankCity = document.getElementById("bankCity");
const btn = document.querySelector(".buy__btn");

const buy = document.querySelector(".buy");
function onBuy(e){
    e.stopPropagation();
    if(e.target.closest(".buy__icon")){
        close(buy);
    }
}
buy.addEventListener("click", onBuy);

function validator(){
    let bankCardValueOld = String(bankCard.value);
    let bankCardValueArr = bankCardValueOld.split("");
    for(let i = 4; i< bankCardValueArr.length + 1; i = i + 5){
        if(bankCardValueArr[i] === " "){
            bankCardValueArr[i] = "";
        }
    }
    let bankCardValue = bankCardValueArr.join("");
    if(
        bankCardValue.length === 16 
        &&  bankCode1.value.length <= 2 
        &&  bankCode2.value.length <= 2 
        &&  bankCode1.value.length > 0
        &&  bankCode2.value.length > 0 
        &&  cvc.value.length === 3 
        &&  bankName.value.length >= 2 
        &&  bankPostal.value.length >= 2 
        &&  bankCity.value.length >= 2 
        
    ){
        btn.disabled = false; 
    } else {
        btn.disabled = true; 
    }
}
bankCard.addEventListener("change", validator);
bankCode1.addEventListener("change", validator);
bankCode2.addEventListener("change", validator);
cvc.addEventListener("change", validator);
bankName.addEventListener("change", validator);
bankPostal.addEventListener("change", validator);
bankCity.addEventListener("change", validator);

function buyCard(e){
    e.stopPropagation();
    e.preventDefault();
    const cardNumber = document.querySelector(".drop__title").textContent;
    const users = getUsers();
    let currentUser = users.find(item => item.cardNumber == cardNumber);
    let {password, firstName, lastName, visits, bonuses, books, email}  = currentUser;
    const newUser = {
        firstName,
        lastName,
        email,
        password,
        cardNumber,
        visits,
        books,
        bonuses,
        hasBankCard : true
    }
    setUsers(users, cardNumber, newUser);
    close(buy);
}
btn.addEventListener("click", buyCard);