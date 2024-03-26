//ex5_playlist.js
let allBands = [];
let allGenres = [];
let filter = "";

function setup() {
  let sketch = createCanvas(800, 600);
    sketch.parent("mycanvas");
  allBands[0] = "Justin Bieber";
  allBands[1] = "Ed Sheeran";
  allBands[2] = "The Weeknd";
  allBands[3] = "Dua Lipa";
  allBands[4] = "Drake";
  allBands[5] = "J Balvin";
  allGenres[0] = "Pop";
  allGenres[1] = "Pop";
  allGenres[2] = "R&B";
  allGenres[3] = "Pop";
  allGenres[4] = "Hip Hop";
  allGenres[5] = "Hip Hop";
  filter = window.prompt("What genre do you want to search for?");
}//end setup

function draw() {
  background(200,200,80);
  textSize(20);
  for(let i=0; i<allBands.length; i++){
    text(allBands[i]+ " " + allGenres[i], 50, i*30+100);
  }
  text("Bands in " + filter, 400, 100);
  //filtered print
  for(let i=0; i<allBands.length; i++){
    if(allGenres[i]===filter){
      text(allBands[i], 400, i*30+130);
    }
  }
}//end draw
