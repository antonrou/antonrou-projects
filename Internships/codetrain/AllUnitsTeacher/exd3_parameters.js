//Ex3_Parameters.js
function setup() {
  let sketch = createCanvas(800, 600);
    sketch.parent("mycanvas");
  background(200,200,80);
  textSize(20);
  fill(0);
  noStroke();
  text("Press r to roll the dice", 50, 100);
  text("Press p to pipeline cost", 50, 140);
}//end setup

function draw() {
}//end draw

function keyPressed() {
  if( key==='r'){
    // roll2Dice();
    rollDice(8,20);
  }
  if (key ==='p'){
    pipeline();
  } 
}//end keyPressed

function pipeline(){
  let diameter = 1 * window.prompt("What is the diameter of the pipeline in meters?");
  let length = 1 * window.prompt("What is the length in kilometers?");
  length *= 1000; //convert km to meters
  materialsCost(diameter, length);
  capacity(diameter, length);
}//end pipeline

function capacity( d, len){
  let volume = 3.14 * (d/2) * (d/2) * len;
  print("Total capacity: " + volume + " cubic meters.");
}//end capacity

function materialsCost( d, len ){
  let squareMeters = 3.14 * d * len;
  print("Sheet metal costs $50 per square meter");
  print("Total metal needed: " + squareMeters);
  print ("Total Cost: $" + (squareMeters*50) );
}//end materialsCost

function roll2Dice(){
  let die1 = floor( random(1,7) );
  let die2 = floor( random(1,7) );
  print("You rolled a " + die1 + " and a " + die2);
  print("Total of: " + (die1+die2) );
}//end roll2Dice

function rollDice( numDice, numSides ){
  let roll = [];
  for(let i=0; i<numDice; i++){
    roll.push( floor( random(1, numSides+1 ) ) );
  }
  print("You rolled: " + roll);
}//end rollDice
