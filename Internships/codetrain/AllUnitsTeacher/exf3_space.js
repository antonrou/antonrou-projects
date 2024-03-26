//Main Class
let allAliens = [];
let allBullets = [];

function setup() {
    let sketch = createCanvas(500, 500);
    sketch.parent("mycanvas");
    background(200, 0, 80);

    allAliens.push(  new Alien(20)   );
    allAliens.push(  new Alien(80)   );
    allAliens.push(  new Alien(140)   );

}//end setup

function draw(){
    background(200, 0, 80);

    for(let i=0; i<allAliens.length; i++){
        allAliens[i].display();
        allAliens[i].move();
    }
    for(let i=0; i<allBullets.length; i++){
        allBullets[i].move();

        if( allBullets[i].y < 0 ){
            allBullets.splice(i,1);
            i--;
        }
    }

    alienShot();

}//end draw

function alienShot(){

    for(let i=0; i<allAliens.length; i++){
        for(let j=0; j<allBullets.length; j++){
            if(  allAliens[i].x+40 > allBullets[j].x  &&  allAliens[i].x < allBullets[j].x+3   && allAliens[i].y+40 > allBullets[j].y && allAliens[i].y < allBullets[j].y+10 ){
                allAliens.splice(i, 1);
                allBullets.splice(j, 1);
                return;

            }

        }//end j loop
    }//end i loop
}//alienShot

function keyPressed(){
    allBullets.push(  new Bullet(250)   );
}//end keyPressed

//-------  Aliens Instance Class --------------
class Alien{
    constructor (alienx){
        this.x = alienx;
        this.y = 20;
        this.speed = 2;
    }//end constructor

    display(){
        fill(0, 0, 200);
        rect(this.x, this.y, 40, 40, 5);
    }

    move(){
        this.x += this.speed;
        if( this.x > width-50  ||  this.x<10 ){
            this.y += 60;
            this.speed *= -1;
        }

    }//end move


}//end Alien


//------------ Bullet Instance Class  -----------

class Bullet{
    constructor(bulletx){
        this.x = bulletx;
        this.y = 485;
    }

    move(){
        fill(255);
        stroke(0);
        rect(this.x, this.y, 3, 10);
        this.y -= 4;
    }


}//end Bullet
