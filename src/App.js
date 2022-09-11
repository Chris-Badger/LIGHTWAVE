import SYNTH_OUTPUT from './components/SYNTH_OUTPUT';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        L I G H T  W A V E
      </header>

      <div class="grid-container">
        <div class="item1"><div class="slidecontainer" >
          <input type="range" min="0" max="255" defaultValue="0" class="slider" id="redRange" />
        </div></div>
        <div class="item9"><div class="slidecontainer" >
          <input type="range" min="0" max="1000" defaultValue="0" class="slider" id="frequency_range2" />
        </div></div>
        <div class="item2"><div class="slidecontainer">
          <input type="range" min="0" max="255" defaultValue="0" class="slider" id="greenRange" />
        </div></div>
        <div class="item12"><div class="slidecontainer">
          <input type="range" min="0" max="1000" defaultValue="0" class="slider" id="frequency_range3" />
        </div></div>
        <div class="item3"><div class="slidecontainer">
          <input type="range" min="0" max="255" defaultValue="0" class="slider" id="blueRange" />
        </div></div>
        <div class="item13"><div class="slidecontainer">
          <input type="range" min="0" max="1000" defaultValue="0" class="slider" id="frequency_range4" />
        </div></div>
        <div class="item7"><div class="slidecontainer">
          <input type="range" min="0" max="1000" defaultValue="0" class="slider" id="frequency_range" />
        </div></div>
        <div class="item15"><div class="slidecontainer">
          <input type="range" min="0" max="255" defaultValue="0" class="slider" id="whiteRange" />
        </div></div>
        <div class="item18"><div class="slidecontainer">
          <input type="range" min="0" max="1000" defaultValue="0" class="slider" id="frequency_range5" />
        </div></div>


        <div class="item4"> <p>Red: <span id="redValue"> </span> </p> </div>
        <div class="item10"> <p>Red Mod: <span id="lfo2_value"> </span> </p> </div>
        <div class="item5"><p>Green: <span id="greenValue"></span></p></div>
        <div class="item11"><p>Green Mod: <span id="lfo3_value"></span></p></div>
        <div class="item6"><p>Blue: <span id="blueValue"></span></p></div>
        <div class="item14"><p>Blue Mod: <span id="lfo4_value"></span></p></div>
        <div class="item8"><p>Alpha Mod: <span id="lfo_value"></span></p></div>
        <div class="item16"><p>White Level: <span id="whiteValue"></span></p></div>
        <div class="item17"><p>White Mod: <span id="lfo5_value"></span></p></div>


      </div>
      <div> <SYNTH_OUTPUT /> </div>
    </div>
  );
}

export default App;
