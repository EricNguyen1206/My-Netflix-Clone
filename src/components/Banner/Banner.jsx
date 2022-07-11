import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import requests from "../../Request";
import apiList, { movieType } from "../../apis/apiList";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderItem from "../SliderItem/SliderItem";
import TrailerModal from "../TrailerModal";
import "swiper/scss";

function Banner() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getDataSlider = async () => {
            const params = { page: 1 };

            try {
                const data = await apiList.getMovies(movieType.popular, params);
                setMovies(data.results.slice(10, 15));
            } catch (error) {
                console.log("error");
            }
        };
        getDataSlider();
    }, []);
    return (
        <>
            {movies.length && (
                <>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={1}
                        slidesPerGroup={1}
                        speed={1000}
                        loop={true}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                        }}
                        className="mySwiper"
                        style={{
                            width: "100%",
                            position: "relative",
                            marginTop: 0,
                        }}
                    >
                        {movies.map((item, index) => (
                            <SwiperSlide key={index}>
                                {({ isActive }) => (
                                    <SliderItem
                                        item={item}
                                        className={isActive ? "active" : ""}
                                    />
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {movies.map((item, index) => (
                        <TrailerModal item={item} key={index} />
                    ))}
                </>
            )}
        </>
    );
}

export default Banner;
