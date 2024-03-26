let allFish = [];

function setup() {
    let sketch = createCanvas(800, 600);
    sketch.parent("mycanvas");
    background(200, 0, 80);
    allFish.push(new Fish(100, 200, random(50, 100)));
}//end setup

function draw() {
    background(200, 0, 80);
    for (let i = 0; i < allFish.length; i++) {
        allFish[i].display();
        allFish[i].move();

    }


}//end draw

function mousePressed() {
    allFish.push(new Fish(mouseX, mouseY, random(50, 100)));

}//end mousePressed

class Fish {
    constructor(x, y, l) {
        this.centerX = x;
        this.centerY = y;
        this.bodyLength = l;
        this.speed = random(0, 3);

    }

    display() {
        var bodyHeight = this.bodyLength * 0.6;
        var bodyColor = color(162, 0, random(255));

        noStroke();
        fill(bodyColor);
        // body
        ellipse(this.centerX, this.centerY, this.bodyLength, bodyHeight);
        // tail
        var tailWidth = this.bodyLength / 4;
        var tailHeight = bodyHeight / 2;
        triangle(this.centerX - this.bodyLength / 2, this.centerY,
            this.centerX - this.bodyLength / 2 - tailWidth, this.centerY - tailHeight,
            this.centerX - this.bodyLength / 2 - tailWidth, this.centerY + tailHeight);
        // eye
        fill(33, 33, 33);
        ellipse(this.centerX + this.bodyLength / 4, this.centerY, bodyHeight / 5, bodyHeight / 5);
        //fish code based on: https://www.khanacademy.org/computing/computer-programming/programming/functions/pp/project-fish-tank
    }

    move() {
        this.centerX += this.speed;
        if (this.centerX > width) {
            this.centerX = -50;
            this.centerY = random(height)
        }
    }

}//end fish class
