import React, { useEffect, useState } from 'react';
import { Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';
import { Grid } from '@material-ui/core';
import { IColors } from '../Common/Interfaces';

interface IProps {
    country: string,
    startDate: Date,
    endDate: Date,
    displayConfirmed: boolean,
    displayDeaths: boolean,
    displayRecovered: boolean,
    displayActive: boolean,
    colors: IColors,
    className: string
}

interface IData {
    Country: string,
    Date: Date,
    Confirmed: number,
    Deaths: number,
    Recovered: number,
    Active: number
};

export default function Chart(props: IProps) {
    const [data, setData] = useState<IData[]>([]);    

    useEffect(() => {
        fetch(`https://api.covid19api.com/country/${props.country}?from=${props.startDate.toISOString()}&to=${props.endDate.toISOString()}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(() => console.log('An error has occured in fetching data for chart'))
    }, [props.country, props.startDate, props.endDate]);

    const lines = [
        {
            dataKey: "Confirmed",
            color: props.colors.Confirmed[900],
            display: props.displayConfirmed
        },
        {
            dataKey: "Deaths",
            color: props.colors.Deaths[900],
            display: props.displayDeaths
        },
        {
            dataKey: "Recovered",
            color: props.colors.Recovered[900],
            display: props.displayRecovered
        },
        {
            dataKey: "Active",
            color: props.colors.Active[900],
            display: props.displayActive
        }
    ]
    return (   
        <Grid container justify="center" className={props.className}>
            <Grid item>
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Tooltip />
                {
                    lines.map(line => line.display 
                        ? <Line 
                            type="monotone"
                            dataKey={line.dataKey}
                            stroke={line.color}
                            dot={false}
                            activeDot={{stroke: line.color, strokeWidth: 1, r: 4}}
                            strokeWidth={3}
                            legendType="line"
                        />
                        : <div />
                    )
                }
                <XAxis dataKey="date" />
                <YAxis />
        </LineChart>
        </Grid>
    </Grid>
    )
}