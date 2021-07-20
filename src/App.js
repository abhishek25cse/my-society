import React from 'react';
//import './App.css';
import OwnerHome from './components/OwnerHome';
import Parking from './components/Parking';
import Flat from './components/Flat';
import ConfigHome from './components/ConfigHome';

function App() {
  return (
    <div >
       <header className="App-header"> 
      <OwnerHome name = "OWNERs"/><br/><br/>
      <Parking name = "PARKING"/><br/><br/>
      <Flat name ="FLAT"/><br/><br/><br/>
      <ConfigHome name = "SYSTEM CONFIG"/><br/><br/>
     </header>
    </div>
  );
}

export default App;
