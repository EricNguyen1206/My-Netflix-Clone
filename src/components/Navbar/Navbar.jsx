import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Nav() {
    const [show, setShow] = useState(false);
    const transitionNavBar = () => {
        setShow(window.scrollY > 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);

        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);
    return (
        <div className={`nav ${show ? "nav__black" : ""}`}>
            <div className="nav__contents">
                <Link to="/">
                    <img
                        className="nav__logo"
                        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                        alt=""
                    />
                </Link>
                <Link to="/user">
                    <img
                        className="nav__avatar"
                        src="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI"
                        alt=""
                    />
                </Link>
            </div>
        </div>
    );
}

export default Nav;
