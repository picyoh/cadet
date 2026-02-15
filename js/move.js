import { width, height, radius } from "./index.js";

export let x = width / 2;
export let y = height / 2;
export let dx = 0;
export let dy = 0;
const gravity = 1;

export function setDelta(value) {
    switch (value) {
        case "up":
            dy--;
            break;
        case "right":
            dx++;
            break;
        case "down":
            dy++;
            break;
        case "left":
            dx--;
            break;
        default:
            console.log("Wrong move direction");
            break;
    }
}

export function moveBall() {
    const prevX = x + dx;
    const prevY = y + dy + gravity;

    // X limit
    if (prevX > width - radius || prevX < radius) {
        dx = -dx;
    }
    // Y limit
    if (prevY > height - radius || prevY < radius) {
        dy = - dy - gravity;
    }
    // Move
    x += dx;
    y += dy + gravity;
}