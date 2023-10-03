import { ReactP5Wrapper } from "react-p5-wrapper";
import { game } from "./Game";
import { useState, useEffect } from "react"

export default function P5App() {

    const [idade, setIdade] = useState<number | null>(null);
    const timer_ms = 300;

    useEffect(() => {
      const interval = setInterval(() => {
        const idadeFromLocalStorage = localStorage.getItem('idade');
        if (idadeFromLocalStorage) {
          setIdade(parseInt(idadeFromLocalStorage, 10));
        }
      }, timer_ms);
  
      // Limpar o intervalo quando o componente for desmontado para evitar vazamento de memória
      return () => clearInterval(interval);
    }, []); // O array vazio como segundo argumento faz com que este efeito só seja executado uma vez após a montagem do componente

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