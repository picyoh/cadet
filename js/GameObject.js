class GameObjects {
    constructor(ctx, x, y, color, mass) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.color = color;
        this.mass = mass;
    }
}

export class Ball extends GameObjects {
    constructor(ctx, x, y, color, mass, radius, dx, dy, width, height) {
        super(ctx, x, y, color, mass);
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.width = width;
        this.height = height;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    move(gravity) {
        const prevX = Math.floor(this.x + this.dx);
        const prevY = Math.floor(this.y + this.dy + gravity);
        const width = this.ctx.width;
        const height = this.ctx.height;

        // X limit
        if (prevX > this.width - this.radius || prevX < this.radius) {
            this.dx = - this.dx;
        }
        // Y limit
        if (prevY > this.height - this.radius || prevY < this.radius) {
            this.dy = - this.dy - gravity;
        }
        // Move
        this.x += Math.floor(this.dx);
        this.y += Math.floor(this.dy + gravity);
    }
}

export class Curve extends GameObjects {
    constructor(ctx, x, y, color, mass, radius) {
        super(ctx, x, y, color, mass);
        this.radius = radius;
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.ctx.strokeStyle = this.color;
        this.ctx.stroke();
        this.ctx.closePath();
    }
}