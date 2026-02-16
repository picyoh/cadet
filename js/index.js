import { x, y, moveBall } from "./move.js";
import { collisionDetection } from "./collision.js";
import { drawBall } from "./ball.js";
import { curve, drawCurve } from "./background.js";
import { ball } from "./ball.js";
// DOM Element
export let width;
export let height

function resizeCanvas() {
    const scene = document.getElementById("scene");
    width = scene.offsetWidth;
    height = scene.offsetHeight;
    const layers = document.querySelectorAll(".layer").forEach((layer) => {
        const canvas = document.getElementById(layer.id);
        canvas.width = width;
        canvas.height = height;
    });
}

function step() {
    ball.ctx.clearRect(0, 0, width, height);
    drawBall();
    collisionDetection(ball, curve);
    moveBall();
}
function startGame() {
    requestAnimationFrame(step);
    resizeCanvas();
    drawCurve();
}

startGame();

//TODO: merge with cadetE
//TODO: add constructor to ball
//TODO: add constructor to background
//TODO: add collision engine

