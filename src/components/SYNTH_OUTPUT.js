import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

function RGB_sketch(p5) {

  let r = 0;
  let g = 0;
  let b = 0;
  let alpha = 255;
  let whiteLevel = 0;
  // Declare Alfa Mod Variables
  let lfo = 0;
  let lfo_output = 0;
  let lfo_frequency = 0;
  // Declare red Mod Variables
  let lfo2 = 0;
  let lfo2_output = 0;
  let lfo2_frequency = 0;
  // Declare green Mod Variables
  let lfo3 = 0;
  let lfo3_output = 0;
  let lfo3_frequency = 0;
  // Declare blue Mod Variables
  let lfo4 = 0;
  let lfo4_output = 0;
  let lfo4_frequency = 0;
  // Declare White Mod Variables
  let lfo5 = 0;
  let lfo5_output = 0;
  let lfo5_frequency = 0;






  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);

  };

  p5.draw = () => {
    p5.background(0);

    // build the alpha Mod LFO
    lfo = lfo + lfo_frequency;
    lfo_output = p5.sin(lfo);

    // build the red Mod LFO2
    lfo2 = lfo2 + lfo2_frequency;
    lfo2_output = p5.sin(lfo2);

    // build the green Mod LFO3
    lfo3 = lfo3 + lfo3_frequency;
    lfo3_output = p5.sin(lfo3);

    // build the green Mod LFO4
    lfo4 = lfo4 + lfo4_frequency;
    lfo4_output = p5.sin(lfo4);

    // build the White Mod LFO5
    lfo5 = lfo5 + lfo5_frequency;
    lfo5_output = p5.sin(lfo5);
    //////////////////////////////////////////
    // display a rectangle of color
    p5.fill(r, g, b, alpha);
    p5.rect(0, 0, p5.width, p5.height);
    // Display White
    console.log(whiteLevel);
    p5.fill(255, 255, 255, whiteLevel);
    console.log(whiteLevel);
    p5.rect(0, 0, p5.width, p5.height);
    ///////////////////////////////////////////

    // conect RGB sliders 
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

    var whiteSlider = document.getElementById("whiteRange");
    var whiteOutput = document.getElementById("whiteValue");
    whiteOutput.innerHTML = whiteSlider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    whiteSlider.oninput = function () {
      whiteOutput.innerHTML = this.value;
    };

    // conect the alpha Mod lfo frequency slider 
    var frequency_slider = document.getElementById("frequency_range");
    var frequency_slider_output = document.getElementById("lfo_value");
    frequency_slider_output.innerHTML = frequency_slider.value; // Display the default slider value

    // conect the red Mod lfo2 frequency slider 
    var frequency_slider2 = document.getElementById("frequency_range2");
    var frequency_slider2_output = document.getElementById("lfo2_value");
    frequency_slider2_output.innerHTML = frequency_slider2.value; // Display the default slider value

    // conect the green Mod lfo3 frequency slider 
    var frequency_slider3 = document.getElementById("frequency_range3");
    var frequency_slider3_output = document.getElementById("lfo3_value");
    frequency_slider3_output.innerHTML = frequency_slider3.value; // Display the default slider value

    // conect the blue Mod lfo4 frequency slider 
    var frequency_slider4 = document.getElementById("frequency_range4");
    var frequency_slider4_output = document.getElementById("lfo4_value");
    frequency_slider4_output.innerHTML = frequency_slider4.value; // Display the default slider value

    // conect the blue Mod lfo4 frequency slider 
    var frequency_slider5 = document.getElementById("frequency_range5");
    var frequency_slider5_output = document.getElementById("lfo5_value");
    frequency_slider5_output.innerHTML = frequency_slider5.value; // Display the default slider value


    // Update the alpha Mod slider value (each time you drag the slider handle)
    frequency_slider.oninput = function () {
      frequency_slider_output.innerHTML = this.value;
    };

    // Update the red Mod slider value (each time you drag the slider handle)
    frequency_slider2.oninput = function () {
      frequency_slider2_output.innerHTML = this.value;
    };

    // Update the green Mod slider value (each time you drag the slider handle)
    frequency_slider3.oninput = function () {
      frequency_slider3_output.innerHTML = this.value;
    };

    // Update the blue Mod slider value (each time you drag the slider handle)
    frequency_slider4.oninput = function () {
      frequency_slider4_output.innerHTML = this.value;
    };

    r = redSlider.value;
    g = greenSlider.value;
    b = blueSlider.value;
    whiteLevel = whiteSlider.value;
    lfo_frequency = frequency_slider.value / 1000;
    lfo2_frequency = frequency_slider2.value / 1000;
    lfo3_frequency = frequency_slider3.value / 1000;
    lfo4_frequency = frequency_slider4.value / 1000;
    lfo5_frequency = frequency_slider5.value / 1000;

    // modulate alpha with the lfo
    alpha = p5.map(lfo_output, -1, 1, 0, 255);
    // set default alpha value
    if (frequency_slider.value == 0) {
      alpha = 255;
    }

    // modulate red with  lfo2
    r = p5.map(lfo2_output, -1, 1, 0, redSlider.value);
    // set default alpha value
    if (frequency_slider2.value == 0) {
      r = redSlider.value;
    }

    // modulate green with  lfo3
    g = p5.map(lfo3_output, -1, 1, 0, greenSlider.value);
    // set default alpha value
    if (frequency_slider3.value == 0) {
      g = greenSlider.value;
    }

    // modulate blue with  lfo4
    b = p5.map(lfo4_output, -1, 1, 0, blueSlider.value);
    // set default alpha value
    if (frequency_slider4.value == 0) {
      b = blueSlider.value;
    }
    // modulate White with  lfo5
    whiteLevel = p5.map(lfo5_output, -1, 1, 0, whiteSlider.value);
    // set default white value
    if (frequency_slider5.value === 0) {
      whiteLevel = whiteSlider.value;
    }




  };

}

export function SYNTH_OUTPUT() {
  return <ReactP5Wrapper sketch={RGB_sketch} />;
}

export default SYNTH_OUTPUT;