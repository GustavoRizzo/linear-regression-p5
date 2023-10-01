import { ReactP5Wrapper } from "react-p5-wrapper";
import { game } from "./Game";

export default function P5App() {
    return (
        <>
            <h1>P5 App!</h1>
            <ReactP5Wrapper sketch={game} />
        </>
    )
}