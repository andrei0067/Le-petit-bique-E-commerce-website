import React from 'react'
import companyLogo from "./CompanyLogo.png"
import Background from "../../components/Background";
import {motion} from "framer-motion"
import {makeStyles} from "@mui/styles";
import buttonExplore from "./buttonExplore.png"
import {RemoveScrollBar} from 'react-remove-scroll-bar'
import {Link} from "react-router-dom";

/**
 * Homepage
 */

const useStyles = makeStyles({
    companyStyle: {
        position: 'absolute',
        width: '100%',
        zIndex: 1,
    },
    buttonStyle: {
        position: 'relative',
        width: '50%',
        zIndex: 1,
        top:'550px',
        left:'215px',
    },
    overlayBackground: {
        position: 'absolute',
        left: '0',
        top: '0',
        backgroundColor: 'black',
        height: '800%',
        width: '100%',
        opacity: "30%",
    }
})


function Homepage() {
    const classes = useStyles();

    return (
        <div>
            <RemoveScrollBar/>

            <div className={classes.overlayBackground}></div>

            <motion.div
                initial={{y: 1200}}
                animate={{y: 60}}
                transition={{type: "spring", bounce: 0.4, duration: 5}}
            >
                <img className={classes.companyStyle} src={companyLogo}/>

            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{ duration: 2.5 , delay: 5}}
            >
                <Link to ={`/products`}>
                    <img className={classes.buttonStyle} src={buttonExplore}/>
                </Link>

            </motion.div>

            <Background/>

        </div>


    )


}


export default Homepage;
