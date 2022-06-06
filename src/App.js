import RGB_SLIDERS from './components/RGB_Sliders';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        GITHUB TEST 4
      </header>
      <div class="grid-container">
  <div class="item1"><div class="slidecontainer" >
          <input type="range" min="0" max="255" defaultValue="0" class="slider" id="redRange" />
        </div></div>
  <div class="item2"><div class="slidecontainer">
          <input type="range" min="0" max="255" defaultValue="0" class="slider" id="greenRange" /> 
        </div></div>
  <div class="item3"><div class="slidecontainer">
          <input type="range" min="0" max="255" defaultValue="0" class="slider" id="blueRange" />  
        </div></div>  
  <div class="item4"> <p>Red: <span id="redValue"> </span> </p> </div>
  <div class="item5"><p>Green: <span id="greenValue"></span></p></div>
  <div class="item6"><p>Blue: <span id="blueValue"></span></p></div>
  
</div>  
<div> <RGB_SLIDERS/> </div>
    </div>
  );
}

export default App;
