

 var cards = [ "queen", "queen", "king", "king"];
 var cardsInPlay = [];

function checkForMatch(){
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");}
}

 function flipCard(cardId){
console.log("User flipped " + cardId);
	// for(var i=0;i<cards.length;i++){
cardsInPlay.push(cardId);}



flipCard(cards[0]);
flipCard(cards[2]);

checkForMatch();







