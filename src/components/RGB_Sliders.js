import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

function RGB_sketch(p5) {


  let r = 0;
  let g = 0;
  let b = 0;

  p5.setup = () => {
  p5.createCanvas(p5.windowWidth-300, p5.windowHeight-300);
  p5.background(170);
  p5.fill(p5.random(255), p5.random(255), p5.random(255));
  p5.noStroke();
  p5.rect(20, 20, p5.width / 2 - 20, p5.height - 40);
  };

  p5.draw = () => {
    p5.fill(r, g, b);
    p5.rect(p5.width / 2, 20, p5.width / 2 - 20, p5.height - 40);
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