//ex11_GameSales.js
//This example focuses on more advanced algorithms including a SEARCH function
//data from https://en.wikipedia.org/wiki/List_of_best-selling_video_games

let allGames = ["Grand Theft Auto V","Pac-Man","Tetris (EA Mobile)","PlayerUnknown's Battlegrounds","Super Mario Bros","Pokémon (Game Boy)","Mario Kart 8","Wii Fit","Red Dead Redemption 2","Mario Kart Wii","Terraria","Minecraft","Animal Crossing: New Horizons","Wii Sports"];
let allSales = [150000000, 40955092,100000000, 70000000, 58000000,47520000 ,45530000 , 43800000, 38000000,37380000 ,35000000,238000000 ,33890000 , 82900000 ];
let allPublish = ["Rockstar Games","Namco","Electronic Arts","PUBG Corporation","Nintendo","Nintendo","Nintendo","Nintendo","Rockstar Games","Nintendo","Re-Logic / 505 Games","Mojang Studios","Nintendo","Nintendo"];
let allYears = [2013,1980,2006,2017,1985,1996,2014,2007,2018,2008,2011, 2011,2020,2006];

function setup() {
  let sketch = createCanvas(800, 600);
    sketch.parent("mycanvas");
  for(let i=0;i<allGames.length; i++){
    print(allGames[i] + " " + allPublish[i] + " " + allSales[i] + " " + allYears[i]);
  }
}//end setup

function draw(){
  background(255);
  textSize(20);
  //*********** Filter Print (with spacing) ***********
  text("All Nintendo Games", 20, 30);
  let printy = 60;
  for(let i=0; i<allGames.length; i++){
    if(allPublish[i]==="Nintendo"){
      text(allGames[i], 20, printy);
      printy += 25;
  }
  }
//***************** CountIF ***************************
  let counter = 0;
  for(let i=0; i<allGames.length; i++){
    if( allYears[i]>=2000 && allYears[i]<2010 ){
      counter++;
    }
  }
  text("The number of games from the 2000s is " + counter, 20, 300);

//***************** SumIF ***************************
  let totalSales = 0;
  for(let i=0; i<allGames.length; i++){
    if( allYears[i]>=2000 && allYears[i]<2010 ){
      totalSales += allSales[i];
    }
  }
  text("The total sales from the 2000s is " + totalSales, 20, 330);
  //***************** Find the Lowest ***************************
  let lowestIndex = 0;
  let lowestSales = allSales[lowestIndex];
  for(let i=0; i<allGames.length; i++){
    if( allSales[i] < lowestSales ){
      lowestIndex = i;
      lowestSales = allSales[lowestIndex];
    }
  }
  text("The game with the lowest sales is " + allGames[lowestIndex], 20, 400);
  text("Type S to search for a game.", 20, 450);
}//end draw

function keyPressed() {
  if(key==='s'){
    let gameToFind = window.prompt("What game are you searching for?");
    let foundIndex = linearSearch( allGames, gameToFind );
  if( foundIndex === -1){
    window.alert("Not found");
  } else {
    window.alert( gameToFind + " Published by: " +
    allPublish[foundIndex] + "\nYear Released: " +
    allYears[foundIndex] );
    }
  }
}//end keyPressed

function linearSearch( array, searchTerm ){
  for(let i=0; i<array.length; i++){
    if(array[i].toLowerCase() === searchTerm.toLowerCase() ){
      return i;
    }
  }
return -1;
}//end linearSearch