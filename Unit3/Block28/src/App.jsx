import './index.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './Components/Blue';
import Red from './Components/Red';
import Home from './Components/Home';

function App() {
  return (
    <>
    <div id='container'>

    <div id="navbar">
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>   
      <Link to="/home">Home</Link> 
    </div>
    <div id="main-section">
      <Routes>
      <Route path="/blue" element={<Blue>Blue</Blue>} />
      <Route path="/red" element={<Red>Red</Red>} />  
      <Route path="/home" element={<Home>Home</Home>} />  
      </Routes>
    </div> 
    </div>

    </>
  );
}

export default App;
