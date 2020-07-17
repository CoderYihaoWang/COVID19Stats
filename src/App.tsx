import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import CountryList from './Components/CountryList';
import ChartPanel from './Components/ChartPanel';
import './App.css';

function App() {
  const [country, setCountry] = useState<string>("new-zealand");

  return (
    <div className="App">
      <CountryList setCountry={setCountry}/>
      <ChartPanel country={country} />
    </div>
  );
}

export default App;
