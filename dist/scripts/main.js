const resizerDiv = document.getElementById("resizer");
const resizableDiv = document.getElementById("resizable");
let viewportWidth = window.innerWidth;
let xPositionOfPointer, resizableWidth;

function initContentResizer(resizer, resizable) {
    function onMouseDown(e) {
        xPositionOfPointer = e.clientX;
        resizer.style.cursor = "grabbing";
        let upperWidth = window.getComputedStyle(resizable).width;
        resizableWidth =  parseInt(upperWidth);

        document.addEventListener("mousemove", onMouseMove)
        document.addEventListener("mouseup", onMouseUp)
    }

    function onMouseMove(e) {
        let newXPosition = e.clientX - xPositionOfPointer;
        let newWidth = resizableWidth + newXPosition;

        if (newWidth < viewportWidth-20 && newWidth > 5) {
            resizable.style.width = `${newWidth}px`
        }
    }

    function onMouseUp() {
        resizer.style.cursor = "pointer";
        document.removeEventListener("mousemove", onMouseMove)
        document.removeEventListener("mouseup", onMouseUp)
    }

    resizer.addEventListener("mousedown", onMouseDown);
}

initContentResizer(resizerDiv, resizableDiv);