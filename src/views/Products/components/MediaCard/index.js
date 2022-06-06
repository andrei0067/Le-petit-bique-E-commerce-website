import React from 'react';
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


const useStyles = makeStyles({
    mediaCard: {
        maxWidth: 250,
        minWidth: 250,
        margin: 10,
    }
})

export default function MediaCard(props) {

    const classes = useStyles();
    const { post } = props;
    const { body, id, title , price } = post;

    return (
        <Card className={classes.mediaCard} >
            <Link to={`/products/${id}`}>
                <CardMedia
                    component="img"
                    image={post.url}
                    alt={post.model}
                />
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
                    display='flex'
                    to={`/products/${id}`}
                    component={Link}
                    variant="outlined"
                    color="primary"
                >Learn More</Button>
            </CardActions>
        </Card>
    );
}
