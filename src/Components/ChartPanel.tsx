import React, { useState, useEffect } from 'react';
import DateBar from './DateBar';
import Chart from './Chart';
import OptionsBar from './OptionsBar';

interface IProps {
    country: string
}

export default function ChartPanel(props: IProps) {
    const [startDate, setStartDate] = useState<Date>(
        new Date(2019, 1, 1)
    );
    const [endDate, setEndDate] = useState<Date>(
        new Date()
    );
    const [displayConfirmed, setDisplayConfirmed] = useState<boolean>(true);
    const [displayDeaths, setDisplayDeaths] = useState<boolean>(true);
    const [displayRecovered, setDisplayRecovered] = useState<boolean>(true);
    const [displayActive, setDisplayActive] = useState<boolean>(true);

    return (
        <div>
            <DateBar 
                setStartDate={setStartDate}
                setEndDate={setEndDate}
            />
            <Chart 
                country={props.country}
                startDate={startDate}
                endDate={endDate}
                displayConfirmed={displayConfirmed}
                displayDeaths={displayDeaths}
                displayRecovered={displayRecovered}
                displayActive={displayActive}
            />
            <OptionsBar 
                setDisplayConfirmed={setDisplayConfirmed}
                setDisplayDeaths={setDisplayDeaths}
                setDisplayRecovered={setDisplayRecovered}
                setDisplayActive={setDisplayActive}
            />
        </div>
    )
}