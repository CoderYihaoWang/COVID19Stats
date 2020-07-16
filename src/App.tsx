import React from 'react';
import { Container, Grid, makeStyles, createStyles, Theme } from '@material-ui/core';
import SearchPanel from './Components/SearchPanel/SearchPanel'
import ResultsPanel from './Components/ResultsPanel/ResultsPanel'
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Github Jobs Search</h1>
      </Container>
      <Grid container>
        <Grid item xs={3}>
          <SearchPanel></SearchPanel>
        </Grid>
        <Grid item xs={9}>
          <ResultsPanel></ResultsPanel>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

