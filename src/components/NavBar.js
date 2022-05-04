import { AppBar, Button, Grid, IconButton, Menu, MenuItem, Toolbar } from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings';
import React, { useState } from 'react'
import { useStyles } from '../styles/ui/uiClasses';
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null);
    const [inAnchor, setInAnchor] = useState(null);

    const handleMenuToggle = (e) => {
        if (!anchorEl) setAnchorEl(e.currentTarget);
        else setAnchorEl(null);
    }

    const handleInMenuToggle = (e) => {
        if (!inAnchor) setInAnchor(e.currentTarget);
        else setInAnchor(null);
        renderInsideMenu(e.target.value)
    }

    const changeTheme = (e) => {

    }

    const changeScale = (e) => {

    }

    const renderInsideMenu = (anchor) => {
        switch (anchor) {
            case 'theme':
                return <Menu
                    anchorEl={inAnchor}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    id={'menu'}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={Boolean(inAnchor)}
                    onClose={(e) => handleInMenuToggle(e)}
                >
                    <MenuItem onClick={(e) => changeTheme(e)} value='light'>Light</MenuItem>
                    <MenuItem onClick={(e) => changeTheme(e)} value='dark'>Dark</MenuItem>
                </Menu>

            case 'scale':
                return <Menu
                    anchorEl={inAnchor}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    id={'menu'}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={Boolean(inAnchor)}
                    onClose={(e) => handleInMenuToggle(e)}
                >
                    <MenuItem onClick={(e) => changeScale(e)} value='celsius '>Celsius </MenuItem>
                    <MenuItem onClick={(e) => changeScale(e)} value='fahrenheit'>Fahrenheit</MenuItem>
                </Menu>

            default:
                <></>
        }
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
                        <IconButton edge='end' color="inherit" onClick={(e) => handleMenuToggle(e)}>
                            <SettingsIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            id={'menu'}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={Boolean(anchorEl)}
                            onClose={(e) => handleMenuToggle(e)}
                        >
                            <MenuItem onClick={(e) => handleInMenuToggle(e)} value='theme'>Theme</MenuItem>
                            <MenuItem onClick={(e) => handleInMenuToggle(e)} value='scale'>Scale</MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
