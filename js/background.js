import { width, height } from "./index.js";
export let bckCtx = document.getElementById("background").getContext("2d");
export let curve = { x: 0, y: 0, radius: 0, ctx: bckCtx};
export function drawCurve() {

    bckCtx.beginPath();
    bckCtx.arc(width / 2, height, 100, 0, Math.PI * 2, false);
    bckCtx.strokeStyle = "red";
    bckCtx.stroke();
    bckCtx.closePath();
    curve = { x: width / 2, y: height, radius: 100 };
}