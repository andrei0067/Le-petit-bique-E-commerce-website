import React from 'react'
import {
    Container,
    Box, Typography,
} from '@mui/material';

import cars from './mockData';

import MediaCard from './components/MediaCard';
/**
 * Homepage
 */
function Products() {
    return (
        <Container component="main" maxWidth="lg">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 'auto',
                }}>
                <Typography component="h1" variant='h6' gutterBottom>Products</Typography>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexWrap: 'wrap',
                    }}>
                {cars.map(car => {
                    return <MediaCard
                        key={car.id}
                        car={car}
                    />
                })}
                </Box>

            </Box>
        </Container>
    )
}



export default Products;
