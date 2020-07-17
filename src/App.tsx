import React, { useState } from 'react';
import { Grid, makeStyles, Theme, createStyles } from '@material-ui/core';
import CountryList from './Components/CountryList';
import ChartPanel from './Components/ChartPanel';
import './App.css';
import { findByLabelText } from '@testing-library/react';
import classes from '*.module.css';

const useStyle = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      display: 'flex'
    }
  })
)

function App() {
  const [country, setCountry] = useState<string>("new-zealand");
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <CountryList setCountry={setCountry}/>
      <ChartPanel country={country}/>
    </div>
  );
}

export default App;