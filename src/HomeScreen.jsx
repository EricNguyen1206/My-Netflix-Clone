import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";

function HomeScreen() {
    return (
        <div className="home">
            <Nav />
            <Banner />
            {/* Some List */}
        </div>
    );
}

export default HomeScreen;
