function setup() {
let sketch = createCanvas(600, 600);
    sketch.parent("mycanvas");
angleMode(DEGREES);
rectMode(CENTER);
}

function draw() {
  background(220);
  rectMode(CENTER);
  translate(200,200); //move the origin point
  rotate(45);
  rect(0,0, 100, 100); //draw at new origin point
  resetMatrix(); //sets origin and rotate back to
  normal
  rectMode(CORNER);
  rect(400, 400, 100, 100);
}

function mousePressed() {
  print("MouseX: " + mouseX + " MouseY: " + mouseY);
} //end mousePressed
