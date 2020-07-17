import React from 'react';

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

    return (
    <p>placeholder for chart: {props.country}</p>
    )
}