 // console.log("Up and running!");

 // var cardOne = "queen";
 // var cardTwo = "king";
 // var cardThree = "king";
 // var cardFour = "queen";
 // console.log("User flipped " + cardOne);
 // console.log("User flipped " + cardTwo);

 var cards = [ "queen", "queen", "king", "king"];
 var cardsInPlay = [];
 var cardOne =  "queen";
 cardsInPlay.push(cardOne);
 console.log("User flipped " + cardOne);
 var cardTwo ;
 cardTwo = cards[3];
 cardsInPlay.push(cardTwo);
 console.log("User flipped " + cardTwo);
 if (cardsInPlay.length === 2){
 	// console.log(true);}

 if (cardsInPlay[0] === cardsInPlay[1]) {
 	alert("You found a match!");}
 	else {alert("Sorry, try again ");}}
 else {console.log(false);}








