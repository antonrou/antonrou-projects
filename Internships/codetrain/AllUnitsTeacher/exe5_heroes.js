//exe5_heroes.js
let allHeroes = ["Thor","Ironman","Superman", "Vanya Hargreeves", "Wonder Woman"];
let isHuman = [false, true, false, true, true];
let allPics = [];
let rand;
let angle = 0;

function preload(){
  allPics.push( loadImage("images/thor.png") );
    allPics.push( loadImage("images/ironman.jpg"));
  
  allPics.push( loadImage("images/superman.webp")  );
  
  allPics.push(loadImage("images/vanya.jpg")  );
  
  allPics.push( loadImage("images/wonder.jpg"));
  
  
}//end preloading of images

function setup() {
  let sketch = createCanvas(800, 800);
  sketch.parent("mycanvas");
  rand = floor( random(allHeroes.length) ) ;
  print(rand);
  angleMode(DEGREES)
}//end setup

function draw() {
  background(100,92,80);
  imageMode(CORNER)
  for(let i=0; i<allHeroes.length; i++){
    image(allPics[i], 700, i*125 + 100, 75, 75);
  }
  noFill();
  strokeWeight(5)
  stroke(255,255,0);
  rect(50,50,400,400);
  fill(255,255,0);
  noStroke();
  textSize(20);
  text("Your random chosen Superhero for hire is \n"+ allHeroes[rand], 50,500);
  imageMode(CENTER);
  translate(250,250)
  rotate(angle)
  image(allPics[rand], 0, 0, angle, angle);
  resetMatrix();
  if(angle<360){
    angle+=3;
  }
}//end draw
