import React, { useState } from 'react';
import { TextField, Switch, FormControlLabel } from '@material-ui/core';
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
    }

    return (
        <div className='SearchPanel'>
            <FormControlLabel 
                control={<Switch checked={fullTime} onChange={handleFulltime} name='fullTime'/>}
                label='Only show full-time jobs'
            />
            <TextField
                id='search'
                label='Description'
                helperText='The job description to search for (eg. Python)'
            />
            <TextField
                id='location'
                label='Location'
                helperText='The location of the location (eg. Auckland)'
            />

        </div>
    )
}

export default SearchPanel