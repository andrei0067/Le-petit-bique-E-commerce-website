import React from 'react'
import {
    Container,
    Box,
    Typography,
    CardMedia, Button
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useParams, useNavigate } from 'react-router-dom';

import mockData from '../Products/mockData';
import SidebarMui from "../../components/SidebarMui";



const useStyles = makeStyles({
    backButton: {
        '& svg': {
            marginRight: 4,
        }
    }
});

function Product(props) {
    const params = useParams()
    const { id } = params;
    const navigate = useNavigate();
    const classes = useStyles();

    const car = mockData.find(car => car.id.toString() === id.toString());
    const handleClick = () => {
        navigate('/products')
    }


    return (
        <Container component="main" maxWidth="sm">
            <SidebarMui/>
            <Box mt={2}>
                <Button
                    className={classes.backButton}
                    onClick={handleClick}
                    variant="outlined"
                ><ArrowBackIcon fontSize="small" />Products</Button>
            </Box>
            <Box
                mt={2}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <CardMedia
                    component="img"
                    sx={{ width:600 }}
                    image={car.url}
                    alt={`${car.maker}/${car.model}`}
                />
                <Typography variant="h4" component='h1' gutterBottom>Product {car.maker}/{car.model}</Typography>
                <Typography component="div" gutterBottom>
                    <Typography variant="caption" component="span">Year:</Typography>
                    {car.year}
                </Typography>
                <Typography component="div" gutterBottom>
                    <Typography variant="caption" component="span">Color:</Typography>
                    {car.color}
                </Typography>
                <Typography component="div" gutterBottom>
                    <Typography variant="caption" component="span">Vin:</Typography>
                    {car.vin}
                </Typography>

                <Typography component="div" variant="h4" gutterBottom>
                    <Typography variant="caption" component="span">Price:</Typography>
                    {Math.random(900).toFixed(2)} {car.price}
                </Typography>
            </Box>
        </Container>
    )
}



export default Product;
