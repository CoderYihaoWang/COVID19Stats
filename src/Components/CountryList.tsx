import React, { useState, useEffect } from 'react';
import { List } from '@material-ui/core';
import CountryItem from './CountryItem';
import { ICountryData } from '../Common/Interfaces';

interface IProps {
    setCountry: (country: string) => void
}

interface IResponseCountryData {
    Country: string,
    Slug: string,
    TotalConfirmed: number,
    NewConfirmed: number,
    TotalDeaths: number,
    NewDeaths: number,
    TotalRecovered: number,
    NewRecovered: number
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
                    totalConfirmed: data.Global.TotalConfirmed,
                    newConfirmed: data.Global.NewConfirmed,
                    totalDeaths: data.Global.TotalDeaths,
                    newDeaths: data.Global.NewDeaths,
                    totalRecovered: data.Global.TotalRecovered,
                    newRecovered: data.Global.NewRecovered
                });
                setCountriesData(
                    data.Countries.map((country: IResponseCountryData) => {
                        return {
                            country: country.Country,
                            slug: country.Slug,
                            totalConfirmed: country.TotalConfirmed,
                            newConfirmed: country.NewConfirmed,
                            totalDeaths: country.TotalDeaths,
                            newDeaths: country.NewDeaths,
                            totalRecovered: country.TotalRecovered,
                            newRecovered: country.NewRecovered
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