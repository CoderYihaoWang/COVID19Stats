import React, { useState } from 'react';
import { makeStyles, Theme, createStyles} from '@material-ui/core';
import CountryList from './Components/CountryList';
import ChartPanel from './Components/ChartPanel';
import { red, green, orange, grey } from '@material-ui/core/colors';
import { IColors } from './Common/Interfaces';
import './App.css';

const useStyle = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      display: 'flex'
    },
    drawer: {
      width: '20vw',
      overflowX: 'hidden'
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
      <CountryList setCountry={setCountry} setSlug={setSlug} colors={colors} className={classes.drawer}/>
      <ChartPanel country={country} slug={slug} colors={colors}/>
    </div>
  );
}

export default App;