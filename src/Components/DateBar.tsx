import React from 'react';
import {} from '@material-ui/core';
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
        props.setEndDate(date ?? new Date());
    }

    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="start-date-picker"
                label="Start date"
                value={props.startDate}
                onChange={handleStartDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="end-date-picker"
                label="End date"
                value={props.endDate}
                onChange={handleEndDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
            </MuiPickersUtilsProvider>
        </div>
    )
}