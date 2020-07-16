import React, { useState } from 'react';
import { TextField, Switch, FormControlLabel, Button, Grid } from '@material-ui/core';
import { IUserInput } from '../Common/Interfaces';

interface IProps {
    setUserInput: (userInput: IUserInput) => void
}

function SearchPanel(props: IProps) {

    const [search, setSearch] = useState<string | null>(null);
    const [location, setLocation] = useState<string | null>(null);
    const [fullTime, setFullTime] = useState<boolean>(false);

    const handleFulltime = function() {
        setFullTime(!fullTime);
        handleSubmit();
    }

    const handleSubmit = function() {
        let userInput : IUserInput = {
            search: search,
            location: location,
            fullTime: fullTime
        };
        props.setUserInput(userInput);
    }

    return (
        <div className='SearchPanel'>
            <Grid container spacing={3}> 
                <Grid item>
                    <FormControlLabel 
                        control={
                            <Switch 
                                checked={fullTime} 
                                onChange={handleFulltime} 
                                name='fullTime'
                            />
                        }
                        label='Only show full-time jobs'
                    />
                </Grid>
                <Grid item>
                  <TextField
                    id='search'
                    label='Description'
                    helperText='The job description to search for (eg. Python)'
                    onChange={e => setSearch(e.target.value)}
                />  
                </Grid>
                <Grid item>
                   <TextField
                    id='location'
                    label='Location'
                    helperText='The location of the location (eg. Auckland)'
                    onChange={e => setLocation(e.target.value)}
                /> 
                </Grid>
                <Grid item>
                    <Button 
                    variant='outlined'
                    onClick={handleSubmit}
                >
                    Search
                </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default SearchPanel;