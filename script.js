//<-- Global Variables -->>//

// let playerName = prompt("Enter your name, and we'll start matching world continents");
// let displayTitle = document.querySelector(`.mgTitle`)
//     displayTitle.innerText = `${playerName}'s Continent Match Challenge`

// let playerMatch = document.querySelector(`.playerMatch`)
//     playerMatch.innerText = `${playerName}'s Match total`

let gameCards = document.querySelectorAll(`.gameCard`)
let cardsInPlay = () => {
    for (i=0; i<gameCards.length; i++){
        console.log(gameCards[i])
    }
}
cardsInPlay()


const cardArray = [
    {name: `africa`,
    img: `africa png`
    },
    {name: `africa`,
    img: `africa png`
    },
    {name: `antarctica`,
    img: `antarctica png`
    },
    {name: `antarctica`,
    img: `antarctica png`
    },
    {name: `australia`,
    img: `australia png`
    },
    {name: `australia`,
    img: `australia png`
    },
    {name: `asia`,
    img: `asia png`
    },
    {name: `asia`,
    img: `asia png`
    },
    {name: `europe`,
    img: `europe png`
    },
    {name: `europe`,
    img: `europe png`
    },
    {name: `N.America`,
    img: `N.America png`
    },
    {name: `N.America`,
    img: `N.America png`
    },
    {name: `S.America`,
    img: `S.America png`
    },
    {name: `S.America`,
    img: `S.America png`
    },
    {name: `compass`,
    img: `compass png`
    },
    {name: `compass`,
    img: `compass png`
    },

]