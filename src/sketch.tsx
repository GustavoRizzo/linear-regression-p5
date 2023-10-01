import React from 'react';
import { P5Wrapper } from 'react-p5-wrapper';

const Sketch = (props) => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(240);
    p5.ellipse(p5.mouseX, p5.mouseY, 50, 50);
  };

  return <P5Wrapper setup={setup} draw={draw} />;
};

export default Sketch;