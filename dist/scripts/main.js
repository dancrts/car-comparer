const resizerBar = document.getElementById("resizer");
const resizableDiv = document.getElementById("resizable");
let viewportWidth = window.innerWidth;
let xPositionOfPointer, resizableWidth;

function onMouseUp() {
    resizerBar.style.cursor = "pointer";
    document.removeEventListener("mousemove", onMouseMove)
    document.removeEventListener("mouseup", onMouseUp)
}

function onMouseDown(event) {
    xPositionOfPointer = event.clientX;
    resizerBar.style.cursor = "grabbing";
    let upperWidth = window.getComputedStyle(resizableDiv).width;
    resizableWidth =  parseInt(upperWidth);

    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseup", onMouseUp)
}

function onMouseMove(event) {
    let newXPosition = event.clientX - xPositionOfPointer;
    let newWidth = resizableWidth + newXPosition;

    if (newWidth < viewportWidth-20 && newWidth > 5) {
        resizableDiv.style.width = `${newWidth}px`
    }
}

resizerBar.addEventListener("mousedown", onMouseDown);