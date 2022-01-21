import React from 'react'
import {
    Container,
    Box,
    Typography
} from '@mui/material';
import {motion} from "framer-motion";



/**
 * Homepage
 */
function NotFound() {
    return (
    <motion.div
        initial={{x: 600, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        exit={{x: -600, opacity: 0}}
        transition={{duration: 0.5}}
    >
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Typography variant="h2">404. Not Found!</Typography>
            </Box>
    </motion.div>
    )
}



export default NotFound;
