import { Grid, IconButton, Typography, useMediaQuery } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useStyles } from '../../styles/ui/uiClasses'
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx'

import * as weatherActions from '../../redux/Weather/weatherSlice'
import * as generalActions from '../../redux/General/generalSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function FavoriteBox({ favorite }) {
    const classes = useStyles()
      const navigate = useNavigate();
    const dispatch = useDispatch()
    const favoriteWeather = useSelector(state => state.weather?.favoriteWeather?.[favorite.Key])
    const system = useSelector(state => state.general.system)
    const mobile = useMediaQuery(theme => theme.breakpoints.down('md'));

    useEffect(() => {
        dispatch(weatherActions.getFavoriteCurrentWeater(favorite.Key))
    }, [favorite.Key, dispatch])

    const removeFromFavorites = () => {
        dispatch(generalActions.removeFromFavorites({key: favorite.Key}))
    }

    const goToFavorite = () => {
        dispatch(generalActions.setLocationFull(favorite))
        navigate('/home')
    }


    return (
        <Grid container alignItems='center' justifyContent='space-evenly' className={classes.favoriteBox} onClick={goToFavorite}>
            <Grid item lg={12}>
                <Grid container justifyContent='flex-end'>
                    <IconButton onClick={removeFromFavorites}>
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
