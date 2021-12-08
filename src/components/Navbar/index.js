import React from 'react';
import { makeStyles } from '@mui/styles';
import './styles.css'
import {Link} from "react-router-dom";

import {
    Container,
    AppBar,
    Typography,
    Box,
    Toolbar ,
    IconButton,
    Button,
} from '@mui/material'

import {Menu} from '@mui/icons-material'

import BasicMenu from "../Menu";


const useStyles = makeStyles({
    toolbarCustom: {
        backgroundColor: '#161a1d',
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
                    <Link to="/Home">
                        <Button class="buttonCustom "
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Home
                            </Button>
                    </Link>
                    <Link to="/Products">
                        <Button class="buttonCustom"
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Products
                        </Button>
                </Link>
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Link to="/About">
                        <Button class="buttonCustom "
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            About
                        </Button>
                    </Link>
                    <Link to="/create-account">
                        <Button class="buttonCustom "
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            SignUp
                        </Button>
                    </Link>
                    <Link to="/login">
                        <Button class="buttonCustom "
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Login
                        </Button>
                    </Link>

                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0}}>
                                 <BasicMenu/>
                        </IconButton>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>



}

export default Navbar;
