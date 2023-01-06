import React from 'react'
import companyLogo from "./CompanyLogo.png"
import Background from "../../components/Background";
import {motion} from "framer-motion"
import {makeStyles} from "@mui/styles";

/**
 * Homepage
 */

const useStyles = makeStyles({
    companyStyle: {
        position: 'absolute',
        width: '100%',
        zIndex:1,
    },
    overlayBackground:{
        position: 'absolute',
        left: '0',
        top: '0',
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
        opacity: "30%",
    }
})
function Homepage() {
    const classes = useStyles();

    return (
    <div>

        <div className={classes.overlayBackground}></div>

        <motion.div
            initial={{y:1200}}
            animate={{y:60}}
            transition={{ type: "spring", bounce: 0.4 ,duration: 5}}
        >
             <img className={classes.companyStyle} src={companyLogo} />
        </motion.div>

        <Background/>

    </div>



    )


}


export default Homepage;
