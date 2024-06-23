import React from 'react';
import classes from './Footer.module.css'
import logoFooter from '../pages/companies/images/logo2.png'
import logoFoote2 from '../pages/companies/images/Help Center.png'

const Footer = () => {
    const items = [
        {title: 'Help Center'},
        {title: 'Help Center'},
        {title: 'Help Center'},
        {title: 'Help Center'},
        {title: 'Help Center'},
        {title: 'Help Center'},
        {title: 'Help Center'},
        {title: 'Help Center'},
        {title: 'Help Center'},
    ]
    return (
        <div className={classes.container}>
            <div className={classes.footer_price}>
                <div className={classes.footerMenu}>
                    {
                        items.map(t => (
                            <div className={classes.footerMain}>
                                <div>{t.title}</div>
                            </div>
                        ))
                    }
                </div>
                <div className={classes.footelogo}>
                    <div className={classes.footerKogo}>
                        <img src={logoFooter} alt=""/>
                    </div>
                    <div className={classes.footerKogo}>
                        <img src={logoFoote2} alt=""/>Copyright 2019
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;