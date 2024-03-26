function setup() {
	let sketch = createCanvas(600, 200);
    sketch.parent("mycanvas");
}//end setup

function draw() {
  background(255,255,0); //RGB up to 255
  fill(0,0,255);
  stroke(255,0,0);
  strokeWeight(13)
  rect(300, 100,  150, 75);  //x,y,w,h
  fill(100,100,255);
  ellipse(300, 100, 150, 75);
  strokeWeight(3);
  line(456,114, 512, 92);
  circle(50,50, 75);
  square(100,100, 75);
  stroke(0);
  strokeWeight(3);
  fill(255);
}

function mousePressed(){
  print( mouseX  + ",   "  + mouseY  );
}