import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WeatherBox from './WeatherBox';
// icons
import SearchIcon from '@material-ui/icons/Search';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
// ui
import { Box, Grid, IconButton, Typography } from '@material-ui/core'
import { useStyles } from '../../styles/ui/uiClasses';
import { CustomBoxTextField, StyledBoxAutoComplete } from '../../styles/ui/elements'
// redux
import * as generalActions from '../../redux/General/generalSlice'
import * as weatherActions from '../../redux/Weather/weatherSlice'

export default function Home() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const locations = useSelector(state => state.general?.locations)
    const locationInput = useSelector(state => state.general?.locationInput)

    const locationFull = useSelector(state => state.general?.locationFull)

    const system = useSelector(state => state.general.system)
    const favorites = useSelector(state => state.general.favorites)


    const currentWeather = useSelector(state => state.weather.currentWeather)
    const forecast = useSelector(state => state.weather.forecast)

    const temp = currentWeather?.Temperature?.[system]
    const method = favorites.hasOwnProperty(locationFull?.Key) ? 'remove' : 'add'

    useEffect(() => {
        if (locationFull && locationFull?.Key) {
            dispatch(weatherActions.getCurrentWeater(locationFull.Key))
            dispatch(weatherActions.getForecast(locationFull.Key))
        }
    }, [locationFull, system, dispatch])

    const handleLocationSearch = (e, newInputValue) => {
        dispatch(generalActions.getLocations(newInputValue))
        dispatch(generalActions.setLocationInput(newInputValue))
    }

    const handleLocationSelect = (e, value, reason) => {
        if (reason === 'clear') return
        dispatch(generalActions.setLocationFull(value))
        dispatch(weatherActions.getCurrentWeater(value.Key))
        dispatch(weatherActions.getForecast(value.Key))
    }

    const handleFavorites = () => {
        if (method === 'add') {
            dispatch(generalActions.addToFavorites({ key: locationFull?.Key, loction: locationFull }))
        } else if (method === 'remove') {
            dispatch(generalActions.removeFromFavorites({ key: locationFull?.Key }))
        }
    }

    return (
        <Grid container className={classes.fullPage}>
            <Grid container justifyContent='center' alignItems='flex-start' className={classes.container}>
                <Grid item xs={12} lg={6} className={classes.searchCont}>
                    <StyledBoxAutoComplete
                        id='location'
                        options={locations && locations}
                        value={locationFull}
                        inputValue={locationInput}
                        onChange={(e, value, reason) => handleLocationSelect(e, value, reason)}
                        popupIcon={<SearchIcon className={classes.searchIcon} />}
                        getOptionLabel={(option) =>
                            option?.LocalizedName ? `${option?.LocalizedName}, ${option?.Country?.LocalizedName}` : option
                        }
                        onInputChange={(e, newInputValue, reason) => { handleLocationSearch(e, newInputValue, reason) }}
                        style={{ paddingTop: 3 }}
                        renderInput={(params) => {
                            return (
                                <CustomBoxTextField
                                    styling={{ borderColor: 'transparent' }}
                                    variant='outlined'
                                    size='small'
                                    autoComplete='off'
                                    placeholder='Search'
                                    {...params}
                                    inputProps={{
                                        ...params.inputProps
                                    }}
                                />
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={12} lg={8} className={classes.homeContent}>
                    <Grid container justifyContent='center'>
                        <Grid item xs={12}>
                            <Grid container justifyContent='space-between' alignItems='center'>
                                <Grid item >
                                    <Grid container alignItems='center'>
                                        <Box component='span'><LocationOnOutlinedIcon className={classes.icons} /></Box>
                                        <Box component='span' className={classes.city}>{`${locationFull?.LocalizedName}, ${locationFull?.Country?.LocalizedName}`}</Box>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <IconButton onClick={handleFavorites} className={classes.icons}>
                                        {method === 'add' ?
                                            <StarOutlineIcon className={classes.favoriteIcon} /> :
                                            <StarIcon className={classes.favoriteIcon} />}
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container direction='column' alignItems='center' className={classes.todaysWeather}>
                            <Typography variant='h4' className={classes.todayTypo}>Today</Typography>
                            <Typography className={classes.tempText}>{`${temp?.Value} °${temp?.Unit}`}</Typography>
                            <Typography className={classes.weatherText}>{currentWeather.WeatherText}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justifyContent='space-evenly'>
                                {forecast?.map((day, index) =>
                                    <Grid item xs={12} lg={2} key={index}>
                                        <WeatherBox day={day} />
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
