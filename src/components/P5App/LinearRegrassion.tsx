import {  P5CanvasInstance } from "@p5-wrapper/react";
import DraggablePoint from "./DraggablePoint";

export default class LinearRegrassion {
    _p5:  P5CanvasInstance;
    m: number = 1;
    b: number = 0;
    listPoints: Array<DraggablePoint> = [];
    x_ini: number = 0;
    y_ini: number = 0;
    x_end: number = 0;
    y_end: number = 0;

    constructor(p5:  P5CanvasInstance, listPoints: Array<DraggablePoint>) {
        this._p5 = p5;
        this.listPoints = listPoints;
    }

    avgX() {
        var sum = 0;
        this.listPoints.forEach(point => {
            sum += point.pos_x;
        });
        return sum / this.listPoints.length;
    }

    avgY() {
        var sum = 0;
        this.listPoints.forEach(point => {
            sum += point.pos_y;
        });
        return sum / this.listPoints.length;
    }

    update_linear_regrassion() {
        var num: number = 0;
        var den: number = 0;
        this.listPoints.forEach(point => {
            num += (point.pos_x - this.avgX()) * (point.pos_y - this.avgY());
            den += (point.pos_x - this.avgX()) * (point.pos_x - this.avgX());
        });
        this.m = num / den;
        this.b = this.avgY() - this.m * this.avgX();
    }

    update() {
        if (this.listPoints.length > 1) {
            this.update_linear_regrassion();
        }
        this.x_ini = 0;
        this.y_ini = this.m * this.x_ini + this.b;
        this.x_end = this._p5.width;
        this.y_end = this.m * this.x_end + this.b;  
    }

    show() {
        const p5 = this._p5; // to be more readable     

        p5.stroke(228, 47, 249)
        p5.strokeWeight(2);
        p5.line(this.x_ini, this.y_ini, this.x_end, this.y_end);
    }
}