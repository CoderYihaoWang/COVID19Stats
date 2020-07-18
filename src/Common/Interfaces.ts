import { Color } from "@material-ui/core";

export interface ICountryData {
    Country: string,
    Slug: string,
    TotalConfirmed: number,
    NewConfirmed: number,
    TotalDeaths: number,
    NewDeaths: number,
    TotalRecovered: number,
    NewRecovered: number
}

export interface IColors {
    Confirmed: Color,
    Recovered: Color,
    Active: Color,
    Deaths: Color
}