import { AppBar, Button, Grid, IconButton, Toolbar } from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react'
import { useStyles } from '../styles/ui/uiClasses';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import * as generalActions from '../redux/General/generalSlice'
import OptionsModal from './OptionsModal';


export default function NavBar() {
    const dispatch = useDispatch()
    const classes = useStyles()
    const modal = useSelector(state => state.general?.modal)

    const handleModalToggle = (e) => {
        dispatch(generalActions.toggleModal(!modal))
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container alignItems='center' justifyContent='space-between'>
                    <Grid item>
                        <Button color="inherit">
                            <NavLink to='/home' className={(navData) => navData.isActive ? classes.activeNavlink : classes.navlink}>Home</NavLink>
                        </Button>
                        <Button color="inherit">
                            <NavLink to='/favorites' className={(navData) => navData.isActive ? classes.activeNavlink : classes.navlink}>Favorites</NavLink>
                        </Button>
                    </Grid>
                    <Grid item>
                        <IconButton edge='end' color="inherit" onClick={(e) => handleModalToggle(e)}>
                            <SettingsIcon />
                        </IconButton>
                        <OptionsModal />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
