let player1;

function setup() {
    let sketch = createCanvas(800, 600);
    sketch.parent("mycanvas");

    player1 = new Snake(200, 200, 1);

}//setup

function draw() {
    background(50, 150, 80);
    player1.display();

}//end draw

function keyPressed() {

    if (key == 'w' || keyCode === UP_ARROW) {
        player1.xspeed = 0;
        player1.yspeed = -2;
    } else
        if (key == 'a') {
            player1.xspeed = -2;
            player1.yspeed = 0;
        }
        else if (key == 's') {
            player1.xspeed = 0;
            player1.yspeed = 2;
        }
        else if (key == 'd') {
            player1.xspeed = +2;
            player1.yspeed = 0;
        }

}//end keyPressed

//  Snake Instance Class
class Snake {
    constructor(x, y, id) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.col = color(random(255), random(255), random(255))
        this.xspeed = 2;
        this.yspeed = 0;

        this.tail = [];

        for (let i = 0; i < 50; i++) {
            this.tail.push(new Tail(this.x, this.y, this.id, this.col));
        }

    }//end constructor

    display() {
        this.x += this.xspeed;
        this.y += this.yspeed;

        fill(this.col);
        noStroke();
        circle(this.x, this.y, 20);

        this.tail.push(new Tail(this.x, this.y, this.id, this.col));
        this.tail.splice(0, 1);

        for (let i = 0; i < this.tail.length; i++) {
            this.tail[i].display(i);
        }

    }//end display

}//end Snake

// Tail Instance Class
class Tail {
    constructor(x, y, id, col) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.col = col;

    }
    display(tsize) {
        fill(this.col);
        noStroke();
        // circle(this.x, this.y, tsize/2);
        circle(this.x, this.y, 10);
    }
}//end Tail
