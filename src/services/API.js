import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
});

export const API = {
    getCharacters: (randomCharacters) => axiosInstance.get(`/character/${randomCharacters}`)
}