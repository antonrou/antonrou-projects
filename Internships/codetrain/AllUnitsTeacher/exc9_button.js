let r = 0;
let g = 0;
let b = 0;

function setup() {
let sketch = createCanvas(700, 400); //change to 700
sketch.parent("mycanvas");
}//end setup

function draw() {
background(r,g,b);
fill(255,0,0);
rect(100,50, 100, 50);
fill(0,255,0);
rect(300,50, 100, 50);
fill(0,0,255);
rect(500,50, 100, 50);
fill(255);
rect(400, 200, 100, 100);
}//end draw

function mousePressed() {
if( mouseX>100 && mouseX<200 && mouseY>50 &&
mouseY<100 ){
r = 255;
b = 0;
g = 0;
}

else if( mouseX>300 && mouseX<400 && mouseY>50
&& mouseY<100 ){
r = 0;
b = 0;
g = 255;
}
else if( mouseX>500 && mouseX<600 && mouseY>50
&& mouseY<100 ){
r = 0;
b = 255;
g = 0;
}
else if( mouseX>400 && mouseX<500 &&
mouseY>200 && mouseY<300 ){
r = random(0,255);
b = random(0,255);
g = random(0,255);
//rect(400, 200, 100, 100);
}
}//end mousePressed

function scene(){
if( mouseX>400 && mouseX<500 && mouseY>200
&& mouseY<300 ){
print("colliding")
}
}