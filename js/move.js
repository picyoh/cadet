import { width, height, radius } from "./index.js";

export let x = width / 2;
export let y = height -30;
export let dx = 0;
export let dy = 0;

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

export function MoveBall() {
    // X limit
    if (x + dx > width - r || x + dx < r) {
        dx = -dx;
    }
    // Y limit
    if (y + dy > height - r || y + dy < r) {
        dy = -dy;
    }
    // Move
    x += dx;
    y += dy;
}