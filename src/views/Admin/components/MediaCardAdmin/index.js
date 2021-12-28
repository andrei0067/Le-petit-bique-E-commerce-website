import React, {useEffect} from 'react';
import { Link } from'react-router-dom';
import { makeStyles } from '@mui/styles';
import {
    Card,
    CardMedia,
    CardActions,
    CardContent,
    Button,
    Typography,
} from '@mui/material'
import Spinner from "../../../../components/Spinner";
import MediaCardCustom from "../../../../components/MediaCardCustom";



const useStyles = makeStyles({
    mediaCard: {
        maxWidth: 250,
        minWidth: 250,
        margin: 10,
    }
})


export default function MediaCardAdmin(props) {
    const {dispatchOpenDialog}=props;
    const classes = useStyles();
    const {post , onDelete } = props;
    const { body, id, title , price } = post;
    const handleOnDelete=()=>{
        onDelete(id);
    }


console.log(dispatchOpenDialog)
    return (
        <Card className={classes.mediaCard} >
            <Link to={`/products/${id}`}>
                <MediaCardCustom imageId={id}/>
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" marginTop={'2px'}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
                    {body}
                </Typography>
                <Typography gutterBottom variant="body1" component="div" marginTop={'10px'}>
                    {price}
                </Typography>
            </CardContent>

            <CardActions>
                <Button
                    onClick={dispatchOpenDialog}
                    display='flex'
                    variant="outlined"
                    color="primary"
                >Learn More</Button>
                <Button
                    onClick={handleOnDelete}
                    display='flex'
                    variant="outlined"
                    color="primary"
                >Delete</Button>
            </CardActions>
        </Card>
    );
}
