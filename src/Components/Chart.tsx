import React, { useEffect, useState } from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { setDate } from 'date-fns';

interface IProps {
    country: string,
    startDate: Date,
    endDate: Date,
    displayConfirmed: boolean,
    displayDeaths: boolean,
    displayRecovered: boolean,
    displayActive: boolean
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
            color: "blue",
            display: props.displayConfirmed
        },
        {
            dataKey: "Deaths",
            color: "blue",
            display: props.displayDeaths
        },
        {
            dataKey: "Recovered",
            color: "blue",
            display: props.displayRecovered
        },
        {
            dataKey: "Active",
            color: "blue",
            display: props.displayActive
        }
    ]
    return (   
        <div>
            <p>{props.country}</p>
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
    </div>
    )
}