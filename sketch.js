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

    /* input things from sensors */
    inputStuff();

    /* calculate math things first */
    calculateStuff();

    /* display what you calculated */
    displayStuff();
}

function inputStuff(){
    if (keyIsDown(LEFT_ARROW)) {
        posX -= 10;
        if (posX <= 0){
            posX = 0;
        }
    } else if(keyIsDown(RIGHT_ARROW)) {
        posX += 10;
        if (posX >= width - cursorW){
            posX = width - cursorW;
        }
    }
}



function calculateStuff(){

}


function displayStuff(){
    clear();
    background(255, 0, 100);
    rect(posX, posY, cursorW, cursorH);
}
