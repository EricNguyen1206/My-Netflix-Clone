import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <h2 className="title" style={{ color: "#ccc", fontSize: "1.2rem" }}>
                Question? Contact us.
            </h2>
            <div className="detail">
                <ul>
                    <li>
                        <Link to="/">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/">Investor Relations</Link>
                    </li>
                    <li>
                        <Link to="/">Ways to Watch</Link>
                    </li>
                    <li>
                        <Link to="/">Corporate Information</Link>
                    </li>
                    <li>
                        <Link to="/">Netflix Originals</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/">Help Centre</Link>
                    </li>
                    <li>
                        <Link to="/">Jobs</Link>
                    </li>
                    <li>
                        <Link to="/">Terms of Use</Link>
                    </li>
                    <li>
                        <Link to="/">Contact Us</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/">Account</Link>
                    </li>
                    <li>
                        <Link to="/">Redeem gift cards</Link>
                    </li>
                    <li>
                        <Link to="/">Privacy</Link>
                    </li>
                    <li>
                        <Link to="/">Speed Test</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/">Media Centre</Link>
                    </li>
                    <li>
                        <Link to="/">Buy gift cards</Link>
                    </li>
                    <li>
                        <Link to="/">Cookie Preferences</Link>
                    </li>
                    <li>
                        <Link to="/">Legal Notices</Link>
                    </li>
                </ul>
            </div>
            <div className="copyright">
                <a
                    href="https://github.com/EricNguyen1206/My-Netflix-Clone"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>©Eric Nguyen 2022 | All rights reserved</span>
                </a>
            </div>
        </div>
    );
};

export default Footer;
