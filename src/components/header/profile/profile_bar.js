import React from 'react';
import classes from './profile_bar.module.css'
import {Link} from "react-router-dom";



const ProfileBar = ({active,setActive}) => {

    return (
        <div className={
            active
                ?[classes.container,classes.active].join(' ')
                :[classes.container]
        }>
            <div className={classes.statusBar}>
                <div className={classes.cistomText}>Online Status</div>
                <div >
                    <form className={classes.statuses}>
                        <div className={classes.statusOnline}>
                            <input type="radio" value="male" id="male"
                                    name="gender"/>
                            <label htmlFor="male">Online</label>
                        </div>

                        <div className={classes.statusOnline}>
                            <input type="radio" value="female" id="female"
                                    name="gender"/>
                            <label htmlFor="female">Offline</label>
                        </div>

                    </form>
                </div>
            </div>
            <div className={classes.customBar}>
                <div className={classes.customs}>
                    <div className={classes.cistomText}>Custom Status</div>
                    <div className={classes.custom}>
                        <input type="text"/>
                        <button>Ok</button>
                    </div>
                </div>
            </div>
            <div className={classes.customBar}>
                <div className={classes.customs}>
                    <div className={classes.cistomText}>Setting</div>
                    <div className={classes.account}>
                        <Link>
                            <div>Account Setting</div>
                        </Link>
                        <Link>
                            <div>Account Setting</div>
                        </Link>
                        <Link>
                            <div>Account Setting</div>
                        </Link>
                        <Link>
                            <div>Account Setting</div>
                        </Link>
                    </div>
                </div>

            </div>
            <div className={classes.login}>
                <button>Logout</button>
            </div>
        </div>
    );
};

export default ProfileBar;