//ex6_judges
let allJudges = ["Bob", "Serena", "Steve", "Sue"];
let allScores = [];

function setup() {
  let sketch = createCanvas(800, 600);
    sketch.parent("mycanvas");
  allScores[0] = 16;
  allScores[1] = 15;
  allScores[2] = 17;
  allScores[3] = 4;
  allScores[4] = 17;
  //insert at 2
  allJudges.splice(2,0,"Diana");
  print(allJudges);
  print(allScores);
  //delete 1 thing starting at location 3
  allScores.splice(3,1);
  let total = 0;
  for (let i=0; i<allScores.length; i++){
    total += allScores[i];
  }
  print("Average Score: " + ( total/allScores.length ));
}//end setup

function draw() {
  background(100,92,80);
}//end draw
