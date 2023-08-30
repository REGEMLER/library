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