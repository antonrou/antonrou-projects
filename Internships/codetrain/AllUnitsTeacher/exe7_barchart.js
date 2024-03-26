let allNames = ["Davies", "David", "Hoilett",
"Sinclair","Catliff"];
let allGoals = [8, 16, 13, 187, 22];
function setup() {
let sketch = createCanvas(800, 600);
sketch.parent("mycanvas");
}//end setup
function draw() {
background(200,200,80);
strokeWeight(3);
line(100, 100, 700, 100);
line(100, 100, 100, 500);
for(let i=0; i<225; i+=25){
text(i, 30, i*2+100);
line(100, i*2+100,105, i*2+100 )
}

//labels
textSize(15);
for(let i=0; i<allNames.length; i++){
text(allNames[i], i*100+150, 90);
}
//bars
for(let i=0; i<allNames.length; i++){
rect(i*100+150, 100, 50, allGoals[i]*2 );
}
}//end draw
