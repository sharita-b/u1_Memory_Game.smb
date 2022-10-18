//<-- User Interactive Game Introduction -->>//

let playerName = prompt("Enter your name, and we'll start matching world continents");
let displayTitle = document.querySelector(`.mgTitle`)
    displayTitle.innerText = `${playerName}'s Continent Match Challenge`
let playerMatch = document.querySelector(`.playerMatch`)
    playerMatch.innerText = `${playerName}'s Match total`

//<-- Global Variables -->>//

 //All the cards on the board > class `.gameCards`
let gameCards = document.getElementsByClassName(`.gameCard`);
//All cards with find_Cardback img > class `.cardBack`
let cardBack = document.getElementsByClassName(`.cardBack`);
//All cards with a continent img > class `.cardFront`
let cardFront = document.getElementsByClassName(`.cardFront`);
//-----WINNING PAIRS----//
//two cards with africa img > class `.cardFront` and id `#c0 , #c14`
let africaPair = document.getElementById(`#c0, #c14`);
//two cards with n.America img > class `.cardFront` and id `#c5 , #c11`
let nAmericaPair = document.getElementById(`#c5 , #c11`);
//two cards with australia img > class `.cardFront` and id `#c7 , #c9`
let australiaPair = document.getElementById(`#c7 , #c9`);
//two cards with sAmerica img > class `.cardFront` and id `#c3 , #c15`
let sAmericaPair = document.getElementById(`#c3 , #c15`);
 //two cards with asia img > class `.cardFront` and id `#c13 , #c8`
let asiaPair = document.getElementById(`#c13 , #c8`);
//two cards with europe img > class `.cardFront` and id `#c1 , #c2`
let europePair = document.getElementById(`#c1 , #c2`);
//two cards with antarctica img > class `.cardFront` and id `#c6 , #c10`
let antarcticaPair = document.getElementById(`#c6 , #c10`)
//two cards with compass img > class `.cardFront` and id `#c4 , #c12`
let compassPair = document.getElementById(`#c4 , #c12`);


//<-- Game Functions -->>//

// 1) change the picture on the card from, cardBack to cardFront when player 'clicks'
//-- toggle back and forth with clicks (event listener)

// 2) when two cardBack have been clicked, store that in a variable `playerChoice` & compare it to winning pairs
// --> may need to create an array of winning pairs for 3) to work<--//
// 3) if 'playerChoice' is truthy with any of the winning pairs, alert(`${playerName}! You have a matching pair) else  -- flip both cards to cardBack (toggle function)
// 4 create a variable that stores the match pairs, and returns the number to id (`#displayMatch`)
// 5 create a timer that counts down from 100 when the user answers the name prompt (line 3)

// Array of Cards???
// let gameCards = document.querySelectorAll(`.gameCard`)
// let cardsInPlay = () => {
//     for (i=0; i<gameCards.length; i++){
//         let card = document.create(`img`)
//         card.setAttribute(`src`, `assets/`)
//         //console.log(gameCards[i])
//     }
// }
// cardsInPlay()


//<-- Event Listeners -->>//

gameCards.addEventListener(`click`, () => {
    document.body.classList.remove(`cardBack`);
    document.body.classList.toggle(`cardFront`);
});
