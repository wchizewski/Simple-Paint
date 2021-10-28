// Simple Paint

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Variables
let mouseIsPressed = false;
let mouseX, mouseY;
let size = 5;
let penColor = "black";

// Main Program Loop (60 FPS)
requestAnimationFrame(loop);
function loop() {
    // Update Variables



    // Draw a circle if mouse is pressed
    if (mouseIsPressed) {
        ctx.fillStyle = penColor;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, size, 0, 2 * Math.PI)
        ctx.fill();
    }

    requestAnimationFrame(loop)
}

// Document Event Stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("keydown", keydownHandler);

function mousedownHandler() {
    mouseIsPressed = true;
}

function mouseupHandler() {
    mouseIsPressed = false;
}

function mousemoveHandler(event) {
    let cnvRect = cnv.getBoundingClientRect();
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
}

function keydownHandler(event) {
    console.log(event.code);

    if (event.code == "Space") {
        // Draw a background
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, cnv.width, cnv.height);
    } else if (event.code == "ArrowUp") {
        size++;
    } else if (event.code == "ArrowDown") {
        size--;
        if (size < 1) {
            size = 1
        }
    }

    // Button events
    document.getElementById("redBtn").addEventListener("click", setRed);
    document.getElementById("greenBtn").addEventListener("click", setGreen);
    document.getElementById("blueBtn").addEventListener("click", setBlue);

    function setRed() {
        penColor = "red";
    }

    function setGreen() {
        penColor = "green";
    }

    function setBlue() {
        penColor = "blue";
}
    }