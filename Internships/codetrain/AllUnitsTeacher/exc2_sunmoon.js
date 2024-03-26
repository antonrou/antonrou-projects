//Global Variables
let sky = 255;
let house, sun, moon;
let big = 1;
let font2;

function preload(){
    house= loadImage("images/house.png");  //not in start file
    sun= loadImage("images/sun.gif");
    moon= loadImage("images/moon.png");
    font2 = loadFont( "fonts/Anton_Bold.ttf" );

}//end preloading of images and fonts

function setup() {
	let sketch = createCanvas(500, 600);
    sketch.parent("mycanvas");
}//end setup

function draw() {
    sky = mouseX/2;
    background(sky);
   
    
    tint(sky, 255);
    image(house, 20, 245);
    tint(255);
    
    
    //draw the sun & moon
    if(mouseX > 125){
        image(sun, mouseX, 100-mouseX/5   , 100, 100);
    } else {
        image(moon, mouseX, 100-mouseX/5   , 100, 100);
    }



    //draw the snow
    fill(200);
    noStroke();
    rect(0,550,500,50);
    fill(255,0,0);

    //draw caption
    if( big < 40 ){
        big++;
    } else {
        //big = 5;
    }

    textSize(big);
    textFont(font2);
    textAlign(CENTER);
    text("A fine winter's day!", width/2,590);
    
}//end draw