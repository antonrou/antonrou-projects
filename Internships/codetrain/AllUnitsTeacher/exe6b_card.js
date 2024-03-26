//exe6b_cardpics.js
//picture arrays
let deck = [];
let hand1 = [];
let hand2 = [];
//number arrays
let deckNums = [];
let hand1Nums = [];
let hand2Nums = [];
function preload(){
    for(let i=1; i<14; i++){
    // let imagename = "images/CARDS/" + i +"C.png";
        deck.push( loadImage("images/Cards/" + i +"C.png") );
        deck.push( loadImage("images/Cards/" + i +"D.png") );
        deck.push( loadImage("images/Cards/" + i +"H.png") );
        deck.push( loadImage("images/Cards/" + i +"S.png") );
        deckNums.push(i);
        deckNums.push(i);
        deckNums.push(i);
        deckNums.push(i);
    }
    print("Number in deck: " + deck.length);
    // print(deckNums);
}//end preloading of images
function setup() {
    let sketch = createCanvas(800, 600);
    sketch.parent("mycanvas");
}//end setup
function draw() {
    background(200,200,80);
    //draw full deck
    for(let i=0; i<deck.length; i++){
        image( deck[i], i*30+10, 50, 40, 60 )
    }
    textSize(15);
    text("Player 1: ", 50, 200);
    for(let i=0; i<hand1.length; i++){
        image( hand1[i], i*40+150, 150, 80, 120 );
    }
    text("Player 2: ", 50, 350);
    for(let i=0; i<hand2.length; i++){
        image( hand2[i], i*40+150, 350, 80, 120 );
    }
}//end draw

function keyPressed() {
    if(key==='d'){
        deal(5); //the 5 is a parameter aka. arguement
    }
    //Find the Highest Algorithm
    if(key === 'h'){
        let highest = hand1Nums[0];
        let highestIndex = 0;
        for( let i=0; i<hand1Nums.length; i++){
            if( hand1Nums[i] > highest ){
                highest = hand1Nums[i];
                highestIndex = i;
            }
        }
        print("The highest card in hand 1 is: " + highest);
        console.log("The highest card in hand 1 is: " + highest);
    }
    //CountIF Algorithm
    if(key === 'a'){
        let counter = 0;
        for(let i=0; i<hand1Nums.length; i++){
            if (hand1Nums[i]===1) counter++;
        }
        print("The number of Aces in hand 1 is: " +
        counter);
    }
}//end keyPressed
function deal( numcards ){
    for(let i=0; i<numcards; i++){
        let rand = floor( random(0, deck.length) );
        hand1.push( deck[rand] );
        hand1Nums.push( deckNums[rand] )
        deck.splice(rand,1);
        deckNums.splice(rand,1);
        rand = floor( random(0, deck.length) );
        hand2.push( deck[rand] );
        hand2Nums.push (deckNums[rand]);
        deck.splice(rand,1);
        deckNums.splice(rand,1);
    }//for loop
    print(hand1Nums);
    print(hand2Nums);
}//deal
