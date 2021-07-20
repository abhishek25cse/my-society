import React from 'react';
//import './App.css';
import Owners from './components/Owners';
import Parking from './components/Parking';
import Flat from './components/Flat';
import OwnerForm from './components/OwnerForm';
import ConfigForm from './components/ConfigForm';
import Config from './components/Config';

function App() {
  return (
    <div >
       <header className="App-header"> 
      <Owners name = "RESIDENTs"/><br/><br/>
      <Parking name = "PARKING"/><br/><br/>
      <Flat name ="FLAT"/><br/><br/><br/>
      <OwnerForm name ="ADD OWNER"/>  <br/>   <br/>
      <Config name = "SYSTEM CONFIG"/><br/><br/>
      <ConfigForm name = "Add Config"/><br/>
      </header>
    </div>
  );
}

export default App;
