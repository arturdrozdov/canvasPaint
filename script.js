const canvas = document.querySelector('#canvas');
const size = document.querySelector('.size');
const color = document.querySelector('.color');
const paintTopInner = document.querySelector('.paint-top');

const context = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 500;

let drawing = false;
let linecolor = 'black';
let lineSize = 5;

function startPos() {
    drawing = true;
    context.stroke();
}

function finishPos() {
    drawing = false;
    context.beginPath();
}

function draw(e, ) {
    if (!drawing) return;
    context.lineWidth = lineSize;
    context.strokeStyle = linecolor;
    context.lineCap = 'round';
    context.lineTo(e.layerX, e.layerY);
    context.stroke();
    context.beginPath();
    context.moveTo(e.layerX, e.layerY);
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    linecolor = 'black';
    lineSize = 5;
    color.innerText='b';
    size.innerText='s';
    color.style.backgroundColor = 'black';
}


function changeLine(e) {
    switch (e.target.innerText.toLowerCase()) {
        case 's':
            lineSize = 5;
            size.innerText=e.target.innerText.toLowerCase();
            break;
        case 'm':
            lineSize = 15;
            size.innerText=e.target.innerText.toLowerCase();
            break;
        case 'l':
            lineSize = 20;
            size.innerText=e.target.innerText.toLowerCase();
            break;
        case 'red':
            linecolor = e.target.innerText.toLowerCase();
            color.innerText=e.target.innerText.toLowerCase()[0];
            color.style.backgroundColor = 'red';
            break;
        case 'blue':
            linecolor = e.target.innerText.toLowerCase();
            color.innerText=e.target.innerText.toLowerCase()[0];
            color.style.backgroundColor = 'blue';
            break;
        case 'green':
            linecolor = e.target.innerText.toLowerCase();
            color.innerText=e.target.innerText.toLowerCase()[0];
            color.style.backgroundColor = 'green';
            break;
        case 'clear':
            clearCanvas();
            break;

        default:
            break;
    }
}

canvas.addEventListener('mousedown', startPos);
canvas.addEventListener('mouseup', finishPos);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseout', finishPos);
paintTopInner.addEventListener('click', changeLine);