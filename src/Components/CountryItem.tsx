import React, { useEffect } from 'react';
import { ListItem, ListItemText, Tooltip, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { ICountryData } from '../Common/Interfaces';

interface IProps {
    data: ICountryData,
    setCountry: (country: string) => void
}

export default function CountryItem(props: IProps) {
    return (
        <ListItem button onClick={() => {props.setCountry(props.data.Slug)}}>
            <ListItemText>
                <p>{props.data.Country}: {props.data.TotalConfirmed}</p>  
            </ListItemText>
        </ListItem>
    )
}