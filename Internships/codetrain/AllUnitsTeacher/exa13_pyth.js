let title = "Pythagoras' Theorum";
let widthB = 200;

function setup() {
  let sketch = createCanvas(500, 500);
    sketch.parent("mycanvas");
}

function draw() {
  widthB = mouseX;
  background(220);
  textSize(30);
  text(title, 150,40);
  stroke(255,255,0);
  strokeWeight(4);
  line(50,50,50,300);
  line(50,300, widthB, 300);
  line(50,50, widthB, 300);
  
}