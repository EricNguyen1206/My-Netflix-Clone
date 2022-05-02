import axios from "axios";

const instance = axios.create({
    baseUrl: "https://api.themovedb.org/3",
});

export default instance;
