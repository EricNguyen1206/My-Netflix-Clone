import React, { useRef, useState } from "react";
import "./Signup.css";
import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "../../firebase";

function Signup({ haveAccount, setHaveAccount }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((authUser) => {
                console.log(authUser);
                alert("Signup successful!");
            })
            .catch((err) => console.log(err.message));
    };
    const singing = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((authUser) => console.log(authUser))
            .catch((err) => console.log(err.message));
    };
    const handleChangePassword = (e) => {
        const passwordValue = e.target.value;
        if (!passwordValue.startsWith(" ")) {
            setPassword(passwordValue);
        }
    };
    const handleChangeEmail = (e) => {
        const emailValue = e.target.value;
        if (!emailValue.startsWith(" ")) {
            setEmail(emailValue);
        }
    };
    console.log("haveAccount child:", haveAccount);
    return (
        <div className="signup">
            <form action="">
                <h1>{haveAccount ? "Sign In" : "Sign Up"}</h1>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChangeEmail}
                    suggested="current-email"
                    placeholder="Email Adress"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChangePassword}
                    suggested="current-password"
                    placeholder="Password"
                />
                {haveAccount ? (
                    <>
                        <button type="submit" onClick={singing}>
                            Sign In
                        </button>
                        <h4>
                            <span className="signup__gray">
                                New to Netflix?
                            </span>
                            <span
                                className="singup__link"
                                onClick={() => setHaveAccount(false)}
                            >
                                Sign Up now.
                            </span>
                        </h4>
                    </>
                ) : (
                    <button type="submit" onClick={register}>
                        Sign Up
                    </button>
                )}
            </form>
        </div>
    );
}

export default Signup;
