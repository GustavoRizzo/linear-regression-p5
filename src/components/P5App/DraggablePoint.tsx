import { P5Instance } from "react-p5-wrapper";

export default class DraggablePoint {
    _p5: P5Instance;
    pos_x: number = 0;
    pos_y: number = 0;
    radius: number = 0;
    dragging: boolean = false;

    constructor(p5: P5Instance, pos_x: number, pos_y: number, radius: number) {
        this._p5 = p5;
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.radius = radius;
        this.dragging = false;
    }

    appearance() {
        const p5 = this._p5; // to be more readable    
        p5.strokeWeight(this.radius * 2);

        if (this.dragging) {
            p5.stroke(255);
        } 
          else if (this.isMouseHover()) {
            p5.stroke(200);
        } else {
            p5.stroke(150);
        }
    }

    position() {
        const p5 = this._p5; // to be more readable
        if (this.dragging) {
            this.pos_x = p5.mouseX;
            this.pos_y = p5.mouseY;
        }
        p5.point(this.pos_x, this.pos_y);
    }

    clicked() {
        if (this.isMouseHover()) {
            this.dragging = true;
        }
    }

    isMouseHover() {
        const p5 = this._p5; // to be more readable
        var d = p5.dist(p5.mouseX, p5.mouseY, this.pos_x, this.pos_y);
        return (d < this.radius);
    }

    released() {
        this.dragging = false;
    }

    show() {
        this.appearance();
        this.position();
    }
}