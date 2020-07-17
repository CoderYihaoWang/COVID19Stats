import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Drawer, Hidden } from '@material-ui/core';
import CountryItem from './CountryItem';
import { ICountryData } from '../Common/Interfaces';

interface IProps {
    setCountry: (country: string) => void
}

export default function CountryList(props: IProps) {
    const [countriesData, setCountriesData] = useState<ICountryData[]>([]);

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

    const drawer = (
        <List>
            {countriesData.map(data => (
                <ListItem button>
                    <ListItemText>
                      <CountryItem {...data}/>  
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    )

    return (
        <nav>
        <Hidden smUp implementation="css">
          <Drawer>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    )
}