import React from 'react';
import logo from './logo.svg';
import './App.css';
import Owners from './components/Owners';
import Parking from './components/Parking';
import Flat from './components/Flat';
import OwnerForm from './components/OwnerForm';

function App() {
  return (
    <div className="App">
       <header className="App-header"> 
      <Owners name = "RESIDENTs"/>,
      <Parking name = "PARKING"/>,
      <Flat name ="FLAT"/>
      <OwnerForm name ="ADD OWNER"/>     
      </header>
    </div>
  );
}

export default App;
