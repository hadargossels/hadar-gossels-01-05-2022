import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
    container: {
        borderRadius: 4,
        padding: 30,
        height: '50vh'
    },
    fullPage: {
        backgroundColor: theme.palette.background.default,
        minHeight: '100%',
    },
    searchCont: {
        maxHeight: 50
    },
    weatherBox: {
        backgroundColor: theme.palette.background.container,
        borderRadius: 4,
        boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
        padding: `10px 0`,
        [theme.breakpoints.down('md')]: {
            boxShadow: 'none',
            marginBottom: 15

          },
    },
    todayTypo: {
        fontWeight: 600,
        [theme.breakpoints.down('md')]: {
            marginTop: 15
          },
    },
    dayTypo: {
        fontWeight: 600,
        fontSize: '1.5em',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.2em',

          },
    },
    dateTypo: {
        color: theme.palette.secondary.text,
    },
    todaysWeather: {
        height: 200
    },
    searchIcon: {
        color: theme.palette.secondary.text
    },
    favoriteBtn: {
        width: 40,
        height: 40,
        padding: 0,
        [theme.breakpoints.down('md')]: {
            width: 30,
        height: 30,
          },
    },
    favoriteIcon: {
        width: '100%',
        height: '100%',
        padding: 0
    },
    locationIcon: {
        width: 40,
        height: 40,
        padding: 0,
        [theme.breakpoints.down('md')]: {
            width: 30,
        height: 30,
          },
    },
    city: {
        fontSize: '2em',
        color: theme.palette.secondary.text,
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5em',
          },
    },
    temp: {
        fontSize: '2.5em',
        marginLeft: 10,
        fontWeight: 600,
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5em',
          },
    },
    homeContent: {
        padding: '20px 0'
    },
    navlink: {
        textDecoration: 'none',
        color: theme.palette.primary.text,
    },
    activeNavlink: {
        color: theme.palette.primary.text,
        textDecoration: 'none',
        fontWeight: 600
    },
    weatherText: {
        fontSize: '3em',
        [theme.breakpoints.down('md')]: {
            fontSize: '2em',
          },
    },
    tempText: {
        textShadow: `3px 3px 5px rgba(0, 0, 0, 0.2)`,
        fontSize: '3em',
        [theme.breakpoints.down('md')]: {
            fontSize: '2em',
          }
    },
    mobileNoShow: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            display: 'none',
          },
    },
    minMaxTemp: {
        fontSize: '1.5em',
        [theme.breakpoints.down('md')]: {
            fontSize: '1em',
          },
    },
    country: {
        fontSize: '1.25em',
    },
    

}))


