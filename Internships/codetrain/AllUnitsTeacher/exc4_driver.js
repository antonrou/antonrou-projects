//Global Variables
let logo;
let age = 25;
let testScore = 0;

function preload(){
    logo = loadImage("images/DriverLogo.png")
}//end preloading of images and fonts

function setup() {
	let sketch = createCanvas(600, 400);
    sketch.parent("mycanvas");
    background(100,92,80);
    age = window.prompt("What is your age?");

}//end setup

function draw() {
    background(255,0,0);
    image(logo, 50,50);

    textSize(18);
    fill(255, 255, 0);
    if(age >= 16){
        text("You are eligible for your full license." , 50, 200,);
    } else if (age >= 14){
        text("You are eligible for your Learner's license." , 50, 200,);
    } else {
        text("You are not eligible. Beat it loser.", 50, 200);
    }

    text("Your current score: " + testScore, 400, 380);
    text("How many colors are there on a traffic light?", 50, 250);
    text("Which color is in the middle of a traffic light? (type r, g or y)", 50, 275);
    text("On what side of the road do they drive in Australia? (use the arrow keys)", 50, 300);
    text("Are kangaroos eligible for driver tests? (type m for yes, or n no)", 50, 325);

}//end draw

function keyPressed() {

    if(key === '3'){
        testScore++;
    } else if ( key === 'y' ){
        testScore++;       
    } else if (keyCode === LEFT_ARROW){
        testScore++;
    } else if(  key === 'n'){
        testScore++;
    }
 
}//end keyPressed

function mousePressed() {

   
}//end mousePressed
