import React from 'react';
import classes from './help.module.css'

import formicon from '../../images/formicon.png'
import icon1 from '../../images/icon1(1).png'
import icon2 from '../../images/icon2(1).png'
import {Link} from "react-router-dom";

const Help = () => {

    const navbar = [
        {title:'Home'},
        {title:'Getting Started'},
        {title:'Manage Your Account'},
        {title:'Build Your Pfile'},
        {title:'ork with Clients'},
        {title:'Get Paid'},
        {title:'Discovering & Payments'},
        {title:'Reset Your Account'},
    ]
    const column1 =[
        {title:'Change or add email address'},
        {title:'Reset your password'},
        {title:'Close your account'},
    ]
    return (
        <main className={classes.main}>
            <div className={classes.containerHeader}>
                <div className={classes.containerHeaderInner}>
                    <div className={classes.title}>How Can, We Help You?</div>
                    <div className={classes.inputContainer}><input placeholder={'Search for help...'} type="search"/></div>
                </div>

            </div>
            <div className={classes.container}>
                <div className={classes.flexContainer}>
                    <aside className={classes.aside}>
                        <nav className="folder">
                            <ul className={classes.ul}>
                                {
                                    navbar.map(t=>(
                                        <li className={classes.liItem}><Link className={classes.links}>{t.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </aside>
                    <section className={classes.mainSection}>
                        <div className={classes.container1}>
                            <div className={classes.visitHelpForum}>
                                <label className={classes.visitHelpHeader}>Visit Our Help Forum</label>
                                <p className={classes.ph}>View, ask, or answer questions about using LinkedIn. Our moderators and
                                    community can help!</p>
                            </div>
                            <div className={classes.linkContainer}>
                                <Link href="" className={classes.linkVisit}>Visit help forum</Link>
                            </div>
                        </div>

                        <div className={classes.container2}>
                            <div className={classes.headerCont1}>
                                <img src={icon1} alt=""/>
                                <label className={classes.headerLabel}>Popular Actions</label>
                            </div>
                            <hr/>

                            <div className={classes.linkFolder}>
                                <div className={classes.column1}>
                                    {
                                        column1.map(t=>(
                                            <Link href="" className={classes.links1}>{t.title}</Link>
                                        ))
                                    }

                                </div>
                                <div className={classes.column2}>
                                    <a href="" className={classes.links2}>Manage emails you get from Workwise</a>
                                    <a href="" className={classes.links2}>Get Paid</a>
                                    <a href="" className={classes.links2}>Build Your Profiles</a>
                                </div>
                            </div>
                        </div>

                        <div className={classes.container2}>
                            <div className="header-cont-2">
                                <img src={icon2} alt="" className={classes.contImg}/>
                                <label htmlFor="" className={classes.headerLabel2}>Suggested for you</label>
                            </div>
                            <hr/>
                            <ul className={classes.ul2}>
                                <li className={classes.liItem2} ><a href="" className={classes.liLink}>Workwise Homepage - FAQ</a>
                                </li>
                                <li className={classes.liItem2}><a href="" className={classes.liLink}>Workwise Public Profile
                                    Visibility</a></li>
                                <li className={classes.liItem2}><a href="" className={classes.liLink}>Editing Your Profile</a></li>
                                <li className={classes.liItem2}><a href="" className={classes.liLink}>Merging or Closing Duplicate
                                    Accounts on LinkedIn</a></li>
                            </ul>
                        </div>

                    </section>
                </div>
            </div>

            <div className="help-forum">
                <div className={classes.flexContainer2}>
                    <img src={formicon} alt="" className={classes.img3}/>
                        <span className={classes.textStyle}>Help Forum</span>
                        <span className={classes.textStyleSmall}>Have questions? LinkedIn knowledge you want</span>
                        <span className={classes.textStyleSmall}>to share? Head over to thes</span>
                        <a href="" className={classes.lastLink}>Workwise Help Forum</a>
                </div>
            </div>
        </main>
);
};

export default Help;