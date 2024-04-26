const resizerBar = document.getElementById("resizer");
const resizableDiv = document.getElementById("resizable");
let viewportWidth = window.innerWidth;
let xPositionOfPointer, resizableWidth;

function onMouseUp() {
    resizerBar.style.cursor = "pointer";
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("touchend", onMouseUp);
    document.removeEventListener("touchmove", onMouseMove);
}

function onMouseDown(event) {
    if (event.clientX) {
        xPositionOfPointer = event.clientX;
    } else {
        xPositionOfPointer = event.changedTouches[0].clientX;
    }

    resizerBar.style.cursor = "grabbing";
    let upperWidth = window.getComputedStyle(resizableDiv).width;
    resizableWidth = parseInt(upperWidth);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchend", onMouseUp);
    document.addEventListener("touchmove", onMouseMove);
}

function onMouseMove(event) {
    let newXPosition;
    if (event.clientX) {
        newXPosition = event.clientX - xPositionOfPointer;
    } else {
        newXPosition = event.changedTouches[0].clientX - xPositionOfPointer;
    }

    let newWidth = resizableWidth + newXPosition;

    if (newWidth < viewportWidth - 26 && newWidth > 16) {
        resizableDiv.style.width = `${newWidth}px`;
    }
}

resizerBar.addEventListener("mousedown", onMouseDown);
resizerBar.addEventListener("touchstart", onMouseDown);