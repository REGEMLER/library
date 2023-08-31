import seasons from "./seasons";
import { getUsers, setProfile, setUsers } from "./helpers";
import { show } from "./togglers";
import { changeDigitals } from "./checkCard";

const field = document.querySelector(".favorites__contents");

function onBook(e){
    if(e.target.closest(".favorites-card__btn")){
        e.stopPropagation();
        const drop = document.querySelector(".drop");
        if(!drop.classList.contains("logined")){
            show(document.querySelector(".login"));
            return; 
        } 

        const cardNumber = drop.querySelector(".drop__title").textContent;
        const users = getUsers();
        let currentUser = users.find(item => item.cardNumber == cardNumber);
        let {password, firstName, lastName, visits, bonuses, books, email, hasBankCard}  = currentUser;

        if(!hasBankCard){
            show(document.querySelector(".buy"));
            return;
        }

        const radios = [...document.getElementsByName("books")];
        const season = radios.find(item => item.checked).value;
        const currentBook = seasons[season].find(item => item.id === e.target.id);
        const currentBtn = document.getElementById(currentBook.id);
        currentBtn.textContent = "Own";
        currentBtn.disabled = true;
        const newBook = `${currentBook.title}, ${currentBook.subtitle.replace("By", "")}`
        const newBooks = [...books, newBook];
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            cardNumber,
            visits,
            books : newBooks,
            bonuses,
            hasBankCard
        }
        setUsers(users, cardNumber, newUser);
        changeDigitals(cardNumber, firstName, lastName, visits, bonuses, newBooks);
        setProfile(cardNumber, firstName, lastName, visits, bonuses, newBooks);
    }
}
field.addEventListener("click", onBook)