import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "./axios";

function List({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    const baseUrl = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(fetchUrl);
                setMovies(res.data.results);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [fetchUrl]);
    return (
        <div className="list">
            <h2>{title}</h2>
            <div className="list__posters">
                {movies.map(
                    (movie) =>
                        ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                className={`list__poster ${
                                    isLargeRow && "list__posterLarge"
                                }`}
                                key={movie.id}
                                src={`${baseUrl}${
                                    isLargeRow
                                        ? movie.poster_path
                                        : movie.backdrop_path
                                }`}
                                alt=""
                            />
                        )
                )}
            </div>
        </div>
    );
}

export default List;
