import React from 'react'

import { Box, Container } from '@mui/material';

import Homepage from "../Homepage";
import Login from "../Login";
import SidebarMui from "../../components/SidebarMui";



/**
 * GlobalWrapper
 */
function GlobalWrapper(props) {
    const { children } = props;
    console.log('children', children);
    console.log('props', props);

    return (
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }}>
                <SidebarMui/>
                {children}
                <Homepage />
                <Login />
            </Box>
        </Container>
    )

}

GlobalWrapper.defaultProps = {
    classes: {},
};

export default GlobalWrapper;
