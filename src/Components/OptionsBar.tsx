import React from 'react';
import { FormControlLabel, FormGroup, Switch, Grid, withStyles } from '@material-ui/core';
import { IColors } from '../Common/Interfaces';

interface IProps {
    displayConfirmed: boolean,
    setDisplayConfirmed: (b: boolean) => void,
    displayDeaths: boolean,
    setDisplayDeaths: (b: boolean) => void,
    displayRecovered: boolean,
    setDisplayRecovered: (b: boolean) => void,
    displayActive: boolean,
    setDisplayActive: (b: boolean) => void,
    colors: IColors
};

export default function OptionsBar(props: IProps) {

    const MakeColoredSwitch = (name: "Confirmed" | "Recovered" | "Active" | "Deaths") => 
        withStyles({
            switchBase: {
                color: props.colors[name][200],
                '&$checked': {
                    color: props.colors[name][900],
                },
                '&$checked + $track': {
                    backgroundColor: props.colors[name][900],
                },
            },
            checked: {},
            track: {},
        })(Switch);

    const ConfirmedSwitch = MakeColoredSwitch("Confirmed");
    const RecoveredSwitch = MakeColoredSwitch("Recovered");
    const ActiveSwitch = MakeColoredSwitch("Active");
    const DeathsSwitch = MakeColoredSwitch("Deaths");

    return (
        <Grid container justify="space-evenly">
            <FormGroup row>
                <Grid item>
                    <FormControlLabel 
                        control={<ConfirmedSwitch 
                            checked={props.displayConfirmed}
                            onChange={(e) => props.setDisplayConfirmed(e.target.checked)}
                        />}
                        label='Confirmed'
                    />
                    </Grid>
                <Grid item>
                    <FormControlLabel 
                        control={<ActiveSwitch 
                            checked={props.displayActive}
                            onChange={(e) => props.setDisplayActive(e.target.checked)}
                        />}
                        label='Active'
                    />
                </Grid>
                <Grid item>
                    <FormControlLabel 
                        control={<RecoveredSwitch 
                            checked={props.displayRecovered}
                            onChange={(e) => props.setDisplayRecovered(e.target.checked)}
                        />}
                        label='Recovered'
                    />
                </Grid>
                <Grid item>
                    <FormControlLabel 
                        control={<DeathsSwitch 
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