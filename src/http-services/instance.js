import axios from 'axios';
export const instance = axios.create({
    baseURL: "https://restcountries.eu/rest/v2"
});

export const postInstance = axios.create({
    baseURL: "https://effy-simple-api.herokuapp.com/"
});