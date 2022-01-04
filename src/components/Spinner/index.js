import React from "react"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"
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
            <ClimbingBoxLoader className={classes.loaderCustom}/>
        </div>
    )
}
