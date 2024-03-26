let allNames = ["Serena", "Marco", "Amrit"];
let allPass = ["1234", "1235", "1236"];
let allBalances = [500, 123.50, 100];
function setup() {
    let sketch = createCanvas(800, 600);
    sketch.parent("mycanvas");
    background(200,0,80);
    textSize(15);
    fill(255);
    text("Press e to enter your account info.", 50, 100);
}
function draw() {
    //leave draw empty
}//end draw
function keyPressed() {
    background(200,0,80);
    textSize(15);
    fill(255);
    text("Press e to enter your account info.", 50, 100);
    if(key==='e'){
        let account = window.prompt("What is your username?");
        let pass = window.prompt("What is your password?");
    }
}
