import RGB_SLIDERS from './components/RGB_Sliders';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        GITHUB TEST 3
      </header>
      <div class="slidecontainer" >
          <input type="range" min="0" max="255" defaultValue="0" class="slider" id="redRange" />
          <p>Red: <span id="redValue"></span></p>
        </div>
        <div class="slidecontainer">
          <input type="range" min="0" max="255" defaultValue="0" class="slider" id="greenRange" />
          <p>Green: <span id="greenValue"></span></p>
        </div>
        <div class="slidecontainer">
          <input type="range" min="0" max="255" defaultValue="0" class="slider" id="blueRange" />
          <p>Blue: <span id="blueValue"></span></p>
        </div>
        <div>
        <RGB_SLIDERS/>
        </div>
        
    </div>
  );
}

export default App;
