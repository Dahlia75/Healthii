import React from 'react';

import '../App.css';

// import images for services
import Acupuncture from '../img/Acupuncture.jpg';
import Chiropractor from '../img/Chiropractor.png';
import Health_Aide from '../img/Health_Aide.jpg';
import Massage_Therapy from '../img/Massage_Therapy.jpg';
import Nurse from '../img/Nurse.png';
import Physiotherapist from '../img/Physiotherapist.png';

const Home = () => {
  return(
    <div className="App">
      <header className="App-header">
        <img src={Acupuncture} className="App-logo" alt="Acupuncture" />
        <img src={Chiropractor} className="App-logo" alt="Chiropractor" />
        <img src={Health_Aide} className="App-logo" alt="Health_Aide" />
        <img src={Massage_Therapy} className="App-logo" alt="Massage_Therapy" />
        <img src={Nurse} className="App-logo" alt="Nurse" />
        <img src={Physiotherapist} className="App-logo" alt="Physiotherapist" />

        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
};

export default Home;