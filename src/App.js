import React from 'react';
import Gooofellas from './assets/Goodfellas.jpg'
import './App.css'

function App() {
  return (
    <div className="App-Container">
    <div className="First-Row">
    <div className="First-Movie">
    <img className = "Cover-Image" src={Gooofellas} alt='Goofellas Poster'></img>
    </div>
     <div className="Second-Movie">
     <img className = "Cover-Image" src={Gooofellas} alt='Goofellas Poster'></img>
     </div>
     <div className="Third-Movie">
     <img className = "Cover-Image" src={Gooofellas} alt='Goofellas Poster'></img>
     </div>
     <h1>Welcome to my app</h1>
     <img className = "Cover-Image" src={Gooofellas} alt='Goofellas Poster'></img>
     </div>
     <div className="Second-Row">
     <div className="First-Movie">
    <img className = "Cover-Image" src={Gooofellas} alt='Goofellas Poster'></img>
    </div>
     <div className="Second-Movie">
     <img className = "Cover-Image" src={Gooofellas} alt='Goofellas Poster'></img>
     </div>
     <div className="Third-Movie">
     <img className = "Cover-Image" src={Gooofellas} alt='Goofellas Poster'></img>
     </div>
     </div>
     <div className="Third-Row">
     <div className="First-Movie">
     <img className = "Cover-Image" src={Gooofellas} alt='Goofellas Poster'></img>
     </div>
      <div className="Second-Movie">
      <img className = "Cover-Image" src={Gooofellas} alt='Goofellas Poster'></img>
      </div>
      <div className="Third-Movie">
      <img className = "Cover-Image" src={Gooofellas} alt='Goofellas Poster'></img>
      </div>
     </div>
    </div>
  );
}

export default App;


