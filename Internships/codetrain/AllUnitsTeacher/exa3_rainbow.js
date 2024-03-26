let lineY = 250;
function setup() {
    let sketch = createCanvas(600, 600);
    sketch.parent("mycanvas");
    background(255, 255,0);


}//end setup


function draw() {
  //background(220);
  fill(random(255), random(255), random(255));
  circle (random(200), random(400), random(100));
    
  stroke(  random(255), random(255), random(255)   );
  line(250, lineY, mouseX,mouseY);

  //Remove the slashes below to add movement to the line's starting value.    
  // lineY = lineY + 2;
  // if(lineY>400){
  //   lineY = 0;
  // }

  
}//end draw