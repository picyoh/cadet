// DOM Element
const canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");


export const width = canvas.width;
export const height = canvas.height;
export const radius = 10;
let x = width / 2;
let y = height - 30;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    drawBall();
}

function startGame() {
    setInterval(draw, 10);
}

startGame();