let one, two, three, four, five, six, rolling;
let roll = 0;
let secret = "vaccine";
let password;

function preload(){
  one = loadImage( "images/1.jpg" );
  two = loadImage( "images/2.jpg" );
  three = loadImage( "images/3.jpg" );
  four = loadImage( "images/4.jpg" );
  five = loadImage( "images/5.jpg" );
  six = loadImage( "images/6.jpg" );
  rolling = loadImage( "images/drolling.gif" );
}//end preloading of images

function setup() {
  let sketch = createCanvas(600, 400);
  sketch.parent("mycanvas");
  background(200,15,150);
  password = window.prompt("What is the password?")
}//end setup

function draw() {
  if(secret != password){
    textSize(40);
    text("Beat it loser!", 50,50);
  } else {
    drawDice();
  }
}//end draw

function mousePressed() {
  roll = floor ( random(1,7) ) ;
  print(roll);
  print("MouseX: " + mouseX +" MouseY: " + mouseY );
}//end mousePressed

function drawDice(){
  background(200,15,150);
  if(roll===1){
      image(one, 50,50);
  } else if(roll===2){
      image(two, 50,50);
  } else if(roll===3){
      image(three, 50,50);
  } else if(roll===4){
      image(four, 50,50);
  } else if(roll===5){
      image(five, 50,50);
  } else if(roll===6){
      image(six, 50,50);
  }
}//end drawDice