import React from 'react'

import Background from "../../components/Background";
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
                <Background/>
        </motion.div>
    )


}


export default Homepage;
