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
    books.forEach(item => {
        const li = document.createElement("LI");
        li.textContent = item;
        li.classList.add("profile__book");
        booksList.append(li);
    })
}