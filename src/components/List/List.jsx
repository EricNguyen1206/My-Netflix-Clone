import { useEffect, useState, useRef, useCallback } from "react";
import "./List.css";
import axios from "../../axios";

function List({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const [currentMovie, setCurrentMovie] = useState(null);

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

    const displayCurrentMovie = (movie) => {
        setCurrentMovie(movie);
    };

    function truncate(string, n) {
        return string.length > n ? string.substring(0, n - 1) + "..." : string;
    }

    // const scrollToRef = useCallback(
    //     (ref) => ref.scrollTo(0, ref.current.offsetRight),
    //     []
    // );
    const myRef = useRef(null);
    // const executeScroll = () => scrollToRef(myRef);
    // setInterval(executeScroll, 5000);
    console.log("currentMovie", currentMovie);
    return (
        <div className="list">
            <h2>{title}</h2>
            <div className="list__posters" ref={myRef}>
                {movies.map(
                    (movie) =>
                        ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) && (
                            <div
                                className={`list__poster ${
                                    isLargeRow && "list__posterLarge"
                                }`}
                                onClick={() => displayCurrentMovie(movie)}
                            >
                                <img
                                    key={movie.id}
                                    src={`${baseUrl}${
                                        isLargeRow
                                            ? movie.poster_path
                                            : movie.backdrop_path
                                    }`}
                                    alt="poster"
                                />
                                <div className="overlay">
                                    <p>
                                        {isLargeRow
                                            ? truncate(movie.overview, 80)
                                            : truncate(movie.overview, 40)}
                                    </p>
                                </div>
                            </div>
                        )
                )}
            </div>
            {currentMovie ? (
                <div className="movie-detail">
                    <div className="content">
                        <h2 className="content__title">
                            {currentMovie.name || currentMovie.title}
                        </h2>
                        <p className="content__description">
                            {truncate(currentMovie.overview, 200)}
                        </p>
                        <button
                            type="button"
                            onClick={() => setCurrentMovie(null)}
                        >
                            Play
                        </button>
                    </div>
                    <div className="backdrop">
                        <div className="backdrop__overlay"></div>
                        <img
                            src={`${baseUrl}${currentMovie.backdrop_path}`}
                            alt="backdrop"
                        />
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default List;
