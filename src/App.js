import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'

// Themes
import { lightThemeColors } from './styles/theme/lightTheme'
import { darkThemeColors } from './styles/theme/darkTheme'
import { useDispatch, useSelector } from 'react-redux';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

import Home from './components/home/Home';
import Favorites from './components/favorites/Favorites';
import NavBar from './components/NavBar';

import * as generalActions from './redux/General/generalSlice'
import { saveToSessionStorage } from './utils/helperFunctions';

function App() {
  const dispatch = useDispatch()
  const themeMode = useSelector(state => state.general.themeMode)
  const mainPalette = themeMode === 'light' ? lightThemeColors : darkThemeColors

  const theme = createTheme({
    palette: mainPalette,
    typography: {
    },
    overrides: {
      MuiIconButton: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
      MuiTypography: {
        root: {
          color: mainPalette.primary.text,
        },
      },
      MuiButton: {
        root: {
          backgroundColor: mainPalette.primary.main,
          color: mainPalette.primary.text,
          borderRadius: '11px',
          '&.Mui-disabled': {
            backgroundColor: mainPalette.primary.main,
            color: mainPalette.primary.main,
          },
          '&:hover': {
            backgroundColor: mainPalette.primary.main,
          },
        },
      },
      MuiInputLabel: {
        root: {
          color: mainPalette.primary.main,
          '&.Mui-focused': {
            color: mainPalette.primary.main,
          },
        },
      },      
      MuiCssBaseline: {
        '@global': {
          body: {
            '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
              width: '5px',
              height: '5px',
            },
            '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
              backgroundColor: mainPalette.primary.main,
              minHeight: 10,
              borderRadius: 5,
              '&:hover': {
                backgroundColor: mainPalette.primary.main,
              },
            },
            '&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track': {
              backgroundColor: mainPalette.primary.main,
              borderRadius: 5,
            },
          },
        },
      },
    },
  })

  useEffect(() => {
    let favorites = JSON.parse(sessionStorage.getItem('FAVORITES'));
    let location = JSON.parse(sessionStorage.getItem('LOCATION'));

    if (favorites) {
      dispatch(generalActions.setFavorites(favorites))
    }

    if (location) {
      dispatch(generalActions.setLocationFull(location.full))
    }

  })
  

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <NavBar />
        <CssBaseline />
        <Routes>
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/*'
            element={<Navigate replace to='/home' />} />
          <Route path='/home'
            element={<Home />} />
        </Routes>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
