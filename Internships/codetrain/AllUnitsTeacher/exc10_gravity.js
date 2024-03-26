// Level 1
let rm1_squarex = 50.0;
let rm1_squarey = 0;
let rm1_speedx = 0;
let rm1_speedy = -3.0;
//Level 2

function preload(){
}//end preloading of images and fonts

function setup() {
  let sketch = createCanvas(600, 600);
  sketch.parent("mycanvas");
  background(100,92,80);
}//end setup

function draw() {
  background(100,92,80);
  rect(rm1_squarex,rm1_squarey,50,50);
  rm1_squarex += rm1_speedx;
  // positive speed goes right
  rm1_squarey += rm1_speedy;
  // positive speed goes down, negative speed for a jump
  
  fill(255);
  rect(25, 550, 250, 20); //platform 1
  rect(400, 520, 300, 20); //platform 1
  
  if( platform1() ){ //functions used for AP CSP
    example
    rm1_speedy=0;
  } else if ( platform2() ){
    rm1_speedy=0;
  } else {
    rm1_speedy += 0.05; //gravity
  }
}//end draw

function keyPressed() {
  if(key==='w'){
    rm1_squarey-=5; //this ensures it is up off the
    platform
    rm1_speedy=-5;
  } else if(key==='d'){
    rm1_speedx = 3;
  } else if(key==='a'){
    rm1_speedx = -3;
  }
}//end keyPressed

function keyReleased() {
  if(key==='d'){
    rm1_speedx = 0;
  } else if (key==='a'){
    rm1_speedx = 0;
  }
}//end keyPressed

function platform1(){
//This is what is known as a collision event. If there is a collision with the platform, it returns true.
//The IF statement compares the 4 sides of the square with the location of the platforms. Note that the platforms are 250 wide and 20 tall.
  if(rm1_squarex+50>25 && rm1_squarex<275 && rm1_squarey+50>550 && rm1_squarey<570){
    return true;
  } else {
    return false;
  }
}//end platform1

function platform2(){
  if(rm1_squarex+50>400 && rm1_squarex<700 && rm1_squarey+50>520 && rm1_squarey<540){
    return true;
  } else {
    return false;
  }
}//end platform2
