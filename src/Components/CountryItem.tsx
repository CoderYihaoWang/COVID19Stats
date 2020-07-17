import React, { useEffect } from 'react';
import { ICountryData } from '../Common/Interfaces';

type IProps = ICountryData;

export default function CountryItem(props: IProps) {

    useEffect(() => {

    }, []);

    return (
    <p>{props.Country}: {props.TotalConfirmed}</p>
    )
}