const canvas = document.getElementById("ball");
const ctx = canvas.getContext("2d");
export const radius = 10;
export let ballCtx = document.getElementById("ball").getContext("2d");

export let ball = { x: 0, y: 0, radius: radius, ctx: ballCtx };

export function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}
