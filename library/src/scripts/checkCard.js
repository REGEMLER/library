import { getUsers } from "./helpers";
const checkCardBtn = document.querySelector(".digital-form__btn");

function showCard( cardNumber, firstName, lastName, visits, bonuses, books ){
    const readersName = document.getElementById("readersName");
    const readersCard = document.getElementById("readeersCard");
    const digitalVisits = document.getElementById("digitalVisits");
    const digitalBonuses = document.getElementById("digitalBonuses");
    const digitalBooks = document.getElementById("digitalBooks");
    const icons = document.querySelector(".digital__icons");
    const btn = document.querySelector(".digital-form__btn");
    icons.classList.add("digital__icons_active");
    btn.classList.add("digital__btn_passive");
    digitalVisits.textContent = visits;
    digitalBonuses.textContent = bonuses;
    digitalBooks.textContent = books.length;
    readersName.value = firstName + " " + lastName;
    readersCard.value = cardNumber;
    readersName.disabled = true;
    readersCard.disabled = true;
}

export function hideCard(){
    const readersName = document.getElementById("readersName");
    const readersCard = document.getElementById("readeersCard");
    const icons = document.querySelector(".digital__icons");
    const btn = document.querySelector(".digital-form__btn");
    icons.classList.remove("digital__icons_active");
    btn.classList.remove("digital__btn_passive");
    readersName.value = "";
    readersCard.value = "";
    readersName.disabled = false;
    readersCard.disabled = false;
    const title = document.querySelector(".digital-getcard__logo");
    title.textContent = "Get a reader card";
    const text = document.querySelector(".digital-getcard__text");
    text.textContent = "You will be able to see a reader card after logging into account or you can register a new account";
    const btn1 = document.querySelector(".digital__btn1");
    btn1.classList.remove("digital__btn_passive");
    const btn2 = document.querySelector(".digital__btn2");
    btn2.textContent = "Log in"
    btn2.classList.remove("logined");
}

export function changeDigitals(cardNumber, firstName, lastName, visits, bonuses, books){
    const title = document.querySelector(".digital-getcard__logo");
    title.textContent = "Visit your profile";
    const text = document.querySelector(".digital-getcard__text");
    text.textContent = "With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.";
    const btn1 = document.querySelector(".digital__btn1");
    btn1.classList.add("digital__btn_passive");
    const btn2 = document.querySelector(".digital__btn2");
    btn2.textContent = "Profile"
    btn2.classList.add("logined");
    showCard( cardNumber, firstName, lastName, visits, bonuses, books );
}

function checkCard(e){
    const readersName = document.getElementById("readersName");
    const readersCard = document.getElementById("readeersCard");
    const users = getUsers();
    const currentUser = users.find(item => item.cardNumber == readersCard.value);
    if( !currentUser ){
        alert("You are not registered!");
        return false;
    }
    const { cardNumber, firstName, lastName, visits, books, bonuses }  = currentUser;
    let readersNameArr = readersName.value.split(" ");
    // if( readersNameArr[0] !==firstName || readersNameArr[0] !==lastName ){
    //     alert("Incorrect data!");
    //     return false;
    // }
    e.preventDefault();
    showCard( cardNumber, firstName, lastName, visits, bonuses, books );
    setTimeout(hideCard,10000)
}
checkCardBtn.addEventListener("click", checkCard)