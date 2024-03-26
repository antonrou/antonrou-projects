let first, second;
let transparency = 255;

function preload(){
  first = loadImage("images/connor.jpg");
  second = loadImage("images/skull.jpg");
  
}//end preload

function setup() {
	let sketch = createCanvas(400, 300); 
    sketch.parent("mycanvas"); 
    imageMode(CENTER);
}//end setup

function draw() {
  background(0);
  tint(255,255);
  image(second, 188,75, 350, 500);
  tint(255, transparency);
  image(first, 200,150,400,300);
  transparency-=10;
  if(transparency < 1){
    transparency = 255;
  }

}//end draw

function mousePressed(){
  transparency -= 5;
}//end mouse