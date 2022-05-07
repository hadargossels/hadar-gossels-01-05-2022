import { Dialog, DialogActions, DialogContent, Divider, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useStyles } from '../styles/ui/uiClasses'
import CloseIcon from '@material-ui/icons/Close';
import * as generalActions from '../redux/General/generalSlice'

export default function OptionsModal() {
    const classes = useStyles()
    const modal = useSelector(state => state.general?.modal)
    const theme = useSelector(state => state.general?.themeMode)
    const system = useSelector(state => state.general?.system)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(generalActions.toggleModal(false))
    }

    const handleThemeChange = (e) => {
        dispatch(generalActions.setTheme(e.target.value))
    }

    const handleSystemChange = (e) => {
        dispatch(generalActions.setSystem(e.target.value))
    }

    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            open={modal}
            fullWidth
            maxWidth='xs'
            className={classes.dialogContainer}
            classes={{ paper: classes.dialogPaper }}
        >
            <DialogActions style={{ padding: 0 }}>
                <IconButton
                    onClick={handleClose}
                    className={classes.dialogButton}
                >
                    <CloseIcon style={{ fontSize: 16 }} />
                </IconButton>
            </DialogActions>
            <DialogContent>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Theme</FormLabel>
                    <RadioGroup row aria-label="theme" name="theme1" value={theme} onChange={(e) => handleThemeChange(e)}>
                        <FormControlLabel value="light" control={<Radio />} label="Light" />
                        <FormControlLabel value="dark" control={<Radio />} label="Dark" />
                    </RadioGroup>
                </FormControl>
                <Divider className={classes.divider}/>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Scale</FormLabel>
                    <RadioGroup row aria-label="scale" name="scale1" value={system} onChange={(e) => handleSystemChange(e)}>
                        <FormControlLabel value="Imperial" control={<Radio />} label="°F" />
                        <FormControlLabel value="Metric" control={<Radio />} label="°C" />
                    </RadioGroup>
                </FormControl>
            </DialogContent>
        </Dialog>
    )
}
