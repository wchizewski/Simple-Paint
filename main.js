// Simple Paint

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let mouseIsPressed = false;
let mouseX, mouseY, pmouseX, pmouseY;
let size = 5;
let penColor = "black";

// Main Program Loop (60 FPS)
requestAnimationFrame(loop);
function loop() {
    // Draw a circle if mouse is pressed
    if (mouseIsPressed) {
        ctx.strokeStyle = penColor;
        ctx.lineWidth = size
        ctx.beginPath();
        ctx.moveTo(pmouseX, pmouseY);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
    }

    requestAnimationFrame(loop)
}

// Color events
document.getElementById("redBtn").addEventListener("click", setRed);
document.getElementById("greenBtn").addEventListener("click", setGreen);
document.getElementById("blueBtn").addEventListener("click", setBlue);
document.getElementById("colorPicker").addEventListener("change", changeColor);

function setRed() {
    penColor = "red";
}

function setGreen() {
    penColor = "green";
}

function setBlue() {
    penColor = "blue";
}

function changeColor() {
    penColor = document.getElementById("colorPicker").value;
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
    // Save previous mouse x and y
    pmouseX = mouseX;
    pmouseY = mouseY;

    let cnvRect = cnv.getBoundingClientRect();
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
}



function keydownHandler(event) {
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
    } else if (event.code == "Digit1") {
        penColor = "red";
    } else if (event.code == "Digit2") {
        penColor = "green";
    } else if (event.code == "Digit3") {
        penColor = "blue";
    }
}
