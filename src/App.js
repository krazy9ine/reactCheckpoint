import logo from './logo.svg';
import './App.css';
import Navbarr from './navbarr';
import Cardss from './Cards';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">
      <h1>React Project</h1>
      <Navbarr/>
      <Cardss/>
      <>
  <link rel="stylesheet" type="text/css" href="style.css" />
  <canvas id="backgroundCanvas" />
  <canvas id="starsCanvas" />
</>
    </div>
  );
}

export default App;
