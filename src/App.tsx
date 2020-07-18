import React, { useState } from 'react';
import { Grid, makeStyles, Theme, createStyles, Container } from '@material-ui/core';
import CountryList from './Components/CountryList';
import ChartPanel from './Components/ChartPanel';
import './App.css';
import { findByLabelText } from '@testing-library/react';
import classes from '*.module.css';
import { red, green, orange, grey } from '@material-ui/core/colors';
import { IColors } from './Common/Interfaces';

const useStyle = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      display: 'flex'
    }
  })
)

function App() {
  const [country, setCountry] = useState<string>("New Zealand");
  const [slug, setSlug] = useState<string>("new-zealand");
  const classes = useStyle();
  const colors: IColors = {
    Confirmed: red,
    Recovered: green,
    Active: orange,
    Deaths: grey
  }

  return (
    <div className={classes.root}>
      <CountryList setCountry={setCountry} setSlug={setSlug} colors={colors}/>
      <ChartPanel country={country} slug={slug} colors={colors}/>
    </div>
  );
}

export default App;