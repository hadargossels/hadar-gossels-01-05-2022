import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
// import * as snackbarActions from '../SnackBar/action';
import { APP_KEY, BASE_URL, END_POINT } from '../../utils/constants';
// import { saveToSessionStorage } from '../../utils/helperFunctions';
import { setParams } from '../../utils/setParams';


export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        currentWeather: {},
        forecast: [],
        favoriteWeather: {}
    },
    reducers: {
        setCurrentWeather: (state, action) => {
            state.currentWeather = action.payload
        },
        setForecast: (state, action) => {
            state.forecast = action.payload
        },
        setFavoriteWeather: (state, action) => {
            let favoriteWeatherCopy = {...state.favoriteWeather}
            favoriteWeatherCopy[action.payload.location] = action.payload.data
            state.favoriteWeather = favoriteWeatherCopy
        },
    },
});

export const getCurrentWeater = (location) => async (dispatch, getState) => {
    try {
        const res = await axios.get(BASE_URL + END_POINT.CURRENT + `/${location}`, setParams({
            apikey: APP_KEY,
            details: true 
        }));
        if (res.status === 200 && res.data) {
            dispatch(setCurrentWeather(res.data[0]))
        }
    } catch (error) {
        console.error(error)
    }
};

export const getFavoriteCurrentWeater = (location) => async (dispatch, getState) => {
    try {
        const res = await axios.get(BASE_URL + END_POINT.CURRENT + `/${location}`, setParams({
            apikey: APP_KEY,
            details: true 
        }));
        if (res.status === 200 && res.data) {
            dispatch(setFavoriteWeather({data: res.data[0], location}))
        }
    } catch (error) {
        console.error(error)
    }
};

export const getForecast = (location) => async (dispatch, getState) => {
    const state = getState()
    try {
        const res = await axios.get(BASE_URL + END_POINT.FORECAST + `/${location}`, setParams({
            apikey: APP_KEY,
            details: true,
            metric: state.general.system === "Metric"
        }));
        if (res.status === 200 && res.data) {
            dispatch(setForecast(res.data.DailyForecasts))
        }
    } catch (error) {
        console.error(error)
    }
};



export const {
    setCurrentWeather,
    setForecast,
    setFavoriteWeather
} = weatherSlice.actions;


export default weatherSlice.reducer;