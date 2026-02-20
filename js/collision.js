import { redirectBall } from "./move.js";

export function checkCollision(ball, map) {

    const alpha = ball.radius + map.radius;
    const dX = ball.x - map.x;
    const dY = ball.y - map.y;
    const sqrd = Math.sqrt(dX * dX + dY * dY);
    if (alpha > sqrd){
        redirectBall(ball, map);
    }

}