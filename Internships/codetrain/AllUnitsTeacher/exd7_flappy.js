let birdx, birdy, birdsize;
let wallsx = [600, 1000, 1400, 1400, 1800];
let wallsy = [200, 0, -250, 300, 100];
let wallSpeed = 1;
let timer = 0;

function setup() {
  let sketch = createCanvas(1000, 500);
  sketch.parent("mycanvas");
  birdx = 200;
  birdy = 50;
  birdsize = 40;
}//end setup

function draw() {
  background(200,200,255);
  if( !isColliding() ){
    drawBird();
    drawWalls();
  } else {
    textSize(40);
    text("Game Over", 200, 200);
}
  if( keyIsDown(UP_ARROW) && birdy>0 ){
    birdy -= 5;
}
  
  if(millis() > timer + 5000){
    timer = millis();
    wallSpeed += 0.5;
  }
}//end draw

function isColliding(){
  for(let i=0; i<wallsx.length; i++){
    if( birdx+birdsize>wallsx[i] && birdx<wallsx[i]+20 && birdy+birdsize>wallsy[i] && birdy<wallsy[i]+400 ){
      return true;
    }
  }//end FOR 
  return false;
}//end isColliding

function drawWalls(){
  for(let i=0; i<wallsx.length; i++){
    fill(255, 0, 0);
    rect(wallsx[i], wallsy[i], 20, 400); 
    wallsx[i] -= wallSpeed;
  if(wallsx[i] < 0){
    wallsx[i] = 1600;
  }
  }//end FOR
}//end drawWalls

function drawBird(){
  fill(0);
  square(birdx, birdy, birdsize);
  if(birdy < height-birdsize ){
    birdy += 2.5;
  }
}//end drawBird
