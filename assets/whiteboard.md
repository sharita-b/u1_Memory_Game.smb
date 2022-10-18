Game needs:

- 'click' event listeners to identify cards chosen
- for loop to run through the array of cards / .forEach method
- empty array variables to store flipped cards  -- Maybe more than one
- .random method to assign img to card back at beginning of gameplay
- Need to determine winning pairs

- an #id to define winning pairs celebration

- consider prompt to fill in data, () like Player name - asign this to a player variable

- turn option for multi player mode
<!-- - Use a Switch funtion to distinguish single play, or double play options. 

<!-- Case 1: (Single play) option will include timer count down

>> Case 2: (Two Player) option will show a card-match tally score --> --> Not doing this

<<-- function list -->>

// Game start state = card_Back hidden
// 1) change the picture on the card from, card_Front to card_Back when player 'clicks'
//-- toggle back and forth with clicks (event listener)
COMPLETE through CSS and Eventlistener

// 2) when two card_Front have been clicked, store that in a variable `playerChoice` & compare it to winning pairs
// --> may need to create an array of winning pairs for 3) to work<--//
// 3) if 'playerChoice' is truthy with any of the winning pairs, alert(`${playerName}! You have a matching pair) else  -- flip both cards to card_Front (toggle function)
// 4 create a variable that stores the match pairs, and returns the number to id (`#displayMatch`)
// 5 create a timer that counts down from 100 when the user answers the name prompt (line 3)


