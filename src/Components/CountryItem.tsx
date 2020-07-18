import React, { useEffect } from 'react';
import { ListItem, ListItemText, Tooltip, Accordion, AccordionSummary, AccordionDetails, Button, Typography, List } from '@material-ui/core';
import { ICountryData } from '../Common/Interfaces';

interface IProps {
    data: ICountryData,
    setCountry: (country: string) => void,
    setSlug: (slug: string) => void
}

export default function CountryItem(props: IProps) {
    return (
        <Accordion>
            <AccordionSummary>
                <Typography>{props.data.Country}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    <ListItem>
                        <Typography variant="body1">
                            Totol confirmed: {props.data.TotalConfirmed}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            New confirmed: {props.data.NewConfirmed}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            Totol recovered: {props.data.TotalRecovered}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            New recovered: {props.data.NewRecovered}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            Totol deaths: {props.data.TotalDeaths}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            New deaths: {props.data.NewDeaths}
                        </Typography>
                    </ListItem>
                    <ListItem>
                       <Button onClick={() => {
                            props.setSlug(props.data.Slug);
                            props.setCountry(props.data.Country);
                        }}>
                            Show graph
                        </Button> 
                    </ListItem>
                </List>
                 
            </AccordionDetails>
        </Accordion>
    )
}