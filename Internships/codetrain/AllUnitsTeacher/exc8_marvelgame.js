//Ironman, Groot, Thanos, Spiderman
let scenenum = 1;
let isHuman = false;
let isGood = false;
let isBitten = false;
let isFemale = false;

function preload() {
}//end preloading of images and fonts

function setup() {
  let sketch = createCanvas(600, 400);
  sketch.parent("mycanvas");
  background(255, 255, 0);
  textSize(24);
}//end setup

function draw() {
  if (scenenum === 1) {
    scene1(5); //the 5 will affect the red value of the text
  } else if (scenenum === 2) {
    scene2(25);
  } else if (scenenum === 3) {
    scene3(5);
  } else if (scenenum === 4) {
    scene4(25);
  }else if (scenenum === 999) {
    endscene(50);
  }
}//end draw

function keyPressed() {
//Human question
  if (key === 'y' && scenenum === 1) {
    scenenum = 2;
    isHuman = true;
  }
  else if (key === 'n' && scenenum === 1) {
    scenenum = 2;
  }
//Good guy question
  else if (key === 'y' && scenenum === 2) {
    scenenum = 3;
    isGood = true;
  }
  else if (key === 'n' && scenenum === 2) {
    scenenum = 3;
  }
//Spider question
  else if (key === 'y' && scenenum === 3) {
    scenenum = 4;
    isBitten = true;
  }
  else if (key === 'n' && scenenum === 3) {
    scenenum = 4;
  }


//Female question
  else if (key === 'y' && scenenum === 4) {
    scenenum = 999;
    isFemale = true;
  }
  
  else if (key === 'n' && scenenum === 4) {
    scenenum = 999;
  }
}//end keyPressed

function mousePressed() {
}//end mousePressed

function scene1(red) {
  background(255, 255, 0);
  fill(red, 50, 150);
  text("Is your character from earth? (y or n)", 50, 100);
}

function scene2(red) {
  background(255, 255, 0);
  fill(red, 50, 150);
  text("Is your character a goodguy? (y or n)", 50, 120);
}

function scene3(red) {
  background(255, 255, 0);
  fill(red, 50, 150);
  text("Has your character been bitten by a radioactive insect?(y or n)", 50, 140);
}

function scene4(red) {
  background(255, 255, 0);
  fill(red, 50, 150);
  text("Is your character female? (y or n)", 50, 140);
}

function endscene(red) {
  background(255, 255, 0);
  fill(red, 50, 150);
  if (isHuman && isGood && !isBitten && !isFemale) {
    text("Ironman!", 50, 350);
  } else if (isHuman && isGood && isBitten && !isFemale) {
      text("Spiderman!", 50, 350);
  } else if (!isHuman && !isGood && !isBitten && !isFemale) {
      text("Thanos!", 50, 350);
  } else if (!isHuman && isGood && !isBitten && !isFemale) {
      text("Groot!", 50, 350);
  } else if (!isHuman && isGood && !isBitten && isFemale) {
      text("Gamora!", 50, 350);
  } else if (isHuman && isGood && !isBitten && isFemale) {
      text("Captain Marvel!", 50, 350);
  }
  else {
    print("Testing Boolean variables");
    print("isHuman"+ isHuman);
    print("isGood"+ isGood);
    print("isBitten"+ isBitten);
    print("isFemale"+ isFemale);
  }
}//endscene
