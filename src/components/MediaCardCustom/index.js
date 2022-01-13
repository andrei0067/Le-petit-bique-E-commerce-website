import React, {useEffect, useState} from 'react';
import {
    CardMedia,
} from '@mui/material'
import Spinner from "../Spinner";
import {connect} from "react-redux";
import {getImage} from "./actions";



function MediaCardCustom(props) {
    const{ imageId , folderId }=props

    const [loading, setLoading]=useState(false);
    const [image, setImage]=useState('');

    const handleCallback = (url) => {
        debugger;
        setLoading(false);
        setImage(url);
    }

    useEffect(() => {
        setLoading(true)
      props.dispatchGetImage(imageId , folderId , handleCallback);
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