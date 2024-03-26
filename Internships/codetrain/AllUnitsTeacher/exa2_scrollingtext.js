let textX = 250;

function setup() {
	let sketch = createCanvas(500, 600);
    sketch.parent("mycanvas");
}//end setup

function draw() {
  background(255,0,0);
  noStroke();
  fill(255,255,0);
  textSize(18);
  text("Black Friday Sale starts today!", textX,30);
  textX = textX - 2;

  if (   textX < -250     ){
    textX=500;
    print("too far left");
  }
  
}// end draw
