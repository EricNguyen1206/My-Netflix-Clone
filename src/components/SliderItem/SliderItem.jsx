import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorOutline, PlayArrow } from "@mui/icons-material";

import apiConfig from "../../apis/apiConfig";
import apiList, { category } from "../../apis/apiList";
import Button from "../common/Button";
import ButtonSecondary from "../common/ButtonSecondary";
import "./SliderItem.scss";

function SliderItem({ item, className }) {
    const sliderItem = useRef(null);
    const background = apiConfig.originalImg(item.backdrop_path);
    const navigate = useNavigate();

    useEffect(() => {
        sliderItem.current.style.backgroundImage = `url(${background})`;
    });

    const showTrailer = () => {
        const modal = document.querySelector(`#modal__${item.id}`);
        const getDataVideos = async () => {
            try {
                const videos = await apiList.getVideos(category.movie, item.id);
                if (videos.results.length > 0) {
                    const keyVideos = videos.results[0].key;
                    const link = `https://youtube.com/embed/${keyVideos}`;
                    modal
                        .querySelector(".modal__content iframe")
                        .setAttribute("src", link);
                } else {
                    modal.querySelector("modal__content").innerHTML =
                        "No Trailer";
                }
            } catch (error) {
                console.log(error);
            }
        };
        getDataVideos();
        modal.classList.add("active");
    };

    function truncate(string, n = 200) {
        return string.length > n ? string.substring(0, n - 1) + "..." : string;
    }

    return (
        <div className={`slider-item ${className}`} ref={sliderItem}>
            <div className="slider-item__info">
                <h3>{item.title}</h3>
                <p>{truncate(item.overview)}</p>
                <div className="slider-item__info--buttons">
                    <Button onClick={showTrailer}>
                        <PlayArrow /> Play
                    </Button>
                    <ButtonSecondary
                        onClick={() => navigate(`/movie/${item.id}`)}
                    >
                        <ErrorOutline />
                        More info
                    </ButtonSecondary>
                </div>
            </div>
            <div className="slider-item__fade"></div>
            {/* <div className="slider-home__item__poster">
                <img src={apiConfig.w500Img(item.poster_path)} alt="" />
            </div> */}
        </div>
    );
}

export default SliderItem;
