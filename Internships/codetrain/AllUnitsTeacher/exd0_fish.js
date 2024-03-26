let oceanpic, coralpic;
let octpic;
let fishX = 300;

function preload() {
  oceanpic = loadImage("images/ocean.jpg");
  coralpic = loadImage("images/coral.png");
  octpic = loadImage("images/octopus.png");
}//end preload

function setup() {
  let sketch = createCanvas(800, 600);
    sketch.parent("mycanvas");
  image(oceanpic, 0, 0, width, height);
  drawSchool(400, 300, 10);
}//end setup

function draw() {
  image(oceanpic, 0, 0, width, height);
  drawSchool(400, 300, 10);
  drawCoral(725,200,400);
  drawFish(fishX, 200, 118);
  fishX+=3;
  if(fishX>width){
    fishX = 0;
  }
  
  drawCoral(0,50,600);
}//end draw

function mousePressed() {
  print("MouseX: " + mouseX + " MouseY: " + mouseY);
}//end mousePressed

function keyPressed() {
}//end keyPressed

var drawCoral = function (coralx, coraly, coralheight){
  image(coralpic, coralx, coraly, coralheight/2, coralheight);
}

var drawFish = function( centerX, centerY, bodyLength){
  //------- Begin Fish -------------
  // var centerX = 300;
  // var centerY = 200;
  // var bodyLength = 118;
  var bodyHeight = bodyLength*0.6;
  var bodyColor = color(162, 0, 255);
  noStroke();
  fill(bodyColor);
  // body
  ellipse(centerX, centerY, bodyLength, bodyHeight);
  // tail
  var tailWidth = bodyLength / 4;
  var tailHeight = bodyHeight / 2;
  triangle(centerX - bodyLength / 2, centerY, centerX - bodyLength / 2 - tailWidth, centerY - tailHeight, centerX - bodyLength / 2 - tailWidth, centerY + tailHeight);
  // eye
  fill(33, 33, 33);
  ellipse(centerX + bodyLength / 4, centerY, bodyHeight / 5, bodyHeight / 5);
  //------- End Fish -------------
  }; //end drawFish

function drawSchool(schoolX, schoolY, numFish){
  for(let i=0; i<numFish; i++){
    let centerX = random(-50, 50)+ schoolX;
    let centerY = random(-50, 50)+ schoolY;
    let fishSize = random(25, 75);
    image(octpic, centerX, centerY, fishSize, fishSize);
  }
}//end drawSchool