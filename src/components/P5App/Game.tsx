import {  P5CanvasInstance } from "@p5-wrapper/react";
import DraggablePoint from "./DraggablePoint";
import LinearRegrassion from "./LinearRegrassion";

let listPoints: Array<DraggablePoint> = [];
let line: LinearRegrassion;

export function game (p5:  P5CanvasInstance) {
    p5.setup = () => {
        p5.createCanvas(400, 400, p5.P2D);

        // create a list of 10 draggable points
        for (var i =0 ; i < 10; i++ ) {
            var x = p5.random(p5.width);
            var y = p5.random(p5.height);
            listPoints.push(new DraggablePoint(p5, x, y, 12));
        }

        // create a line
        line = new LinearRegrassion(p5, listPoints);
    }

    p5.mousePressed = () => {
        listPoints.forEach(point => {
            point.clicked();
        });
    }

    p5.mouseReleased = () => {
        listPoints.forEach(point => {
            point.dragging = false;
        });
    }

    p5.draw = () => {
        // Make y-axis start at bottom and go up
        p5.translate(0, p5.height);
        p5.scale(1, -1);
        (p5 as any).invMouseY  = p5.height - p5.mouseY;

        p5.background(32, 37, 48);

        listPoints.forEach(point => {
            point.show();
        });

        line.update();
        line.show();
    }
}