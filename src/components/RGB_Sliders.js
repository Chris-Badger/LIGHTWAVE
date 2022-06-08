import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

function RGB_sketch(p5) {


  let r = 0;
  let g = 0;
  let b = 0;
  let alpha = 0;
  let lfo = 0;
  let lfo_output = 0;
  let lfo_frequency = .3;

  p5.setup = () => {
  p5.createCanvas(p5.windowWidth, p5.windowHeight);
  };

  p5.draw = () => {
    p5.background(0);
    // build the LFO
    lfo = lfo + lfo_frequency;
    lfo_output = p5.sin(lfo);

    // modulate alpha with the lfo
    alpha = p5.map( lfo_output, -1, 1, 0, 255);

    // display a rectangle of color
    p5.fill(r, g, b, alpha);
    p5.rect(0 , 0, p5.width, p5.height);
    var redSlider = document.getElementById("redRange");
    var redOutput = document.getElementById("redValue");
    redOutput.innerHTML = redSlider.value; // Display the default slider value

   // Update the current slider value (each time you drag the slider handle)
    redSlider.oninput = function () {
    redOutput.innerHTML = this.value;
  };

  var greenSlider = document.getElementById("greenRange");
  var greenOutput = document.getElementById("greenValue");
  greenOutput.innerHTML = greenSlider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  greenSlider.oninput = function () {
    greenOutput.innerHTML = this.value;
  };

  var blueSlider = document.getElementById("blueRange");
  var blueOutput = document.getElementById("blueValue");
  blueOutput.innerHTML = blueSlider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  blueSlider.oninput = function () {
    blueOutput.innerHTML = this.value;
  };
  r = redSlider.value;
  g = greenSlider.value;
  b = blueSlider.value;
  };
 
}

export function RGB_SLIDERS() {
  return <ReactP5Wrapper sketch={RGB_sketch} />;
}

export default RGB_SLIDERS;