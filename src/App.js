import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import { login, logout, selectUser } from "./features/counterSlice";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                dispatch(
                    login({
                        uid: userAuth.uid,
                        email: userAuth.email,
                    })
                );
            } else {
                dispatch(logout);
            }
        });
        return unsubcribe;
    }, [dispatch]);
    console.log("user", user);
    return (
        <div className="app">
            <Router>
                {!user ? (
                    <Login />
                ) : (
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/user" element={<Profile />} />
                    </Routes>
                )}
            </Router>
        </div>
    );
}

export default App;
