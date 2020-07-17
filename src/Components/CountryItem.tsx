import React, { useEffect } from 'react';

interface IProps {
    country: string,
    totalConfirmed: number,
    newConfirmed: number,
    totalDeaths: number,
    newDeaths: number,
    totalRecovered: number,
    newRecovered: number
};

export default function CountryItem(props: IProps) {

    useEffect(() => {

    }, []);

    return (
    <p>{props.country}: {props.totalConfirmed}</p>
    )
}