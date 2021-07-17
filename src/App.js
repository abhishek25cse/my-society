import React from 'react';
//import './App.css';
import Owners from './components/Owners';
import Parking from './components/Parking';
import Flat from './components/Flat';
import OwnerForm from './components/OwnerForm';

function App() {
  return (
    <div >
       <header className="App-header"> 
      <Owners name = "RESIDENTs"/><br/><br/>
      <Parking name = "PARKING"/><br/><br/>
      <Flat name ="FLAT"/><br/><br/><br/>
      <OwnerForm name ="ADD OWNER"/>     
      </header>
    </div>
  );
}

export default App;
