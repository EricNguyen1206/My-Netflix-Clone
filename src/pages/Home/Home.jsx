import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import request from "../../Request";
import List from "../../components/List/List";
import Footer from "../../components/Footer/Footer";

function HomeScreen() {
    return (
        <div className="home">
            <Navbar />
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
            <Footer />
        </div>
    );
}

export default HomeScreen;
