//<--Functions I will need-->>

const playGame = () => {
    //start game
    //confirm(user input to play again)
    //I think this is an overarching function containig everything
}

const getCards = () => Array.from(document.getElementsByClassName(`gameCard`))
    // will need this when collecting all cards so I can use array functions


const cardFlip = () => { 
   
    // Need an event listenter 'click'
    // declared variable to hold the value of the selected card
    // conditional to compare if it is a match -- id="c0-c15"
}
// Need an event listenter 'click'



    //<--Global Variables-->
let playerName = prompt("Tell me your name, and we'll start matching world continents");

let displayTitle = document.querySelector(".mgTitle").innerHTML(`${playerName}'s Continent Match challenge`)



//Optional Array of obj cards with pictures
const cardArray = [
    {name: `africa`,
    img: `assets/Africa-Green.png`
    },
    {name: `africa`,
    img: `assets/Africa-Green.png`
    },
    {name: `antarctica`,
    img: `assets/Antarctica.png`
    },
    {name: `antarctica`,
    img: `assets/Antarctica.png`
    },
    {name: `australia`,
    img: `australia png`
    },
    {name: `australia`,
    img: `australia png`
    },
    {name: `asia`,
    img: `assets/Asia-Burgandy.png`
    },
    {name: `asia`,
    img: `assets/Asia-Burgandy.png`
    },
    {name: `europe`,
    img: `assets/Europe-Navy.png`
    },
    {name: `europe`,
    img: `assets/Europe-Navy.png`
    },
    {name: `n.America`,
    img: `N.America png`
    },
    {name: `n.America`,
    img: `N.America png`
    },
    {name: `s.America`,
    img: `assets/South-America-Black.png`
    },
    {name: `s.America`,
    img: `assets/South-America-Black.png`
    },
    {name: `compass`,
    img: `assets/Compass.png`
    },
    {name: `compass`,
    img: `assets/Compass.png`
    },

]