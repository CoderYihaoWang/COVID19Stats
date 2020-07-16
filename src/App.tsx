import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import SearchPanel from './Components/SearchPanel';
import ResultsPanel from './Components/ResultsPanel';
import { IUserInput } from './Common/Interfaces';
import './App.css';

export default function App() {

  const [userInput, setUserInput] = useState<IUserInput>({
    search: null,
    location: null,
    fullTime: false
  });

  return (
    <div className="App">
      <Container maxWidth="lg">
        <h1>Github Jobs Search</h1>
      </Container>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item sm={3}>
            <SearchPanel setUserInput={setUserInput}></SearchPanel>
          </Grid>
          <Grid item sm={9}>
            <ResultsPanel search={userInput.search} location={userInput.location} fullTime={userInput.fullTime}></ResultsPanel>
          </Grid>
        </Grid>
      </Container>
    </div>  
  );
}

