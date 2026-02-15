import { x, y, moveBall } from "./move.js"
import { collisionDetection } from "./collision.js";
// DOM Element
const canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

export const width = canvas.width;
export const height = canvas.height;
export const radius = 10;

let ball = { x: 0, y: 0, radius: radius }; 
let curve = { x: width / 2 , y: height/ 2, radius: 150 };

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    ball = {x: x, y: y, radius: radius}
}

function drawCurve() {
    ctx.beginPath();
    ctx.arc(width / 2, height,100, 0, Math.PI * 2, false);
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    drawCurve()
    drawBall();
    collisionDetection(ball, curve);
    moveBall();
}

function startGame() {
    setInterval(draw, 10);
    drawCurve();
}

startGame();