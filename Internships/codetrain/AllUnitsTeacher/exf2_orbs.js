let allOrbs = [];
let numCircles;


function setup() {
    let sketch = createCanvas(400, 400);
    sketch.parent("mycanvas");
    background(50, 150, 80);

    numCircles = random(2, 8);

    for (let i = 0; i < numCircles; i++) {
        allOrbs.push(new Orb());

    }

}//setup

function draw() {
    background(150, 150, 80);
    for (let i = 0; i < allOrbs.length; i++) {
        allOrbs[i].display();
    }

}

// function mousePressed(){
//     for(let i=0; i<allOrbs.length; i++){
//         if(  allOrbs[i].clickedOn()  ){
//             allOrbs.splice(i,1);
//             return;
//         }
//     }
// }//end mousePressed

function mouseDragged() {
    for (let i = 0; i < allOrbs.length; i++) {
        if (allOrbs[i].clickedOn()) {
            allOrbs[i].move(mouseX, mouseY);
        }
    }
}//end mouseDragged

// ***************************  Orbs Instance Class  **************
class Orb {
    constructor() {

        this.x = random(width);
        this.y = random(height);
        this.diameter = random(50, 200);
        this.col = color(random(255), random(255), random(255), 150); //fourth number is transparency
    }//end constructor

    display() {
        fill(this.col);
        circle(this.x, this.y, this.diameter);

    }//end display

    clickedOn() {
        if (dist(this.x, this.y, mouseX, mouseY) < this.diameter / 2) {
            print("Clicked");
            return true;
        } else {
            return false;
        }
    }//end clickedOn

    move(newx, newy) {
        this.x = newx;
        this.y = newy;
    }

}//end Orb class

