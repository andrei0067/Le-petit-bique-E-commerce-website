import React, {useState} from 'react'
import {onAuthStateChanged} from 'firebase/auth';

import { auth } from '../../config/firebaseConfig';

import { UserContext} from '../../components/context/UserContext'
import SnackbarCustom from "../../views/SnackbarCustom"

/**
 * GlobalWrapper
 */
function GlobalWrapper(props) {
    const { children } = props;
    const [authUser, setAuthUser ] = useState(null)
    onAuthStateChanged(auth, (currentUser) => {
        return setAuthUser(currentUser);
    })

    return (
        <>
            <SnackbarCustom/>
            <UserContext.Provider value={authUser}>
                {children}
            </UserContext.Provider>
        </>
    )

}

export default GlobalWrapper;
