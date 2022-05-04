import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { useStyles } from '../../styles/ui/uiClasses'
import FavoriteBox from './FavoriteBox'

export default function Favorites() {
    const classes = useStyles()
    const favorites = useSelector(state => state.general.favorites)


    return (
        <Grid container className={classes.fullPage}>
            <Grid container justifyContent='center' className={classes.container}>
                {Object.keys(favorites).length === 0 ?
                    <Grid item>
                        <Typography variant='h4'>Please add locations to favorites</Typography>
                    </Grid> :
                    <Grid container justifyContent='space-evenly'>
                        {Object.values(favorites)?.map((favorite, index) =>
                            <Grid item xs={12} lg={2} key={index}>
                                <FavoriteBox favorite={favorite} />
                            </Grid>
                        )}
                    </Grid>}
            </Grid>
        </Grid>
    )
}
