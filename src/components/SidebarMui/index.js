import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import {Link, NavLink} from "react-router-dom";
import companyLogo from "./Logo.png";
import {
    Container,
    Toolbar,
    AppBar,
    Typography,
    Box,
    IconButton,
    List,
    Button,
    ListItem,
    ListItemText,
    Drawer,
} from '@mui/material'
import { Menu } from '@mui/icons-material';

const useStyles = makeStyles({
    photo: {
        height: "12px" ,
        width: "12px",
    },
    toolbarCustom: {
        backgroundColor: '#161a1d',
    },
    h6Custom: {
        color: 'blue',
    },
    h6_2_new: {
        backgroundColor: 'blue',
    },
    active: {
        textDecoration: 'none',
        color: 'grey'
    }
})

function Navbar(props) {
    const classes = useStyles();
    const [isOpen, setDrawerOpen ] = useState()
    const handleOpenUserMenu = () => {}
    const handleCloseNavMenu = () => {}
    const toggleDrawer = () => {
        setDrawerOpen(!isOpen);
    }
    const customClass = { h6: classes.h6Custom };
    return <>

        <Drawer
            anchor="left"
            open={isOpen}
            onClose={toggleDrawer}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
            >
                <List>
                    <ListItem
                        button
                        onClick={toggleDrawer}
                        className={({isActive}) => isActive ? classes.active: ''}
                    >
                        <ListItemText primary="x" />
                    </ListItem>
                    <ListItem
                        button
                        component={NavLink}
                        to="/home"
                        className={({isActive}) => isActive ? classes.active: ''}
                    >
                        <ListItemText primary="Homepage" />
                    </ListItem>
                    <ListItem
                        button
                        component={NavLink}
                        to="/products"
                        className={({isActive}) => isActive ? classes.active: ''}
                    >
                        <ListItemText primary="Products" />
                    </ListItem>
                    <ListItem
                        button
                        component={NavLink}
                        to="/about"
                        className={({isActive}) => isActive ? classes.active: ''}
                    >
                        <ListItemText primary="About" />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
        <AppBar classes={{root: classes.toolbarCustom}}>
            <Container maxWidth="xl">

                <Toolbar disableGutters  >
                    <Box sx={{ mr: 2, flexGrow: { xs: 1, md: 0 }, display: { xs: 'flex'} }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleDrawer}
                            color="inherit"
                        >
                            <Menu />
                        </IconButton>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        className={customClass}
                        component="div"
                        sx={{ mr: 3, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img height={'30px'} src={companyLogo}/>
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
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Link to="/create-account">
                            <Button class="buttonCustom "
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Create Account
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
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </>
}
export default Navbar;
