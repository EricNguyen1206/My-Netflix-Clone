import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import request from "./request";
import List from "./List";

function HomeScreen() {
    return (
        <div className="home">
            <Nav />
            <Banner />
            <List
                title="NETFLIX ORIGINALS"
                fetchUrl={request.fetchNetflixOriginals}
                isLargeRow
            />
            <List title="Trending now" fetchUrl={request.fetchTrending} />
            <List title="Top Rated" fetchUrl={request.fetchTopRated} />
            <List title="Action Movie" fetchUrl={request.fetchActionMovies} />
            <List title="Comedy Movie" fetchUrl={request.fetchComedyMovies} />
            <List title="Horror Movie" fetchUrl={request.fetchHorrorMovies} />
            <List title="Romance Movie" fetchUrl={request.fetchRomanceMovies} />
            <List
                title="Documentaries Movie"
                fetchUrl={request.fetchDocumentariesMovie}
            />
        </div>
    );
}

export default HomeScreen;
