/* code of the game */

var posX, posY;
var cursorW, cursorH;

function setup(){
    createCanvas(640, 480);
    fill(255);
    noStroke();

    cursorW = 50;
    cursorH = 5;
    posX = width/2 - cursorW/2;
    posY = height - 20;
}


function draw() {

    /* calculate math things first */
    calculateStuff();

    /* display what you calculated */
    displayStuff();
}

function calculateStuff(){

}


function displayStuff(){
    clear();
    background(255, 0, 100);
    rect(posX, posY, cursorW, cursorH);
}
