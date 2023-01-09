import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import {useContext, useState} from "react";
import {UserContext} from "../../context/UserContext";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../../config/firebaseConfig";

export default function AccountMenu() {
    const userContext = useContext(UserContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [user, setUser] = useState(null);

    console.log("userContext in menu", userContext?.email)

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });


    const handleLogout = () => {
        signOut(auth);

    }


    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    let nameFromEmail = userContext?.email.substring(0, userContext?.email.lastIndexOf("@"));
    const textIfLoggedIn = 'Welcome ' + nameFromEmail + '. Have a nice stay';
    const textIfNotLoggedIn= 'Welcome guest. Have a nice stay';
    return (
        <React.Fragment>
            <Tooltip title={user?.email ? textIfLoggedIn : textIfNotLoggedIn}>
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{p: 0, marginLeft: 5}}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{bgcolor: '#008CBA'}} src="/static/images/avatar/2.jpg"/>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                {user?.email  ?
                    (
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small"/>
                    </ListItemIcon>
                    Logout
                </MenuItem>
                    ) : (
                        <MenuItem>
                            Not logged in
                        </MenuItem>
                    )
                }
            </Menu>
        </React.Fragment>
    );
}