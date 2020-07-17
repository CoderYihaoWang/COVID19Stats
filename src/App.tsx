import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import CountryList from './Components/CountryList';
import ChartPanel from './Components/ChartPanel';
import './App.css';

function App() {
  const [country, setCountry] = useState<string>("");

  return (
    <div className="App">
      <Grid container>
        <Grid item>
          <CountryList setCountry={setCountry} />
        </Grid>
        <Grid item>
          <ChartPanel country={country} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
