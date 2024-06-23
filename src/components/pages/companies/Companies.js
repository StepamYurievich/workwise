import React from 'react';
import classes from './compnies.module.css'
import MailIcon from '@mui/icons-material/Mail';
import CircularProgress from '@mui/material/CircularProgress';

import facebook from './images/facebook.png'
import google from './images/google.png'
import pinterest from './images/Pinterest.png'
import microsoft from './images/PinteresMicrosoft.png'

import {Link} from "react-router-dom";

const Companies = () => {
    const companies = [
        {company: facebook, title: 'Facebook', date: 'Feb,2003'},
        {company: google, title: 'Google', date: 'Feb,2003'},
        {company: pinterest, title: 'Pinterest', date: 'Feb,2003'},
        {company: microsoft, title: 'Microsoft', date: 'Feb,2003'},
        {company: microsoft, title: 'Microsoft', date: 'Feb,2003'},
        {company: microsoft, title: 'Microsoft', date: 'Feb,2003'},
        {company: microsoft, title: 'Microsoft', date: 'Feb,2003'},
        {company: microsoft, title: 'Microsoft', date: 'Feb,2003'},
        {company: microsoft, title: 'Microsoft', date: 'Feb,2003'},
        {company: microsoft, title: 'Microsoft', date: 'Feb,2003'},
    ]

    return (
        <div className={classes.container}>
            <div className={classes.containerTitle}>
                All Companies
            </div>
            <div className={classes.companies}>
                {
                    companies.map(t => (
                        <div className={classes.company}>
                            <div className={classes.company_inner}>
                                <div className={classes.companyLogo}>
                                    <img src={t.company} alt=""/>
                                </div>
                                <div className={classes.companyName}>
                                    {t.title}
                                </div>
                                <div className={classes.companyDate}>
                                    Establish {t.date}
                                </div>
                                <div className={classes.companyDeta}>
                                    <div><button className={classes.follw}>Follow</button></div>
                                    <div><button className={classes.email}><MailIcon  /></button></div>
                                </div>
                            </div>

                            <Link>
                                <div className={classes.companyLink}>View Profile</div>
                            </Link>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Companies;