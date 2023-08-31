export function setIconProfile(cardNumber){
    const users = getUsers();
    const currentUser = users.find(item => item.cardNumber == cardNumber);
    const {firstName, lastName}  = currentUser;
    const icon = document.querySelector(".header__icons .icon");
    const img = document.getElementById("iconProfile");
    if(img){
        img.style.display = "none";
    }
    icon.textContent = firstName.slice(0, 1).toUpperCase() + lastName.slice(0, 1).toUpperCase(); 
    icon.classList.add("icon_registred");
    icon.setAttribute("title", `${firstName} ${lastName}`)
}

export function returnIconProfile(){
    const icon = document.querySelector(".header__icons .icon");
    icon.classList.remove("icon_registred");
    icon.insertAdjacentHTML("afterbegin", '<img id="iconProfile" src="icon_profile.svg" alt="icon avatar">');
    icon.removeAttribute("title");
}

export function createCardNumber(){
    const SYMBOLS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let result = "";
    for(let i = 0; i < 9; i++){
        let number = Math.floor(Math.random() * 16);
        result += SYMBOLS[number];
    }
    return result; 
}

export function getUsers(){
    let oldUsers = null;
    let users = null;
    let LSusers = localStorage.getItem("users");
    if(LSusers){
        users = JSON.parse(LSusers); 
    }
    oldUsers = users ?  users : [];
    return oldUsers;
}

export function setProfile( cardNumber, firstName, lastName, visits, bonuses, books ){
    const logo = document.querySelector(".profile__logo");
    const name = document.querySelector(".profile__name");
    const profileVisits = document.getElementById("profileVisits");
    const profileBonuses = document.getElementById("profileBonuses");
    const profileBooks = document.getElementById("profileBooks");
    const profileNumber = document.querySelector(".profile__number"); 
    const booksList = document.querySelector(".profile__books"); 

    logo.textContent = `${firstName.slice(0,1).toUpperCase()}${lastName.slice(0,1).toUpperCase()}`;
    name.textContent = `${firstName} ${lastName}`;
    profileVisits.textContent = visits;
    profileBonuses.textContent = bonuses;
    profileBooks.textContent = books.length; 
    profileNumber.textContent = cardNumber;
    booksList.innerHTML = ""; 
    books.forEach(item => {
        const li = document.createElement("LI");
        li.textContent = item;
        li.classList.add("profile__book");
        booksList.append(li);
    })
}

export function setBooksBtns(){
    const btns = [...document.querySelectorAll(".favorites-card__btn")];
    const titles = [...document.querySelectorAll(".favorites-card__title")];
    titles.forEach((item, index) => {
        const isBought = setBtn(item.textContent);
        if(isBought){
            btns[index].textContent = "Own";
            btns[index].disabled = true;
        } else {
            btns[index].textContent = "Buy";
            btns[index].disabled = false;
        }
    })
}

export function setBtn(title){
    const drop = document.querySelector(".drop");
    if(!drop.classList.contains("logined")){
        return false; 
    }
    const cardNumber = drop.querySelector(".drop__title").textContent;
    const users = getUsers();
    const currentUser = users.find(item => item.cardNumber == cardNumber);
    let { books }  = currentUser;
    let titles = books.map(item => {
        let index = item.indexOf(",");
        return item.slice(0, index); 
    })
    return titles.includes(title); 
}

export function changeDrop(cardNumber){
    const drop = document.querySelector(".drop");
    const title = drop.querySelector(".drop__title");
    const drop1 = drop.querySelector(".drop__item1");
    const drop2 = drop.querySelector(".drop__item2");
    if(drop.classList.contains("logined")){
        drop.classList.remove("logined");
        title.textContent = "Profile";
        drop1.textContent = "Log In";
        drop2.textContent = "Register";
    } else{
        drop.classList.add("logined");
        title.textContent = cardNumber;
        drop1.textContent = "My profile";
        drop2.textContent = "Log Out";
    }
}