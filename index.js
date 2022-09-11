//Make a p5.js sketch that uses an "if" statement and the random() 
//function, that includes proper commenting.

/*
Represents a dandruff
    -getter all method to return current state
    -update() method to update this x, y, and size values
    -display() method to be used in draw() function

~~~ The idea was to create an array of dandruff and pop out the oldest whenever too many 
~~~ populated the screen. Maybe i'll do that later...
*/
class Dandruff {
    constructor(width, height){
        var rsize = Math.random()*20+5;
        var rx = Math.random()*width+rsize;
        var ry = Math.random()*height+rsize;
        this.x=rx;
        this.y=ry;
        this.size=rsize;
    }

    /**
     * Returns array of this x, y, and size
     */
    get all(){
        return [this.x, this.y, this.size];
    }

    /**
     * Updates this x, y, and size values
     */
    update(x,y,size){
        this.x=x;
        this.y=y;
        this.size=size;
    }

    /**
     * Used in draw() function to display white circle @ this x and y
     */
    display() {
        circle(this.x, this.y, this.size);
    }
}

//Not being used currently.
//var dandruffs = []

//instantiates "d" to be used as a global variable
var d;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    d = new Dandruff(windowWidth - 20,windowHeight-20);
    
}

function draw() {

    //The following block is used to update the x,y, and size values 
    //for the "d" object after it's displayed.
    var rsize = random()*20+5;
    var rx = random(rsize, windowWidth - rsize);
    var ry = random(rsize, windowHeight - rsize);

    //Displays then updates "d" object
    d.display();
    d.update(rx,ry,rsize);
}