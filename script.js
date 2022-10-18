//<-- User Interactive Game Introduction -->>//

// let playerName = prompt("Enter your name, and we'll start matching world continents");
// let displayTitle = document.querySelector(`.mgTitle`)
//     displayTitle.innerText = `${playerName}'s Continent Match Challenge`
// let playerMatch = document.querySelector(`.playerMatch`)
//     playerMatch.innerText = `${playerName}'s Match total`

//<-- Global Variables -->>//
const gameCards = document.querySelectorAll(`.gameCard`);
let card_Front = document.querySelector(`.card_Front`);
let card_Back = document.querySelector(`.card_Back`);

//-----WINNING PAIRS----//
let africaPair = document.getElementById(`#c0, #c14`);
let nAmericaPair = document.getElementById(`#c5 , #c11`);
let australiaPair = document.getElementById(`#c7 , #c9`);
let sAmericaPair = document.getElementById(`#c3 , #c15`);
let asiaPair = document.getElementById(`#c13 , #c8`);
let europePair = document.getElementById(`#c1 , #c2`);
let antarcticaPair = document.getElementById(`#c6 , #c10`)
let compassPair = document.getElementById(`#c4 , #c12`);
//<-- Game Functions -->>//

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard () {
    this.classList.add(`flip`);

    if (!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
    }
}

gameCards.forEach(card => card.addEventListener(`click`, flipCard))







//<-- Event Listeners -->>//

// const flipCard = () => {
//     gameCards.classList.toggle(`.card_Back`)
// }
// gameCards.addEventListener(`click`, flipCard)

// function flipCard (event) {
//     console.log(event.target.id)  
    
//     this.classList.toggle (`flip`);
// }
// gameCards.forEach(card => card.addEventListener(`click`, flipCard))




// function removeBack (){
//     document.getElementById("c0").removeAttribute("width")
// }
// gameCards.forEach(card => card.addEventListener("click", removeBack))
// gameCards.addEventListener(`click`, () => {
//     gameCards.classList.toggle(`.card_Back`)
// });

// gameCards.addEventListener(`click`, () => {
//     document.body.classList.remove(`card_Front`);
//     document.body.classList.toggle(`card_Back`);
// });

