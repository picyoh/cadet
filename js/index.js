import { Ball, Curve } from "./GameObject.js";
import { checkCollision } from "./collision.js";

// DOM Element
export let width;
export let height;
const gravity = 9.81;
const ballCtx = document.getElementById("ball").getContext("2d");
const backCtx = document.getElementById("background").getContext("2d");
let ball;
let map;

function resizeCanvas() {
    const scene = document.getElementById("scene");
    width = scene.offsetWidth;
    height = scene.offsetHeight;
    document.querySelectorAll(".layer").forEach((layer) => {
        const canvas = document.getElementById(layer.id);
        canvas.width = width;
        canvas.height = height;
    });
}

function step() {
    ballCtx.clearRect(0, 0, width, height);
    ball.move(gravity, map);
    checkCollision(ball, map);
    ball.draw();
    requestAnimationFrame(step)
}

function startGame() {
    resizeCanvas();
    map = new Curve(backCtx, width / 2, height, "red", 10, 100);
    map.draw();
    ball = new Ball(ballCtx, width / 2, height / 2, "black", 1, 10, 0, 0, width, height);
    requestAnimationFrame(step);
}

startGame();

//TODO: add collision engine

