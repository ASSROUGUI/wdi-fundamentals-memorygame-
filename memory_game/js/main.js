

 // var cards = [ "queen", "queen", "king", "king"];
 var cards = [ 
{rank:"queen",
suit:"hearts",
cardImage:"images/queen-of-hearts.png"
},
{rank: "queen"   ,
suit:  "diamonds"  ,
cardImage:"images/queen-of-diamonds.png"
},
{rank: "king"   ,
suit:  "hearts"  ,
cardImage:"images/king-of-hearts.png"
},
{rank:  "king"  ,
suit:  "diamonds"  ,
cardImage:"images/king-of-diamonds.png"
}

 ];

 var cardsInPlay = [];

function checkForMatch(){
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  alert("Sorry, try again.");}
}

 function flipCard(cardId){
console.log("User flipped " + cardId.rank);
	
cardsInPlay.push(cardId.rank);
console.log(cardId.cardImage);
console.log(cardId.suit);
}




flipCard(cards[0]);
flipCard(cards[2]);

checkForMatch();







