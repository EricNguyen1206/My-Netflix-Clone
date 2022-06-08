import React, { useState } from "react";
import "./Login.css";
import Singup from "../../pages/Singup/Signup";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Login() {
    const [signin, setSignin] = useState(false);
    const [haveAccount, setHaveAccount] = useState(true);
    return (
        <div className="login">
            <div className="login__background">
                <Link to="/">
                    <img
                        className="login__logo"
                        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                        alt="logo"
                    />
                </Link>
                <button
                    onClick={() => {
                        console.log("haveAccount", haveAccount);
                        setHaveAccount(true);
                        setSignin(true);
                    }}
                    className="login__button"
                >
                    Sign In
                </button>
                <div className="login__gradient" />
                <div className="login__body">
                    {signin ? (
                        <Singup
                            haveAccount={haveAccount}
                            setHaveAccount={setHaveAccount}
                        />
                    ) : (
                        <>
                            <h1>Ulimited films, TV program and more.</h1>
                            <h2>Watch anywhere. Cancel any time.</h2>
                            <h3>
                                Ready to watch? Enter your email to create or
                                restart your membership.
                            </h3>

                            <div className="login__input">
                                <form action="">
                                    <input
                                        type="email"
                                        name=""
                                        id="email"
                                        suggested="current-email"
                                        placeholder="Email Adress"
                                    />
                                    <button
                                        onClick={() => {
                                            setSignin(true);
                                            setHaveAccount(false);
                                        }}
                                        className="login__getStarted"
                                    >
                                        GET STARTED
                                    </button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
