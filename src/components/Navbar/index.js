import React from 'react';
import { makeStyles } from '@mui/styles';
import './styles.css'

import {
    Container,
    AppBar,
    Typography,
    Box,
    Toolbar ,
    IconButton,
    Button,
} from '@mui/material'

import { Menu } from '@mui/icons-material'

import BasicMenu from "../Menu";

const useStyles = makeStyles({
    toolbarCustom: {
        backgroundColor: 'black',
    },
    h6Custom: {
        color: 'blue',
    },
    h6_2_new: {
        backgroundColor: 'blue',
    }
})

function Navbar() {
    const classes = useStyles();
    console.log(classes);

    const handleCloseNavMenu = () => {

    };
    const handleOpenUserMenu = () => {

    }

    const customClass = { h6: classes.h6Custom };
    return <AppBar classes={{root: classes.toolbarCustom}}>
        <Container maxWidth="xl">

            <Toolbar disableGutters  >
                <Typography
                    variant="h6"
                    noWrap
                    className={customClass}
                    component="div"
                    sx={{ mr: 3, display: { xs: 'none', md: 'flex' } }}
                >
                    LOGO
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={() => {}}
                        color="inherit"
                    >
                        <Menu />
                    </IconButton>
                </Box>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                    LOGO
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button class="button-34"
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Home
                        </Button>
                        <Button class="button-34"
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Products
                        </Button>
                </Box>

                <Box sx={{ flexGrow: 0 }}>

                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            {/*<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />*/}
                                 <BasicMenu/>
                        </IconButton>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
}
export default Navbar;
