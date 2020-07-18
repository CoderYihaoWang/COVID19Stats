import React from 'react';
import { Grid } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

interface IProps {
    startDate: Date,
    setStartDate: (date: Date) => void,
    endDate: Date,
    setEndDate: (date: Date) => void
}

export default function DateBar(props: IProps) {

    const handleStartDateChange = (date: Date | null) => {
        props.setStartDate(date ?? new Date(2019, 1, 1));
      };

    const handleEndDateChange = (date : Date | null) => {
        const defaultDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
        props.setEndDate((date === null || +date > +defaultDate) ? defaultDate : date);
    }

    return (
        <Grid container justify="space-evenly">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="start-date-picker"
                label="From"
                value={props.startDate}
                onChange={handleStartDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
            </Grid>
            <Grid item>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="end-date-picker"
                label="To"
                value={props.endDate}
                onChange={handleEndDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
            </Grid>
            </MuiPickersUtilsProvider>
        </Grid>
    )
}