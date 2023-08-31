import seasons from "./seasons";
import { setBtn } from "./helpers";

const radios = document.querySelector(".favorites__radios");
let season = seasons.winter;

function setBook(book, group, number){
    const card = document.querySelector(`.favorites__group${group} .favorites__card${number}`);
    card.classList.remove("animated");
    const title = card.querySelector(`.favorites-card__title`);
    title.textContent = book.title; 
    const subtitle = card.querySelector(`.favorites-card__subtitle`);
    subtitle.textContent = book.subtitle; 
    const text = card.querySelector(`.favorites-card__text`);
    text.textContent = book.text; 
    const img = card.querySelector(`.favorites-card__img img`);
    img.src = book.link; 
    img.alt = book.alt; 

    const btn = card.querySelector(`.favorites-card__btn`);
    const newBtn = document.createElement("BUTTON");
    newBtn.classList.add("favorites-card__btn")
    newBtn.id = book.id;
    const isBought = setBtn(book.title);
    if(isBought){
        newBtn.textContent = "Own";
        newBtn.disabled = true;
    } else {
        newBtn.textContent = "Buy";
        newBtn.disabled = false;
    }
    btn.replaceWith(newBtn);

    card.classList.add("animated");
    setTimeout(()=>{
        card.classList.remove("animated");
    },700)
}

function onSlider(e){
    if(e.target.name === "books"){
        season = seasons[e.target.value];
        season.forEach((item,index) => {
            if(index < 2){
                setBook(item, 1, index); 
            } else {
                setBook(item, 2, index);
            }
        })
    }
}
radios.addEventListener("click", onSlider);

window.addEventListener('scroll', function() {
    if(pageYOffset > 4000 || pageYOffset < 1500){
        radios.classList.remove("sticky");
    }
    if(pageYOffset > 1500 && pageYOffset < 4000){
        radios.classList.add("sticky");
    }
});