import React from "react"
import CircleLoader from "react-spinners/CircleLoader"
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    parentLoaderClass:{
        display: 'flex',
        flex: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    loaderCustom: {
        color: "#A237B5"
    }
})

export default function Spinner() {
    const classes = useStyles()
    return(
        <div className={classes.parentLoaderClass}>
            <CircleLoader className={classes.loaderCustom}/>
        </div>
    )
}
