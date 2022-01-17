import React, {useState} from 'react'
import {onAuthStateChanged} from 'firebase/auth';

import {auth} from '../../config/firebaseConfig';

import {UserContext} from '../../context/UserContext'
import SnackbarCustom from "../../views/SnackbarCustom"
import {Outlet} from "react-router-dom";
import SidebarMui from "../../components/SidebarMui";
import {Container} from "@mui/material";

/**
 * GlobalWrapper
 */
function GlobalWrapper(props) {
    const {children} = props;
    const [authUser, setAuthUser] = useState(null)
    onAuthStateChanged(auth, (currentUser) => {
        return setAuthUser(currentUser);
    })

    return (
        <>
            <SnackbarCustom/>
            <UserContext.Provider value={authUser}>
                <SidebarMui/>
                <Container component="main" maxWidth="md" sx={{mt: 15}}>
                    <Outlet/>
                </Container>
            </UserContext.Provider>
        </>
    )

}

export default GlobalWrapper;
