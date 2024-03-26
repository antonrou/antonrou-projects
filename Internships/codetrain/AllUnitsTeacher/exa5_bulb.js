let bulb_on;
let bulb_off;
let isOn = false; //boolean

function preload() {
  bulb_on = loadImage("images/bulbon-1.png");
  bulb_off = loadImage("images/bulboff-1.png");
  

}

function setup() {
	let sketch = createCanvas(200, 300);
    sketch.parent("mycanvas");
    
}//end setup

function draw() {
  if (isOn) {
    background(250, 250, 200);
    image(bulb_on,0,0, width, height);

  } else {
    background(25);
    image(bulb_off,0,0, width, height);
  }


  //print("test");

} //end draw

function keyPressed() {
  if (key === 'l') {
    isOn = true;

  }
  if (key === 'd') {
    isOn = false;
  }

}//end key
function mousePressed(){
  if(isOn){
    isOn=false;
  } else {
    isOn=true;
  }
  
}//end mouse
