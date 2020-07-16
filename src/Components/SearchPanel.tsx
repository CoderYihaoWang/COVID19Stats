import React, { useState } from 'react';
import { TextField, Switch, FormControlLabel, Button } from '@material-ui/core';
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
            <TextField
                id='search'
                label='Description'
                helperText='The job description to search for (eg. Python)'
                onChange={e => setSearch(e.target.value)}
            />
            <TextField
                id='location'
                label='Location'
                helperText='The location of the location (eg. Auckland)'
                onChange={e => setLocation(e.target.value)}
            />
            <Button 
                variant='outlined'
                onClick={handleSubmit}
            >
                Search
            </Button>
        </div>
    )
}

export default SearchPanel;