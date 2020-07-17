import React from 'react';
import { FormControlLabel, FormGroup, Switch } from '@material-ui/core';

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
        <FormGroup row>
            <FormControlLabel 
                control={<Switch 
                    checked={props.displayConfirmed}
                    onChange={(e) => props.setDisplayConfirmed(e.target.checked)}
                />}
                label='Confirmed'
            />
            <FormControlLabel 
                control={<Switch 
                    checked={props.displayActive}
                    onChange={(e) => props.setDisplayActive(e.target.checked)}
                />}
                label='Active'
            />
            <FormControlLabel 
                control={<Switch 
                    checked={props.displayRecovered}
                    onChange={(e) => props.setDisplayRecovered(e.target.checked)}
                />}
                label='Recovered'
            />
            <FormControlLabel 
                control={<Switch 
                    checked={props.displayDeaths}
                    onChange={(e) => props.setDisplayDeaths(e.target.checked)}
                />}
                label='Deaths'
            />
        </FormGroup>
    )
}