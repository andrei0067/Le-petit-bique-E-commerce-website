import React, {useEffect, useState} from 'react';
import { makeStyles } from '@mui/styles';
import {
    CardMedia,
} from '@mui/material'
import Spinner from "../Spinner";
import {connect} from "react-redux";
import {getImage} from "./actions";



function MediaCardCustom(props) {
    const{ imageId }=props

    const [loading, setLoading]=useState(false);
    const [image, setImage]=useState('');

    const handleCallback = (url) => {
        setLoading(false);
        setImage(url);
    }

    useEffect(() => {
        setLoading(true)
      props.dispatchGetImage(imageId , handleCallback);
    },[] );

    if(loading) {
        return <Spinner/>
    }
    return(
        <CardMedia
            component="img"
            height={200}
            image={image}
        />
    )
}
const mapDispatchToProps ={
    dispatchGetImage : getImage,
}

export default connect(null , mapDispatchToProps)(MediaCardCustom)