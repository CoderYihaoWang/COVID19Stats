import React, { useState, useEffect } from 'react';
import { List, Drawer, createStyles, Theme, makeStyles } from '@material-ui/core';
import CountryItem from './CountryItem';
import { ICountryData } from '../Common/Interfaces';

interface IProps {
    setCountry: (country: string) => void,
    setSlug: (slug: string) => void
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        drawer: {
           width: '20vw',
           overflowX: 'hidden'
        }
    })
);

export default function CountryList(props: IProps) {
    const [countriesData, setCountriesData] = useState<ICountryData[]>([]);

    const classes = useStyles();

    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then(response => response.json())
            .then(data => {
                setCountriesData(
                    data.Countries.map((country: ICountryData) => {
                        return {
                            Country: country.Country,
                            Slug: country.Slug,
                            TotalConfirmed: country.TotalConfirmed,
                            NewConfirmed: country.NewConfirmed,
                            TotalDeaths: country.TotalDeaths,
                            NewDeaths: country.NewDeaths,
                            TotalRecovered: country.TotalRecovered,
                            NewRecovered: country.NewRecovered
                        }
                    })
                    .sort((a: ICountryData, b: ICountryData) => b.TotalConfirmed - a.TotalConfirmed)
                )
            })
            .catch(() => {
                console.log(`Error in fetching summary data`);
            })
    },[]);

    return (
        <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        open
        >
            <List className={classes.drawer}>
            {
                countriesData.map(data => 
                    <CountryItem setCountry={props.setCountry} setSlug={props.setSlug} data={data}/>
                )
            }
        </List>
        </Drawer>
    )
}