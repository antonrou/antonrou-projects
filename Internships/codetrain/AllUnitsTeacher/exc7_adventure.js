//Global Variables
let cave, church, town, meadow;
let scenenum = 1;
let ts = 2;

function preload(){
  cave = loadImage("images/cave.jpg");
  church = loadImage("images/church.jpg");
  town = loadImage("images/town.jpg");
  meadow = loadImage("images/meadow.jpg");
}//end preloading of images and fonts

function setup() {
  let sketch = createCanvas(600, 400);
    sketch.parent("mycanvas");
  background(100,92,80);
}//end setup

function draw() {
  if(scenenum === 1){
    scene1();
  } else if (scenenum === 2){
    scene2();
  } else if(scenenum === 3){
    scene3();
  } else if (scenenum === 4){
    scene4();
  }
}//end draw

function keyPressed() {
  if( key==='+' || keyCode===RIGHT_ARROW ){
    scenenum++;
  }
  if(scenenum > 4 || key==='r' ){
    scenenum = 1;
  }
  print(scenenum);
}//end keyPressed

function scene1(){
  background(255,255,0);
  image(cave, 50,50, width-100, height-150);
  textSize(ts);
  if (ts<40){ //add this growing text later
    ts++;
  }
  text("The Cave of the Evil Monster", 200, 390);
}

function scene2(){
  background(255,255,0);
  image(church, 50,50, width-100, height-150);
  text("The Monster Destroyed the Church last week.", 200, 390);
}

function scene3(){
  background(255,255,0);
  image(town, 50,50, width-100, height-150);
  text("I will avenge my town!", 200, 390);
}

function scene4(){
  background(255,255,0);
  image(meadow, 50,50, width-100, height-150);
  text("And bury the monster in the meadow.", 200, 390);
}