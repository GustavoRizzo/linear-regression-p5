import { P5Instance } from "react-p5-wrapper";
import Ball from "./Ball";

let ball: Ball;

export function game (p5: P5Instance) {
    p5.setup = () => {
      p5.createCanvas(400, 400, p5.P2D);
      ball = new Ball(p5, 200, 200, 50);
    }

    p5.draw = () => {
        p5.background(111);
        ball.update();
        ball.show();
    }
}