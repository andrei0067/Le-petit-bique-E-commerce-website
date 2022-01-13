import React from 'react'
import {Container} from "@mui/material";
import SidebarMui from "../../components/SidebarMui";
import Slideshow from "../../components/Slideshow";




function About() {

    return (
        <Container style={{marginTop: 80}}>
            <SidebarMui/>
            <Slideshow/>
        </Container>
    )


}



export default About;
