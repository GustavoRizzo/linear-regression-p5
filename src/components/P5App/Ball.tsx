import { P5Instance } from "react-p5-wrapper";

export default class Ball {
    _p5: P5Instance;
    pos_x: number = 0;
    pos_y: number = 0;
    diameter: number = 0;
    radius: number = 0;

    constructor(p5: P5Instance, pos_x: number, pos_y: number, diameter: number) {
        this._p5 = p5;
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.diameter = diameter;
        this.radius = diameter/2;
    }

    update() {
        this.pos_y += 1;  // fall, beacuse the positive y-axis is pointing down
        // Cant pass the bottom of the screen
        if (this.pos_y+this.radius > this._p5.height) {
            this.pos_y = this._p5.height-this.radius;
        }
    }

    show() {
        const p5 = this._p5; // to be more readable
        p5.fill(255, 0, 0);
        p5.strokeWeight(0)
        p5.ellipse(this.pos_x, this.pos_y, this.diameter, this.diameter);
    }
}