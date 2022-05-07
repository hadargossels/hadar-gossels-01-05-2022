import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
// import * as snackbarActions from '../SnackBar/action';
import { APP_KEY, BASE_URL, END_POINT } from '../../utils/constants';
import { saveToSessionStorage } from '../../utils/helperFunctions';
import { setParams } from '../../utils/setParams';



export const generalSlice = createSlice({
    name: 'general',
    initialState: {
        locations: [],
        locationInput: 'Tel Aviv, Israel',
        locationFull: {
            "Version": 1,
            "Key": "215854",
            "Type": "City",
            "Rank": 31,
            "LocalizedName": "Tel Aviv",
            "Country": {
                "ID": "IL",
                "LocalizedName": "Israel"
            },
            "AdministrativeArea": {
                "ID": "TA",
                "LocalizedName": "Tel Aviv"
            }
        },
        themeMode: 'light',
        system: 'Metric',
        favorites: {},
        modal: false
    },
    reducers: {
        setLocations: (state, action) => {
            state.locations = action.payload
        },
        setLocationInput: (state, action) => {
            state.locationInput = action.payload
        },
        setLocationFull: (state, action) => {
            state.locationFull = action.payload
            let location = JSON.parse(sessionStorage.getItem('LOCATION'))
            saveToSessionStorage('LOCATION', {...location, full: action.payload})
        },
        addToFavorites: (state, action) => {
            let favoritesCopy = {...state.favorites}
            favoritesCopy[action.payload.key] = action.payload.loction
            state.favorites = favoritesCopy
            saveToSessionStorage('FAVORITES', favoritesCopy)
        },
        removeFromFavorites: (state, action) => {
            let favoritesCopy = {...state.favorites}
            delete favoritesCopy[action.payload.key] 
            state.favorites = favoritesCopy
            saveToSessionStorage('FAVORITES', favoritesCopy)
        },
        setFavorites: (state, action) => {
            state.favorites = action.payload
        },
        toggleModal: (state, action) => {
            state.modal = action.payload
        },
        setTheme: (state, action) => {
            state.themeMode = action.payload
        },
        setSystem: (state, action) => {
            state.system = action.payload
        },
    },
});

export const getLocations = (query) => async (dispatch, getState) => {
    try {
        const res = await axios.get(BASE_URL + END_POINT.LOCATION, setParams({
            apikey: APP_KEY,
            q: query
        }));
        if (res.status === 200 && res.data) {
            dispatch(setLocations(res.data))
        }
    } catch (error) {
        console.error(error)
    }
};


export const {
    setLocations,
    setLocationInput,
    setLocationFull,
    addToFavorites,
    removeFromFavorites,
    setFavorites,
    toggleModal,
    setTheme,
    setSystem
} = generalSlice.actions;


export default generalSlice.reducer;