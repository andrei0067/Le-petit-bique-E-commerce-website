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
        maxWidth: 345,
        minWidth: 200,
        margin: 10,
    }
})

export default function MediaCard(props) {

    const classes = useStyles();
    const { car, to } = props;
    const { url, model, maker, year, price, color, vin, id } = car;
    return (
        <Card className={classes.mediaCard}>
            <CardMedia
                component="img"
                height="140"
                image={url}
                alt={model}
            />
            <CardContent>
                <Typography gutterBottom variant="body2" component="div">
                    {maker} - {model} / {year}
                </Typography>
                <Typography gutterBottom variant="h3" component="div">
                    {Math.random(900).toFixed(2)} {price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {color} {vin}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    to={`/products/${id}`}
                    component={Link}
                    variant="outlined"
                    color="primary"
                >Learn More</Button>
            </CardActions>
        </Card>
    );
}
