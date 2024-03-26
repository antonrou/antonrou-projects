/*
1. save image (.png or .gif or .jpg)
       - short name, no spaces
2. upload into P5
3. Write 3 lines of code
       a) set up variables to hold images
       b) load the images into the variables
       c) draw to screen using image
*/
let cakePic, conPic, presPic;
let confetti = 200;
let font1, font2;

function preload() {
    cakePic = loadImage("images/cake.png");
    conPic = loadImage("images/confetti.png");
    presPic = loadImage("images/present.png");
    font1 = loadFont("fonts/PermanentMarker-Regular.ttf");
    font2 = loadFont("fonts/BigShoulders.ttf");

}//end preload

function setup() {
    let sketch = createCanvas(400, 400);
    sketch.parent("mycanvas");
    textSize(16)
}//end setup

function draw() {
    background(0);
    image(conPic, 0, 0, 400, confetti);
    confetti++;

    image(cakePic, 100, 150, 100, 100);
    image(presPic, 200, 150, 100, 100);

    fill(255);
    textSize(50);
    textFont(font1);
    text("Happy Birthday!", 15, 280);
    textSize(30);
    textFont(font2);

    text("Enjoy your day!", 15, 330);

}//end draw