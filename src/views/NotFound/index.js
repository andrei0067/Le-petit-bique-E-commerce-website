import React from 'react'
import {
    Container,
    Box,
    Typography
} from '@mui/material';
import Navbar from "../../components/Navbar";




/**
 * Homepage
 */
function NotFound() {
    return (
        <Container component="main" maxWidth="sm">
            <Navbar/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Typography variant="h2">404. Not Found!</Typography>
            </Box>
        </Container>
    )
}



export default NotFound;
