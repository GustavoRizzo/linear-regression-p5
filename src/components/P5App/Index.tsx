import { ReactP5Wrapper } from "@p5-wrapper/react";
import { sketch } from "./Sketch";
import './style.css';

export default function P5App() {

    return (
        <div className="container">
            <div className="content">
                <h1>Linear Regression with p5.js Visualization</h1>
                <h2 className="instructions">Please drag and drop the points, the algorithm will recalculate the results in real time!</h2>
                <ReactP5Wrapper sketch={sketch} />                
                <h2>Linear Regrassion</h2>
                <p>Line equation: y = mx + b</p>
                <p>The <span style={{ color: 'rgb(228, 47, 249)' }}>pink line</span> is the result of a Linear regression.
                    It is a mathematical technique that aims to find the line that best fits a set of previously known data, minimizing the quadratic error between observed values and predicted values. This approach, unlike AI, doesn't require any kind of training. Deterministically, it always yields the same result for a given set.
                </p>
            </div>
        </div>
    )
}