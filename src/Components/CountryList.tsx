import React, { useState, useEffect } from 'react';
import { List } from '@material-ui/core';
import CountryItem from './CountryItem';
import { ICountryData } from '../Common/Interfaces';

interface IProps {
    setCountry: (country: string) => void
}

export default function CountryList(props: IProps) {
    const [countriesData, setCountriesData] = useState<ICountryData[]>([]);
    const [globalData, setGlobalData] = useState<ICountryData | null>(null);

    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then(response => response.json())
            .then(data => {
                setGlobalData({
                    country: 'Global',
                    slug: 'Global',
                    totalConfirmed: data.Global.totalConfirmed,
                    newConfirmed: data.Global.newConfirmed,
                    totalDeaths: data.Global.totalDeaths,
                    newDeaths: data.Global.newDeaths,
                    totalRecovered: data.Global.totalRecovered,
                    newRecovered: data.Global.newRecovered
                });
                setCountriesData(
                    data.Countries.map((country: ICountryData) => {
                        return {
                            country: country.country,
                            slug: country.slug,
                            totalConfirmed: country.totalConfirmed,
                            newConfirmed: country.newConfirmed,
                            totalDeaths: country.totalDeaths,
                            newDeaths: country.newDeaths,
                            totalRecovered: country.totalRecovered,
                            newRecovered: country.newRecovered
                        }
                    })
                )
            })
            .catch(() => {
                console.log(`Error in fetching summary data`);
            })
    },[]);


    return (
        <List>

        </List>
    )
}