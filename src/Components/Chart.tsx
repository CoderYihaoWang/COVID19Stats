import React, { useEffect } from 'react';
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


export default function Chart(props: IProps) {

    useEffect(() => {
        fetch('')
    }, []);
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 400, pv: 2400, amt: 2400},{name: 'Page C', uv: 400, pv: 2400, amt: 2400}];
    return (   
  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
    )
}