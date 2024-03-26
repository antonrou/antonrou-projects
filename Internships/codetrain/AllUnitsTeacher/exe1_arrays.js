let wage = 13.50;
let allShifts = [];

function setup() {
  let sketch = createCanvas(800, 600);
    sketch.parent("mycanvas");
  //Two ways to add data to an array
  //1. By index number
  //2. By PUSH, which adds to the end of the array
  allShifts[0] = 4;
  allShifts[1] = 6;
  allShifts[2] = 6;
  allShifts[3] = 4;
  allShifts[4] = 8;
}//end setup

function draw() {
  background(200,200,80);
  textSize(20);
  text("Hours Worked", 50, 50);
  text("Dollars Earned", 250, 50);
  for( let i=0; i<allShifts.length; i++ ){
    text( allShifts[i], 50, i*30+100 );
    text( allShifts[i]*wage, 250, i*30+100 );
  }
  //Total Algorithm
  let total = 0;
  for( let i = 0; i<allShifts.length; i++ ){
    total += allShifts[i];
  }
  text("Total Earned $" + (total*wage), 400, 200 );
}//end draw

function mousePressed() {
  let tempHours = 1.0*window.prompt("How many hours did you work?")
  allShifts.push(tempHours);
}//end mousePressed
