let font1, font2
let pic1;
let bomby = 50;
let speed = 1;
let timer;

function preload(){
  font1 = loadFont("fonts/Lobster.ttf");
  pic1 = loadImage("images/explosion.jpg");
  
}//end preload
function setup() {
	let sketch = createCanvas(600, 600);
  sketch.parent("mycanvas");
  textSize(16)
  textFont(font1);
}//end setup

function draw() {
  background(220,0,0);
  square(115, bomby, 20);
  
  bomby += speed;
  
  if (  bomby > height  ){
    image(pic1, 0, 300, 250, 100);
    text("Armeggedon is here!", 20,50);
    text("You survived: " + round(timer,3) + " seconds", 20,100);
    
  } else {
    fill(255);
    timer = millis() / 1000;
    text("Time elapsed: " +  round(timer,3) , 20, 100);
  }
  
  
}//end draw

function keyPressed(){
  
  if (   keyCode === UP_ARROW   ) {
    bomby -= 8;
  }
  
  
}//end keyPressed


