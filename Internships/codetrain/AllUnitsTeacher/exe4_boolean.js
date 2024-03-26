//exe4_boolean.js
// 0 1 2 3
let allNames = ["Bo","Stu","Diane", "Serena"];
let allGrades = [11, 12, 12, 11];
let allCSP = [];

function setup() {
  let sketch = createCanvas(800, 600);
    sketch.parent("mycanvas");
  for(let i=0; i<allNames.length;i++){
    allCSP.push(false);
  }  
  //splice(where,0,thingtoadd)
  allNames.splice(2, 0, "Jack", "Jill");
  allGrades.splice(2, 0, 11, 12);
  allCSP.splice(2,0, false, false);
  //remove Bo splice(where, howmany)
  allNames.splice(0,1);
  allGrades.splice(0,1);
  allCSP.splice(0,1);
  //update algorithm
  for(let i=0; i<allNames.length; i++){
    if(allGrades[i]===11){
      allCSP[i] = true;
    }
  }
}//end setup

function draw() {
  background(200,200,80);
  textSize(20);
  text("CSP Students", 50, 50);
  text("CSA Students", 350, 50);
  for(let i=0; i<allNames.length; i++){
      if( allCSP[i] ){
        text(allNames[i], 50, i*30+100)
      } else {
          text(allNames[i], 350, i*30+100)
        }
  }
}//end draw

function mousePressed() {
  for(let i=0; i<allNames.length; i++){
    if(allGrades[i]===12){
      let answer = window.prompt( allNames[i] + " do you want to write CS Principles?" );
      if(answer === "yes"){
        allCSP[i] = true;
      }
    }
  }
}//end mousePressed
