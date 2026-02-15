
export function collisionDetection(circle1, circle2) {
    const distX = circle1.x + circle1.radius - circle2.x + circle2.radius;
    const distY = circle1.y + circle1.radius - circle2.y + circle2.radius;
    const distance = Math.sqrt(distX * distX + distY * distY);
    console.log(distance < circle1.radius + circle2.radius);
}