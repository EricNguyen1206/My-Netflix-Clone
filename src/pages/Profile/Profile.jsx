import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Navbar from "../../components/Navbar/Navbar";
import { auth, signOut } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/userSlices";
import "./Profile.css";
import { useUser } from "../../hooks";

function Profile() {
    const { user } = useUser();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="profile">
            <Navbar />
            <div className="profile__body">
                <h1>Edit Profile</h1>
                <div className="profile__content">
                    <img
                        src="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI"
                        alt="avatar"
                    />
                    <div className="profile__detail">
                        <span className="profile__detail--email">
                            {user.user ? user.user.email : null}
                        </span>
                        <h2>{`Plan: {Current Plan: premium}`}</h2>
                        <span className="profile__detail--renewalDate">
                            Renewal date: 04/05/2022
                        </span>
                        <ul className="profile__detail--list">
                            <li className="profile__detail--plantItem">
                                <div className="profile__detail--text">
                                    <p>Netflix Standard</p>
                                    <p>1080p</p>
                                </div>
                                <button className="profile__detail--plansBtn">
                                    Subcribe
                                </button>
                            </li>
                            <li className="profile__detail--plantItem">
                                <div className="profile__detail--text">
                                    <p>Netflix Basic</p>
                                    <p>480p</p>
                                </div>
                                <button className="profile__detail--plansBtn">
                                    Subcribe
                                </button>
                            </li>
                            <li className="profile__detail--plantItem">
                                <div className="profile__detail--text">
                                    <p>Netflix premium</p>
                                    <p>4K+HDR</p>
                                </div>
                                <button className="profile__detail--plansBtn active">
                                    Current Package
                                </button>
                            </li>
                        </ul>
                        <button
                            className="profile__detail--signout"
                            onClick={() => {
                                signOut(auth)
                                    .then(() => {
                                        console.log("Sign out ok");
                                    })
                                    .catch((e) => console.log("Error:", e));
                                dispatch(logout());
                            }}
                        >
                            Sign out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
