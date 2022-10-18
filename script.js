//<-- Global Variables -->>//

// let playerName = prompt("Enter your name, and we'll start matching world continents");
// let displayTitle = document.querySelector(`.mgTitle`)
//     displayTitle.innerText = `${playerName}'s Continent Match Challenge`

// let playerMatch = document.querySelector(`.playerMatch`)
//     playerMatch.innerText = `${playerName}'s Match total`

// let gameCards = document.querySelectorAll(`.gameCard`)
// let cardsInPlay = () => {
//     for (i=0; i<gameCards.length; i++){
//         let card = document.create(`img`)
//         card.setAttribute(`src`, `assets/`)
//         //console.log(gameCards[i])
//     }
// }
// cardsInPlay()

//---Flip Function Elements---//
const cardFront = () => {
    document.querySelector(`.cardFront`).style.dislplay =`none`
}
cardFront()