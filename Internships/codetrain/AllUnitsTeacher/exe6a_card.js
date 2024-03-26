let deckPics = [];
let hand1Pics = [];
let hand2Pics = [];

function preload(){
  for(let i=1; i<14; i++){
    let imagename = "images/Cards/" + i + "C.png";
    deckPics.push( loadImage(imagename) );
  }
  
  for(let i=1; i<14; i++){
    let imagename = "images/Cards/" + i + "D.png";
    deckPics.push( loadImage(imagename) );
  }
  for(let i=1; i<14; i++){
    let imagename = "images/Cards/" + i + "H.png";
    deckPics.push( loadImage(imagename) );
  }
  for(let i=1; i<14; i++){
    let imagename = "images/Cards/" + i + "S.png";
    deckPics.push( loadImage(imagename) );
  }
}//end preloading of images

function setup() {
  let sketch = createCanvas(800, 600);
  sketch.parent("mycanvas");
  //for debugging
  print(deckPics.length);
}//end setup

function draw() {
  background(100,92,80);
  for(let i=0; i<deckPics.length; i++){
    image(deckPics[i], i*30, 50, 40, 60 );
}
  for(let i=0; i<hand1Pics.length; i++){
    image(hand1Pics[i], i*40+100, 150, 80, 120 );
  }
  for(let i=0; i<hand2Pics.length; i++){
    image(hand2Pics[i], i*40+100, 300, 80, 120 );
  }
}//end draw

function keyPressed() {
  //deal 2 hands of 5 cards
  if(key==='d'){
    deal(5);
  }  
}//end keyPressed

function deal(numCards){
  for(let i=0; i<numCards; i++){
    let rand = floor(random(0,deckPics.length));
    hand1Pics.push( deckPics[rand] );
    deckPics.splice(rand,1);
    rand = floor(random(0,deckPics.length))
    hand2Pics.push( deckPics[rand] );
    deckPics.splice(rand,1);
  }
  print(deckPics.length)
}//deal
