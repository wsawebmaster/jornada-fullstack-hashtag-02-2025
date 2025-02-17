// Fetch ou Axios
import axios from "axios";

// const { NODE_ENV } = process.env;
const URL = "http://localhost:3001/api";
// const URL = "https://jornada-fullstack-hashtag-02-2025.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseArtists.data);