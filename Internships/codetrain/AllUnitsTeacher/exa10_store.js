let product1 = "Fender Stratocaster";
let price1 = 3050.25;
let bought1 = 0;
let product2 = "Strings";
let price2 = 12.85;
let bought2 = 0;
let total1, total2, grandTotal;
let timer = 0;


function setup() {
  	let sketch = createCanvas(500, 600);
    sketch.parent("mycanvas");
  //bought1 = window.prompt("How many?");
}

function draw() {
  background(252, 186, 3);
  fill(0);
  noStroke();
  textSize(24);
  text("Couprie's Guitar Store", 80, 40);
  
  textSize(14);
  text(product1,20, 150);   
  text(product2,20, 180);
  text("$"+ price1, 150, 150);
  text("$"+ price2, 150, 180);
  text(bought1, 250, 150);
  text(bought2, 250, 180);
  total1 = price1 * bought1;
  text("$" + total1, 300, 150);
  
  total2 = price2 * bought2;
  text("$" + total2, 300, 180);
  
  if( bought2 <= 15 ){
      if(millis() > timer){  //how to make a 2 second timer
        timer = millis()+1000;
        bought2++;
      }
  }
  
  
}//end draw

function keyPressed(){
  bought1 = key;
}//end keyPressed

