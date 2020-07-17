import React, { useEffect, useState } from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts';

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
        fetch(`https://api.covid19api.com/country/${props.country}?from=${props.startDate}&to=${props.endDate}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(() => console.log('An error has occured in fetching data for chart'))
    }, [props.country]);

    return (   
        <div>
            <p>{props.country}</p>
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="Confirmed" stroke="#8884d8" />
        <Line type="monotone" dataKey="Deaths" stroke="#8884d8" />
        <Line type="monotone" dataKey="Recovered" stroke="#8884d8" />
        <Line type="monotone" dataKey="Active" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis />
  </LineChart>
        </div>
    
    )
}