import React from 'react';
import { FormControlLabel, FormGroup, Switch, Grid } from '@material-ui/core';

interface IProps {
    displayConfirmed: boolean,
    setDisplayConfirmed: (b: boolean) => void,
    displayDeaths: boolean,
    setDisplayDeaths: (b: boolean) => void,
    displayRecovered: boolean,
    setDisplayRecovered: (b: boolean) => void,
    displayActive: boolean,
    setDisplayActive: (b: boolean) => void
};

export default function OptionsBar(props: IProps) {
    return (
        <Grid container justify="space-evenly">
        <FormGroup row>
            <Grid item>
            <FormControlLabel 
                control={<Switch 
                    checked={props.displayConfirmed}
                    onChange={(e) => props.setDisplayConfirmed(e.target.checked)}
                />}
                label='Confirmed'
            />
            </Grid>
            <Grid item>
            <FormControlLabel 
                control={<Switch 
                    checked={props.displayActive}
                    onChange={(e) => props.setDisplayActive(e.target.checked)}
                />}
                label='Active'
            />
            </Grid>
            <Grid item>
            <FormControlLabel 
                control={<Switch 
                    checked={props.displayRecovered}
                    onChange={(e) => props.setDisplayRecovered(e.target.checked)}
                />}
                label='Recovered'
            />
            </Grid>
            <Grid item>
            <FormControlLabel 
                control={<Switch 
                    checked={props.displayDeaths}
                    onChange={(e) => props.setDisplayDeaths(e.target.checked)}
                />}
                label='Deaths'
            />
            </Grid>
        </FormGroup>
        </Grid>
    )
}