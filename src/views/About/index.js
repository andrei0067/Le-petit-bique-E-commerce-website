import React from 'react'
import Slideshow from "../../components/Slideshow";
import {motion} from "framer-motion";

function About() {

    return (
        <motion.div
            initial={{x: 600, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            exit={{x: -600, opacity: 0}}
            transition={{duration: 0.5}}
        >

        </motion.div>
    )


}


export default About;
