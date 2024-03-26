//Global Variables 
let name;
let year;
let age;
let instrument;
let cat;
let logo;
let angle = 0;
let formComplete = false;

function preload() {
    logo = loadImage("images/musiclogo.png");
}//end preloading of images and fonts

function setup() {
    let sketch = createCanvas(600, 600);
    sketch.parent("mycanvas");
    background(155, 135, 155);


    textSize(24);
    text("Click anywhere to register for the competition.", 50, 400);


}//end setup

function draw() {

    angleMode(DEGREES);
    translate(300, 150);
    rotate(angle);

    angle++;
    if (angle > 360) {
        angle = 0;
    }

    imageMode(CENTER);
    image(logo, 0, 0);

    translate(0,0);
    if (formComplete) {
        angle=0;
        noLoop();
        fill(0);
        noStroke();
        textSize(24);
        text("Competitor Name: " + name, 50, 450);
        text("Age: " + age, 50, 325);

        if (age > 21) {
            text("Division: Senior", 50, 475);
        } else if (age >= 16) {
            text("Division: Junior", 50, 475);
        } else {
            text("Division: Child", 50, 475);
        }
        if (cat === "pro") {
            text("Fee for Professionals: $100", 50, 500);
        } else {
            text("Fee for Amateurs: $30", 50, 500);
        }
    }
}//end draw

function mousePressed() {
    background(155, 135, 155);

    name = window.prompt("What is your name");
    // print("Debug: testing name variable: " + name);
    year = window.prompt("What year were you born?");
    age = 2020 - year;
    cat = window.prompt("What category pro or amateur?");
    formComplete = true;

}//end mousePressed