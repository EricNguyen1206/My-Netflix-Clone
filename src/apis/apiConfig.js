const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3",
    api_key: "ea8b1edc2be3ded2079b644fd7448253",
    originalImg: (path_Img) =>
        `https://image.tmdb.org/t/p/original/${path_Img}`,
    w500Img: (path_Img) => `https://image.tmdb.org/t/p/w500/${path_Img}`,
};

export default apiConfig;
