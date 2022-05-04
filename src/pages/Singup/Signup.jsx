import React, { useRef } from "react";
import "./Signup.css";
import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "../../firebase";

function Signup() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => console.log(authUser))
            .catch((err) => console.log(err.message));
    };
    const singing = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => console.log(authUser))
            .catch((err) => console.log(err.message));
    };
    return (
        <div className="signup">
            <form action="">
                <h1>Sign In</h1>
                <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    placeholder="Email Adress"
                />
                <input
                    ref={passwordRef}
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <button type="submit" onClick={singing}>
                    Sign In
                </button>

                <h4>
                    <span className="signup__gray">New to Netflix?</span>
                    <span className="singup__link" onClick={register}>
                        Sign Up now.
                    </span>
                </h4>
            </form>
        </div>
    );
}

export default Signup;
