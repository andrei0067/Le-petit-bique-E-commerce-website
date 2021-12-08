import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { sidebarData } from './SidebarData';
import './styles.css';
import { IconContext } from 'react-icons';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    navbar: {
        backgroundColor: 'green',
        height: '80px',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
    },
});

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const classes = useStyles();
    const showSidebar = () => setSidebar(!sidebar);



    return (
        <>
            <IconContext.Provider value={{ color: '#008CBA' }}>
                <div className={classes.navbar}>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {sidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Sidebar;
