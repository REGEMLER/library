export function setIconProfile(){
    const icon = document.querySelector(".header__icons .icon");
    const img = document.getElementById("iconProfile");
    img.style.display = "none";
    const name = localStorage.getItem('firstName');
    const surname = localStorage.getItem('lastName');
    icon.textContent = name.slice(0, 1).toUpperCase() + surname.slice(0, 1).toUpperCase(); 
    icon.classList.add("icon_registred");
    icon.setAttribute("title", `${name} ${surname}`)
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