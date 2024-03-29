import React, {useContext, useState} from 'react';
import {makeStyles} from '@mui/styles';
import {Link, NavLink} from "react-router-dom";
import companyLogo from "./Logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import {UserContext} from '../../context/UserContext'
import CartElement from '../CartElement'
import MenuAccount from'../MenuAccount'
import {
    onAuthStateChanged,
    signOut,
} from 'firebase/auth'
import { auth } from '../../config/firebaseConfig';

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
    ListItemIcon,
    Divider,
    Tooltip,
    Avatar,
    Dialog,
    DialogTitle,
    DialogContentText,
    DialogContent,
    DialogActions, Grid, Alert,
} from '@mui/material'
import {Menu} from '@mui/icons-material';

const useStyles = makeStyles({

    buttonCustom: {
        textTransform: 'default',
        backgroundColor: '#008CBA',
        borderRadius: '8px',
        borderStyle: 'none',
        boxSizing: 'border-box',
        color: '#FFFFFF',
        cursor: 'pointer',
        display: 'inline-block',
        fontSize: '12px',
        height: '40px',
        lineHeight: '20px',
        listStyle: 'none',
        margin: '5px',
        outline: 'none',
        padding: '10px 16px',
        position: 'relative',
        textAlign: 'center',
        textDecoration: 'none',
        colorTransition: '100ms',
        verticalAlign: 'baseline',
        userSelect: 'none',
        webkitUserSelect: 'none',
        touchAction: 'manipulation',
    },

    avatarStyle: {
        color: '#008CBA',
    },
    drawerBackground: {
        backgroundColor: '#161a1d',
    },
    dividerTextColor: {
        color: '#008CBA',
    },
    listTextColor: {
        color: 'white',
    },
    photo: {
        width: "150px",
    },
    drawerCustom: {
        backgroundColor: 'blue',
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

function SidebarMui() {
    const userContext = useContext(UserContext);
    const [user, setUser] = useState(null);
    const classes = useStyles();
    const [isOpen, setDrawerOpen] = useState()
    const [cartOpen, setCartOpen] = useState(false);
    const [cartEmptyOpen , setCartEmptyOpen] = useState(false);
    const [productsInSessionStorage , setProductsInSessionStorage] = useState([]);

    console.log("produse in cccart",productsInSessionStorage)
    console.log("userContext in sidebar" ,userContext?.email )
    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser);
    //  });
    //
    // const handleLogout = () => {
    //     window.location.reload(false);
    //     signOut(auth);
    //
    // }


    const handleCartOpen = () => {
        let keys = Object.keys(sessionStorage), i = keys.length;
        let aux = [];
        while ( i-- ) {
                aux.push(JSON.parse(sessionStorage.getItem(keys[i])));
        }

        setProductsInSessionStorage(aux);
        if(sessionStorage.length > 0)
        {
            setCartOpen(true);
        }
        else
        {
            setCartEmptyOpen(true);
        }
    };
    const handleCartEmptyClose = () => {
        setCartEmptyOpen(false);
    };

    const handleCartClose = () => {
        setCartOpen(false);
    };

    const handleCloseNavMenu = () => {
    }
    const toggleDrawer = () => {
        setDrawerOpen(!isOpen);
    }


    let nameFromEmail = userContext?.email.substring(0, userContext?.email.lastIndexOf("@"));

    const drawerClass = {paper: classes.drawerBackground}
    return <>

        <Drawer
            classes={drawerClass}
            anchor="left"
            open={isOpen}
            onClose={toggleDrawer}
        >
            <Box
                sx={{
                    width: 250,
                }}
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
            >
                <List>
                    <ListItem
                        button
                        onClick={toggleDrawer}
                        className={({isActive}) => isActive ? classes.active : ''}
                    >
                        <ListItemIcon class={classes.listTextColor}>
                            <MenuIcon/>
                        </ListItemIcon>
                    </ListItem>
                    <Divider color={'grey'}/>
                    <ListItem
                        button
                        component={NavLink}
                        to="/home"
                        className={({isActive}) => isActive ? classes.active : ''}
                    >
                        <ListItemIcon class={classes.listTextColor}>
                            <HomeIcon style={{marginRight: '20px'}}/>
                        </ListItemIcon>
                        <ListItemText class={classes.listTextColor} primary="Homepage"/>
                    </ListItem>
                    <ListItem
                        button
                        component={NavLink}
                        to="/products"
                        className={({isActive}) => isActive ? classes.active : ''}
                    >
                        <ListItemIcon class={classes.listTextColor}>
                            <ShoppingCartIcon style={{marginRight: '20px'}}/>
                        </ListItemIcon>

                        <ListItemText class={classes.listTextColor} primary="Products"/>
                    </ListItem>
                    <ListItem
                        button
                        component={NavLink}
                        to="/about"
                        className={({isActive}) => isActive ? classes.active : ''}
                    >
                        <ListItemIcon class={classes.listTextColor}>
                            <InfoIcon style={{marginRight: '20px'}}/>
                        </ListItemIcon>
                        <ListItemText class={classes.listTextColor} primary="About"/>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
        <AppBar classes={{root: classes.toolbarCustom}}>
            <Container maxWidth="xl">

                <Toolbar disableGutters>
                    <Box sx={{mr: 2, flexGrow: {xs: 1, md: 0}, display: {xs: 'flex'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleDrawer}
                            color="inherit"
                        >
                            <Menu/>
                        </IconButton>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 3, display: {xs: 'none', md: 'flex'}}}
                    >
                        <img className={classes.photo} src={companyLogo}/>
                    </Typography>
                   <div>
                       {/*{user?.email ? (*/}
                       {/*    <div>Welcome {nameFromEmail} . Enjoy your stay </div>*/}
                       {/*) : (*/}
                       {/*    <div>Welcome guest . Enjoy your stay</div>*/}
                       {/*)}*/}
                       {/*<Button onClick={handleLogout}>*/}
                       {/*    Log out*/}
                       {/*</Button>*/}
                   </div>
                   {/*{isLoggedIn ? <div>  Hi , {nameFromEmail} . Welcome back</div>  : <div> Hi , guest . Welcome back</div>}*/}
                    <Box sx={{flexGrow: 0, marginLeft: 'auto'}}>
                        <Link to="/create-account">
                            <Button className={classes.buttonCustom}
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                Create Account
                            </Button>
                        </Link>
                        <Link to="/login">
                            <Button className={classes.buttonCustom}
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                Login
                            </Button>
                        </Link>
                        <MenuAccount/>
                        {/*<Tooltip title={userContext?.email || ''}>*/}
                        {/*    <IconButton sx={{p: 0, marginLeft: 5}}>*/}
                        {/*        <Avatar sx={{bgcolor: '#008CBA'}} src="/static/images/avatar/2.jpg"/>*/}
                        {/*    </IconButton>*/}
                        {/*</Tooltip>*/}
                     </Box>
                    <Box sx={{flexGrow: 0}}>
                        <IconButton sx={{p: 0, marginLeft: 2}} onClick={handleCartOpen}>
                            <Avatar sx={{bgcolor: '#008CBA'}}>
                                <ShoppingCartIcon/>
                            </Avatar>
                        </IconButton>
                        <Dialog
                            open={cartEmptyOpen}
                            onClose={handleCartEmptyClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogContent>
                                <img src={'https://domelco.com/images/cart-empty.jpg'} />
                            </DialogContent>
                        </Dialog>
                        <Dialog
                            open={cartOpen}
                            onClose={handleCartClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle
                                id="alert-dialog-title"
                            >
                                <Typography variant="h5" align="center">Products</Typography>
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    {productsInSessionStorage.map(products => {
                                        return <CartElement
                                            title={products.title}
                                            price={products.price}
                                            id={products.id}
                                            folderId={products.imageIds}
                                        />
                                    })}

                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCartClose}>Close</Button>
                                <Link to="/checkout">
                                    <Button onClick={handleCartClose}>
                                        Checkout
                                    </Button>
                                </Link>
                            </DialogActions>
                        </Dialog>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </>
}

export default SidebarMui;
