

 var cards = [ 
{rank:"queen",
suit:"hearts",
cardImage:"images/queen-of-hearts.png",
id:0
},
{rank: "queen"   ,
suit:  "diamonds"  ,
cardImage:"images/queen-of-diamonds.png",
id:1
},
{rank: "king"   ,
suit:  "hearts"  ,
cardImage:"images/king-of-hearts.png",
id:2
},
{rank:  "king"  ,
suit:  "diamonds"  ,
cardImage:"images/king-of-diamonds.png",
id:3
}

 ];

  var cardsInPlay = [];

 function flipCard(){
  var cardId=this.getAttribute('src');
 	 document.getAttribute(cardElement);

console.log("User flipped " + cardId.rank);

 console.log("hi2");
}

function createBoard(){

 for (var i = 0; i < cards.length; i++) {
   var cardElement=document.createElement('img');

   cardElement.setAttribute('src','images/back.png');
//           
// document.getElementByclassName("game-board").appendChild(cardElement); 

   cardElement.setAttribute('data-id','cards[i]');
 

cardElement=document.addEventListener('click',flipCard);
 document.appendChild(cardElement);
   // document.appendChild('data-id');

}
}

createBoard();
function checkForMatch(i,l){

if ( this.getAttribute('cards[i].cardImage') == this.getAttribute('cards[l].cardImage'))
// console.log(cards[i].cardImage);
{alert("matched");}
else{alert("not matched");}

}
var i=
cardElement=document.addEventListener('click',flipCard);
var l =
cardElement=document.addEventListener('click',flipCard);
checkForMatch(i,l);


