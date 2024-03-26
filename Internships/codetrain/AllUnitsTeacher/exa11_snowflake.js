let fontSize = 20;
let drawing = '*';

function setup() {
    let sketch = createCanvas(600, 400);
    sketch.parent("mycanvas");

    background(0);
    textAlign(CENTER, CENTER);

}//end setup

function draw() {
    //background(0);
    textSize(fontSize);
    fill(random(255), random(255), random(255));
    text(drawing, mouseX, mouseY);
}//end draw

function mousePressed() {
    fontSize += 10;
    fill(random(255), random(255), random(255));
    text(drawing, mouseX, mouseY);
}//end mousePressed