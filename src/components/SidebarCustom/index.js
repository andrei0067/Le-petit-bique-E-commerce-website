import React, {useState} from "react";
import {makeStyles} from "@mui/styles";
import {Button ,SwipeableDrawer } from "@mui/material";
import Navbar from "../Navbar";
import CustomButton from "../Button";


const useStyles = makeStyles({
    rootButton1: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    rootButton2: {
        background:'red',
        width:100,
    },
});

function SidebarCustom(){
    const [openDrawer , setOpenDrawer] = useState(false);
    const classes=useStyles();


    const toggleDrawer=()=>{
        setOpenDrawer(!openDrawer);



    }


    return(
    <div>
        <Navbar toggleDrawer={toggleDrawer}/>
            <Button onClick={toggleDrawer}>Login</Button>
            <SwipeableDrawer
                anchor='Login'
                open={openDrawer}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
            >
                <Button className={classes.rootButton1}>Login</Button>
                <CustomButton className={classes.rootButton2}>LoginTest</CustomButton>
            </SwipeableDrawer>

    </div>
    );
}

export default SidebarCustom;