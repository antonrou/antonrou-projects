//Ex_Flowers.js
function setup() {
let sketch = createCanvas(800, 600);
sketch.parent("mycanvas");
background(50,200,80);
fill(50, 200, 255);
rect(0,0,width,450);
}//end setup
function draw() {
drawFlower(100, 100, 50);
drawFlower(300, 300, 110);
drawFlower(500, 300, 20);
for(let i=0; i<5; i++){
drawFlower(i*55+500, random(500,510),
random(18, 25) );
}
noLoop();
}//end draw

function mousePressed() {
drawFlower(mouseX, mouseY, random(5,75));
}//end mousePressed
function drawFlower( x, y, flowerSize){
fill(random(255), 0, random(255));
strokeWeight(1);
stroke(0);
let offset = flowerSize*0.75;
circle(x, y-offset, flowerSize*1.2);
circle(x, y+offset, flowerSize*1.2);
circle(x-offset, y, flowerSize*1.2);
circle(x+offset, y, flowerSize*1.2);
fill("yellow");
circle(x, y, flowerSize);
}//end drawFlower
