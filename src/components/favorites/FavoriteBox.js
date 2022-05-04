import { Grid, IconButton, Typography, useMediaQuery } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useStyles } from '../../styles/ui/uiClasses'
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx'

import * as weatherActions from '../../redux/Weather/weatherSlice'
import { useDispatch, useSelector } from 'react-redux';

export default function FavoriteBox({ favorite }) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const favoriteWeather = useSelector(state => state.weather?.favoriteWeather?.[favorite.Key])
    const system = useSelector(state => state.general.system)
    const mobile = useMediaQuery(theme => theme.breakpoints.down('md'));

    useEffect(() => {
        dispatch(weatherActions.getFavoriteCurrentWeater(favorite.Key))
    }, [favorite.Key])


    return (
        <Grid container alignItems='center' justifyContent='space-evenly' className={classes.weatherBox}>
            <Grid item lg={12}>
                <Grid container justifyContent='flex-end'>
                    <IconButton>
                        <CloseIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container alignItems='center' justifyContent={mobile ? 'space-evenly' : 'flex-start'} direction={mobile ? 'row' : 'column'} spacing={1} >
                    <Typography className={classes.dayTypo}>{favorite?.LocalizedName}</Typography>
                    <Typography className={clsx(classes.country, classes.mobileNoShow)}>{favorite?.Country?.LocalizedName}</Typography>
                    <Typography className={classes.temp} >{`${favoriteWeather?.Temperature?.[system]?.Value} °${favoriteWeather?.Temperature?.[system]?.Unit}`}</Typography>
                    <img alt='logo' src={`https://developer.accuweather.com/sites/default/files/${favoriteWeather?.WeatherIcon.toString().padStart(2, '0')}-s.png`} />
                    <Typography variant='h6' className={clsx(classes.dateTypo, classes.mobileNoShow)}>{favoriteWeather?.WeatherText}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
