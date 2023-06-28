export class StarPoint {
  x: number;
  y: number;
  xSpeed: number;
  ySpeed: number;

  constructor(_x: number, _y: number, _xSpeed: number, _ySpeed: number) {
    this.x = _x;
    this.y = _y;
    this.xSpeed = _xSpeed;
    this.ySpeed = _ySpeed;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const xNoise = Math.random() * 0.5 - 0.25;
    const yNoise = Math.random() * 0.5 - 0.25;

    this.x += this.xSpeed + xNoise;
    this.y += this.ySpeed + yNoise;

    if (this.x < 1 || this.x > ctx.canvas.width - 1) {
      this.xSpeed = -this.xSpeed;
    }

    if (this.y < 1 || this.y > ctx.canvas.height - 1) {
      this.ySpeed = -this.ySpeed;
    }

    if (this.x < 0) {
      this.x = 2;
    }

    if (this.x > ctx.canvas.width) {
      this.x = ctx.canvas.width - 2;
    }

    if (this.y < 0) {
      this.y = 2;
    }

    if (this.y > ctx.canvas.height) {
      this.y = ctx.canvas.height - 2;
    }

    ctx.beginPath();
    ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }
}
