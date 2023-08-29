const checkCardBtn = document.querySelector(".digital-form__btn");
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