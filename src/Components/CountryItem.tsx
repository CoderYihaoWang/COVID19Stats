import React from 'react';
import { 
    ListItem, 
    Accordion, 
    AccordionSummary, 
    AccordionDetails, 
    Button, 
    Typography, 
    List, 
    makeStyles, 
    createStyles, 
    Theme, 
    Divider
} from '@material-ui/core';
import { ICountryData, IColors } from '../Common/Interfaces';

interface IProps {
    data: ICountryData,
    setCountry: (country: string) => void,
    setSlug: (slug: string) => void,
    colors: IColors
}

export default function CountryItem(props: IProps) {
    const useStyles = makeStyles((theme: Theme) => 
        createStyles({
            item: {
                display: "flex",
                justifyContent: "space-between"
            },
            dataHead: {
                display: "block",
                color: '#555555'
            },
            data: {
                display: "block",
                textAlign: "right"
            },
            totalConfirmedData: {
                color: props.colors.Confirmed[900]
            },
            newConfirmedData: {
                color: props.colors.Confirmed[500]
            },
            totalRecoveredData: {
                color: props.colors.Recovered[900]
            },
            newRecoveredData: {
                color: props.colors.Recovered[500]
            },
            totalDeathsData: {
                color: props.colors.Deaths[900]
            },
            newDeathsData: {
                color: props.colors.Deaths[500]
            },
            button: {
                marginTop: 20
            }
        })
    );

    const classes = useStyles();
    
    return (
        <Accordion>
            <AccordionSummary>
                <Typography>{props.data.Country}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    <Divider />
                    <ListItem className={classes.item}>
                        <Typography variant="body2" className={classes.dataHead}>
                            Totol confirmed:
                        </Typography>
                        <Typography variant="body2" className={`${classes.data} ${classes.totalConfirmedData}`}>
                            {props.data.TotalConfirmed}
                        </Typography>
                    </ListItem>
                    <ListItem className={classes.item}>
                        <Typography variant="body2" className={classes.dataHead}>
                            New confirmed:
                        </Typography>
                        <Typography variant="body2" className={`${classes.data} ${classes.newConfirmedData}`}>
                            {props.data.NewConfirmed}
                        </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem className={classes.item}>
                        <Typography variant="body2" className={classes.dataHead}>
                            Totol recovered:
                        </Typography>
                        <Typography variant="body2" className={`${classes.data} ${classes.totalRecoveredData}`}>
                            {props.data.TotalRecovered}
                        </Typography>
                    </ListItem>
                    <ListItem className={classes.item}>
                        <Typography variant="body2" className={classes.dataHead}>
                            New recovered:
                        </Typography>
                        <Typography variant="body2" className={`${classes.data} ${classes.newRecoveredData}`}>
                            {props.data.NewRecovered}
                        </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem className={classes.item}>
                        <Typography variant="body2" className={classes.dataHead}>
                            Totol deaths:
                        </Typography>
                        <Typography variant="body2" className={`${classes.data} ${classes.totalDeathsData}`}>
                            {props.data.TotalDeaths}
                        </Typography>
                    </ListItem>
                    <ListItem className={classes.item}>
                        <Typography variant="body2" className={classes.dataHead}>
                            New deaths:
                        </Typography>
                        <Typography variant="body2" className={`${classes.data} ${classes.newDeathsData}`}>
                            {props.data.NewDeaths}
                        </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem className={classes.item}>
                       <Button className={classes.button} color="default" onClick={() => {
                            props.setSlug(props.data.Slug);
                            props.setCountry(props.data.Country);
                        }} variant="contained" disableElevation>
                            show trend
                        </Button> 
                    </ListItem>
                </List>
            </AccordionDetails>
        </Accordion>
    )
}