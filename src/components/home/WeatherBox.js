import { Grid, Typography, useMediaQuery } from '@material-ui/core'
import clsx from 'clsx';
import React from 'react'
import { useStyles } from '../../styles/ui/uiClasses';

export default function WeatherBox({ day }) {
    const classes = useStyles()
    const weekDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(day.Date))
    const mobile = useMediaQuery(theme => theme.breakpoints.down('md'));

    return (
        <Grid container alignItems='center' justifyContent={mobile ? 'space-evenly' : 'flex-start'} direction={mobile ? 'row' : 'column'} spacing={1} className={classes.weatherBox}>
            <Typography className={classes.dayTypo}>{weekDay}</Typography>
            <Typography variant='subtitle1' className={classes.dateTypo}>{`${new Date(day.Date).getDate()}.${new Date(day.Date).getMonth() + 1}`}</Typography>
            <Typography className={classes.minMaxTemp} >{`${day?.Temperature?.Maximum?.Value}/${day?.Temperature?.Minimum?.Value} °${day?.Temperature?.Minimum?.Unit}`}</Typography>
            <img alt='logo' src={`https://developer.accuweather.com/sites/default/files/${day.Day.Icon.toString().padStart(2, '0')}-s.png`} />
            <Typography variant='body1' className={clsx(classes.mobileNoShow, classes.iconPhrase)}>{day.Day.IconPhrase}</Typography>
        </Grid>
    )
}
