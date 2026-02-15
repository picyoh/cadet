import { setDelta } from "./move.js"

export function keyDownHandler(e) {
    let value = "";
    switch (e.key) {
        case "Up":
        case "ArrowUp":
        case "w":
            value = "up";
            break;
        case "Right":
        case "ArrowRight":
        case "d":
            value = "right";
            break;
        case "Down":
        case "ArrowDown":
        case "s":
            value = "down";
            break;
        case "Left":
        case "ArrowLeft":
        case "a":
            value = "left";
            break;
        default:
            console.log("wrong key");
    }
    setDelta(value);
}

export function keyUpHandler(e) {
    let value = "";
    switch (e.key) {
        case "Up":
        case "ArrowUp":
        case "w":
            value = "down";
            break;
        case "Right":
        case "ArrowRight":
        case "d":
            value = "left";
            break;
        case "Down":
        case "ArrowDown":
        case "s":
            value = "up";
            break;
        case "Left":
        case "ArrowLeft":
        case "a":
            value = "right";
            break;
        default:
            console.log("wrong key");
    }
    setDelta(value);
}
