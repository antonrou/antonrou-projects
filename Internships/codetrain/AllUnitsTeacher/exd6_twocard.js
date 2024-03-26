function setup() {
 let sketch = createCanvas(800, 600);
  sketch.parent("mycanvas");
 let playerNums = [];
 let playerSuits = [];
 let casinoNums = [];
 let casinoSuits = [];

 playerNums[0] = floor( random(1, 14) );
 playerNums[1] = floor( random(1, 14) );
 casinoNums[0] = floor( random(1, 14) );
 casinoNums[1] = floor( random(1, 14) );
 playerSuits[0] = getSuit();
 playerSuits[1] = getSuit();
 casinoSuits[0] = getSuit();
 casinoSuits[1] = getSuit();
 print("The player has a " + playerNums[0] + " of " + playerSuits[0]);
 print("and a " + playerNums[1] + " of " + playerSuits[1]);
 print("The casino has a " + casinoNums[0] + " of " + casinoSuits[0]); 
 print("and a " + casinoNums[1] + " of " + casinoSuits[1]);
  
 if( hasPair( playerNums )){
   print("The player has a pair.")
  }
 if( hasPair( casinoNums )){
   print("The casino has a pair.")
  }
 if( hasFlush( playerSuits)){
   print("The Player has a flush.");
  }
 if( hasFlush(casinoSuits)){
   print("The casino has a flush");
 }
}//end setup

function draw() {
}//end draw

function hasFlush( suits ) {
 let firstSuit = suits[0];
 for(let i=1; i<suits.length; i++){
   if(firstSuit != suits[i]){
    return false;
   }
  }
 return true;
}//end hasFlush

function hasPair(nums){
 return nums[0]===nums[1];
// if(nums[0]===nums[1]){
// return true;
// } else {
// return false;
// }
}

function getSuit(){
 let rand = floor( random(1, 5) ) ;
 if(rand===1) {
   return "clubs":
 }
 else if (rand===2) {
   return "diamonds";
 }
 else if (rand===3){
   return "hearts";
 }
 else return "spades";
}//end getSuit
