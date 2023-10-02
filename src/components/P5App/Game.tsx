import { P5Instance } from "react-p5-wrapper";
import Ball from "./Ball";
import DraggablePoint from "./DraggablePoint";

let ball: Ball;
let draggablePoint1: DraggablePoint;
let draggablePoint2: DraggablePoint;

export function game (p5: P5Instance) {
    p5.setup = () => {
        p5.createCanvas(400, 400, p5.P2D);
        ball = new Ball(p5, 200, 200, 50);
        draggablePoint1= new DraggablePoint(p5, 100, 100, 10);
        draggablePoint2= new DraggablePoint(p5, 300, 300, 10);
    }

    p5.mousePressed = () => {
        draggablePoint1.clicked();
        draggablePoint2.clicked();
    }

    p5.mouseReleased = () => {
        draggablePoint1.dragging = false;
        draggablePoint2.dragging = false;
    }

    p5.draw = () => {
        p5.background(111);
        ball.update();

        ball.show();
        draggablePoint1.show();
        draggablePoint2.show();
    }
}