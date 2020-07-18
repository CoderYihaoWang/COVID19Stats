import React, { useState, useEffect } from 'react';
import DateBar from './DateBar';
import Chart from './Chart';
import OptionsBar from './OptionsBar';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

interface IProps {
    country: string,
    slug: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // root: {
        //     flexGrow: 1,
        //     width: '67vw',
        //     marginLeft: '33vw'
        // }
    })
);

export default function ChartPanel(props: IProps) {
    const [startDate, setStartDate] = useState<Date>(
        new Date(2020, 1, 1)
    );
    const [endDate, setEndDate] = useState<Date>(
        new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
    );
    const [displayConfirmed, setDisplayConfirmed] = useState<boolean>(true);
    const [displayDeaths, setDisplayDeaths] = useState<boolean>(false);
    const [displayRecovered, setDisplayRecovered] = useState<boolean>(false);
    const [displayActive, setDisplayActive] = useState<boolean>(true);

    const classes = useStyles();

    return (
        <div>
            <Typography variant="h3">
                COVID-19 Trend
            </Typography>
            <Typography variant="h4">
                {props.country}
            </Typography>
            <DateBar 
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
            />
            <Chart 
                country={props.slug}
                startDate={startDate}
                endDate={endDate}
                displayConfirmed={displayConfirmed}
                displayDeaths={displayDeaths}
                displayRecovered={displayRecovered}
                displayActive={displayActive}
            />
            <OptionsBar 
                displayConfirmed={displayConfirmed}
                setDisplayConfirmed={setDisplayConfirmed}
                displayDeaths={displayDeaths}
                setDisplayDeaths={setDisplayDeaths}
                displayRecovered={displayRecovered}
                setDisplayRecovered={setDisplayRecovered}
                displayActive={displayActive}
                setDisplayActive={setDisplayActive}
            />
        </div>
    )
}