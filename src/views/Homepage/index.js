import React from 'react'

import {Container} from "@mui/material";
import Background from "../../components/Background";
import SidebarMui from "../../components/SidebarMui";
import {motion} from "framer-motion"


/**
 * Homepage
 */
function Homepage() {

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration:0.5}}
        >
            <Container>
                <SidebarMui/>
                <Background/>

            </Container>
        </motion.div>
    )


}


export default Homepage;
