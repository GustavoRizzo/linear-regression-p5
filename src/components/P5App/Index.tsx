import { ReactP5Wrapper } from "@p5-wrapper/react";
import { game } from "./Game";

export default function P5App() {

    return (
        <>
            <h1>P5 App!</h1>
            <ReactP5Wrapper sketch={game} />
            <p>Drag the points around!</p>
            <h2>Linear Regrassion</h2>
            <p>Line equation: y = mx + b</p>
            <p>The <span style={{ color: 'rgb(228, 47, 249)' }}>pink line</span> is the result of a Linear regression.
                It is a mathematical technique that aims to find the line that best fits a set of previously known data, minimizing the quadratic error between observed values and predicted values. This approach, unlike AI, doesn't require any kind of training. Deterministically, it always yields the same result for a given set.
            </p>
        </>
    )
}