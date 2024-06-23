import React from 'react';
import classes from './Home.module.css'
import {Link} from "react-router-dom";
import cm from '../companies/images/cm-logo.png'
import mainImg from '../companies/images/cm-main-img.png'


const Home = () => {

    return (
        <div className={classes.container}>
            <div className={classes.conteiner_inner}>
                <div className={classes.signUp}>
                    <div className={classes.logo}>
                        <div className={classes.logoTop}>
                            <img src={cm} alt=""/>
                            <div>Workwise, is a global freelancing platform and social networking where businesses and
                                independent professionals connect and collaborate remotely
                            </div>
                        </div>
                        <div className={classes.mainImg}>
                            <img src={mainImg} alt=""/>
                        </div>
                    </div>
                    <div className={classes.signUpMain}>
                        <div className={classes.buttonsSignIn}>

                            <Link to={'/login'}>
                                <button className={classes.sign}>SignIn</button>
                            </Link>


                            <button className={classes.autorized}>SignUp</button>

                        </div>
                        <div className={classes.registration}>
                            <div className={classes.formRegister}>
                                <div>
                                    <input type="text" placeholder={'full name'}/>
                                </div>
                                <div>
                                    <input type="text" placeholder={'Country'}/>
                                </div>
                                <div>
                                    <input type="text" placeholder={'password'}/>
                                </div>
                                <div>
                                    <select id="productName">
                                        <option value="Category 1">Category 1</option>
                                        <option value="Category 2">Category 2</option>
                                        <option value="Category 3">Category 3</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="text" placeholder={'full name'}/>
                                </div>
                                <div>
                                    <input type="text" placeholder={'full name'}/>
                                </div>



                            </div>
                            <div className={classes.radioButton}>
                                <div className={classes.radio}>
                                    <input type="checkbox"/>
                                    <label htmlFor="">Yes, I understand and agree to the workwise Terms &
                                        Conditions.</label>
                                </div>
                                <div className={classes.buttonGet}>
                                    <button>Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;