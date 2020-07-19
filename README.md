# COVID-19 Trend

This project is to be summitted for both 'Web App' and 'DevOps' parts of the [NZSMA Program](https://nzmsa.netlify.app/) / [Phase 1](https://github.com/NZMSA/2020-Phase-1).

This project has been deployed on [Azure](https://covid19stats.azurewebsites.net/).

## Web App part
This is a simple web app that shows the COVID-19 trends for various countries.

It consists of two components: the list on the left, and the line chart on the right. From the list, the user can click on the country names to expand the summary statistics for that country. The user can also view the trend of the country's data on the right-hand-side line chart by clicking on the 'SHOW TREND' button.

On the line chart, the trends of country's numbers of confirmed, active, recovered and dead cases can be seen. The user is able to choose which lines to be drawn on the map by using the switches below.

The user is also able to select a start date and an end date. The line chart will only display the data within the time range.

The APIs used are from [COVID 19 API](https://covid19api.com/).

The components and styles are from [Material UI](https://material-ui.com/)

## DevOps part

- Build pipeline: just the basic stuff following the tutorial. This includes installing node.js, invoke `npm run start`, and zip it to an artifact.

- Release pipeline: just the basic stuff following the tutorial, deploying the app to Azure Web App.
