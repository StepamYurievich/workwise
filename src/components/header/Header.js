import React, {useEffect, useRef, useState} from 'react';
import classes from './Header.module.css'


import {VscSearch} from "react-icons/vsc";
import {FaSortDown} from "react-icons/fa6";
import {FaHouse} from "react-icons/fa6";


import logo from '../images/logo.png'
import profile from '../images/user2.png'

import {Link} from "react-router-dom";
import ProfileBar from "./profile/profile_bar";


const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [actives, setActives] = useState(false)


    return (
        <div className={classes.container}>

            <div className={classes.container_inner}>
                <div className={classes.searchLogo}>
                    <div className={classes.logo}>
                        <Link to={'/'}><img src={logo} alt=""/></Link>
                    </div>
                    <div className={classes.logo_input}>
                        <input placeholder={'Search...'} type="text"/>
                        <button><VscSearch className={classes.VscSearch}/></button>
                    </div>
                </div>
                <div className={classes.items_inner}>
                    <div className={classes.items}>
                        <ul className={classes.item}>
                            <Link to={'/login'} style={{textDecoration: 'none', color: 'white'}}>
                                <li className={classes.i}><FaHouse/>Home</li>
                            </Link>

                            <Link to={'/companies'} style={{textDecoration: 'none', color: 'white'}}><FaHouse/>Companies</Link>


                            <Link to={'/help'} style={{textDecoration: 'none', color: 'white'}}>
                                <li className={classes.i}><FaHouse/>Help</li>
                            </Link>
                            <Link style={{textDecoration: 'none', color: 'white'}}>
                                <li className={classes.i}><FaHouse/>Profiles</li>
                            </Link>
                            <Link style={{textDecoration: 'none', color: 'white'}}>
                                <li className={classes.i}><FaHouse/>Jobs</li>
                            </Link>
                            <Link style={{textDecoration: 'none', color: 'white'}}>
                                <li className={classes.i}><FaHouse/>Maassages</li>
                            </Link>
                            <Link style={{textDecoration: 'none', color: 'white'}}>
                                <li className={classes.i}><FaHouse/>Notification</li>
                            </Link>
                        </ul>

                    </div>


                </div>
                <div>
                    <div className={classes.profile} onClick={() => {
                        setActives(!actives)
                    }}>
                        <div>
                            <img src={profile} alt=""/>
                        </div>
                        <span className={classes.name}>John</span>
                        <FaSortDown style={{color: 'white'}}/>
                    </div>

                    <div className={classes.profile_inner}>

                        <div className={classes.profile_bar}>
                            <ProfileBar
                                active={actives}
                                setActive={setActives}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;