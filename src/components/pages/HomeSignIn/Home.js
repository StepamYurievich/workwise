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

                                <button className={classes.sign}>SignIn</button>

                                <Link to={'/register'}><button  className={classes.autorized}>SignUp</button></Link>

                        </div>
                        <div className={classes.mainForm}>
                            <div className={classes.title}>
                                Sign in
                            </div>
                            <form>
                                <label className={classes.passwordSitn}>
                                    <input placeholder={'Username'} name="query"/>
                                    <input placeholder={'Password'} name="query"/>
                                </label>
                                <div className={classes.redioSitn_inner}>
                                    <label className={classes.redioSitn}>
                                        <label htmlFor={'male'}><input type="checkbox" name="radio" value={'male'} id={'male'}/>Remember me</label>
                                        <Link>Forgot Password?</Link>
                                    </label>
                                    <button>Sign In</button>
                                </div>

                            </form>
                            <div className={classes.aternative}>
                                <p>LOGIN VIA SOCIAL ACCOUNT</p>
                                <div className={classes.buttons}>
                                    <button className={classes.first}>Login With Facebook</button>
                                    <button className={classes.secind}>Login With Twitter</button>
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