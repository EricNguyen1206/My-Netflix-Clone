import React from "react";
import "./Banner.css";

function Banner() {
    function truncate(string, n) {
        return string.length > n ? string.substring(0, n - 1) + "..." : string;
    }
    return (
        <div
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFyT6eastiS6Can_G2Uonr2QdcgeBNta5qtkTYmHeYWiDSIUq8axMSdM2zFusP4Fdk9Js&usqp=CAU")`,
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">Movie Name</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <span className="banner__description">
                    {truncate(
                        "This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description.This is a test description.",
                        150
                    )}
                </span>

                <div className="banner--fadeBottom"></div>
            </div>
        </div>
    );
}

export default Banner;
