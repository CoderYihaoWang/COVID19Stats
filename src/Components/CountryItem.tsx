import React, { useEffect } from 'react';
import { ListItem, ListItemText, Tooltip, Accordion, AccordionSummary, AccordionDetails, Button, Typography, List, makeStyles, createStyles, Theme } from '@material-ui/core';
import { ICountryData, IColors } from '../Common/Interfaces';

interface IProps {
    data: ICountryData,
    setCountry: (country: string) => void,
    setSlug: (slug: string) => void,
    colors: IColors
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        item: {
            display: "flex",
            justifyContent: "space-between"
        },
        dataHead: {
            display: "block",
        },
        data: {
            display: "block",
            textAlign: "right"
        }
    })
)

export default function CountryItem(props: IProps) {
    const classes = useStyles();
    
    return (
        <Accordion>
            <AccordionSummary>
                <Typography>{props.data.Country}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    <ListItem className={classes.item}>
                        <Typography variant="body2" className={classes.dataHead}>
                            Totol confirmed:
                        </Typography>
                        <Typography variant="body2" className={classes.data}>
                            {props.data.TotalConfirmed}
                        </Typography>
                    </ListItem>
                    <ListItem className={classes.item}>
                        <Typography variant="body2" className={classes.dataHead}>
                            New confirmed:
                        </Typography>
                        <Typography variant="body2" className={classes.data}>
                            {props.data.NewConfirmed}
                        </Typography>
                    </ListItem>
                    <ListItem className={classes.item}>
                        <Typography variant="body2" className={classes.dataHead}>
                            Totol recovered:
                        </Typography>
                        <Typography variant="body2" className={classes.data}>
                            {props.data.TotalRecovered}
                        </Typography>
                    </ListItem>
                    <ListItem className={classes.item}>
                        <Typography variant="body2" className={classes.dataHead}>
                            New recovered:
                        </Typography>
                        <Typography variant="body2" className={classes.data}>
                            {props.data.NewRecovered}
                        </Typography>
                    </ListItem>
                    <ListItem className={classes.item}>
                        <Typography variant="body2" className={classes.dataHead}>
                            Totol deaths:
                        </Typography>
                        <Typography variant="body2" className={classes.data}>
                            {props.data.TotalDeaths}
                        </Typography>
                    </ListItem>
                    <ListItem className={classes.item}>
                        <Typography variant="body2" className={classes.dataHead}>
                            New deaths:
                        </Typography>
                        <Typography variant="body2" className={classes.data}>
                            {props.data.NewDeaths}
                        </Typography>
                    </ListItem>
                    <ListItem className={classes.item}>
                       <Button onClick={() => {
                            props.setSlug(props.data.Slug);
                            props.setCountry(props.data.Country);
                        }} variant="outlined">
                            show on graph
                        </Button> 
                    </ListItem>
                </List>
            </AccordionDetails>
        </Accordion>
    )
}