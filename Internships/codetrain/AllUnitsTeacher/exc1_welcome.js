//Global Variables
let face;
let font1;                                      //Line 1
let message = "Bring on 2023!";

function preload(){
    face = loadImage("images/happyface.png");
    font1 = loadFont("fonts/Hanalei.ttf");    //Line 2
}//end preloading of images and fonts

function setup() {
	let sketch = createCanvas(700, 500);
  sketch.parent("mycanvas");
}//end setup

function draw() {
    background(200, 50, 50);
    image(face, 100, 50, 300, 300);
    //draw text
    textFont(font1);                        //Line 3
    textSize(80);
    textAlign(CENTER);
    text(message, mouseX,420);
    
}//end draw