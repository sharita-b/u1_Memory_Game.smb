//<-- User Interactive Game Introduction -->>//

let playerName = prompt("Enter your name, and we'll start matching world continents");
let displayTitle = document.querySelector(`.mgTitle`)
    displayTitle.innerText = `${playerName}'s Continent Match Challenge`
let playerMatch = document.querySelector(`.playerMatch`)
    playerMatch.innerText = `${playerName}'s Match total`

//<-- Global Variables -->>//
const gameCards = document.querySelectorAll(`.gameCard`);
let card_Front = document.querySelector(`.card_Front`);
let card_Back = document.querySelector(`.card_Back`);
const displayTime = document.querySelector(`#displayTime`);


let time = 100;
setInterval(gameTimeLeft, 1000);
function gameTimeLeft () {
displayTime.innerHTML = `${time}`; time--;
}
gameTimeLeft()


let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard () {
    this.classList.add(`flip`);
//Empty first & second Card variables allowed the flipCard funtion below. **Learning** use of truthy manipulation in the if/else statement is what made this possible** -> Help from TA T.P.
    if (!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;

    checkForMatch();
}

//dataset assignment of eachpair instead of an #id allowed the checkForMath function to be condensed -> Help from instructor J.T. 
function checkForMatch (){
    if(firstCard.dataset.framework === secondCard.dataset.framework){
        //I would like to the card to flip, and then alert
        alert(`${playerName}, you have a match!`)
        disableCards();
        return;
    } else {
        alert(`Nope! Sorry ${playerName}, try again.`)
    }
    unFlipCards();
}

function disableCards () {
    firstCard.removeEventListener(`click`, flipCard);
    secondCard.removeEventListener(`click`, flipCard);
}
//Researched delay: "how to set time delay in JavaScript" -StackOverflow//
function unFlipCards () {
    setTimeout (() => {
        firstCard.classList.remove(`flip`);
        secondCard.classList.remove(`flip`);
    }, 1000);
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

