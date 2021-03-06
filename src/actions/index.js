import axios from 'axios';

const API_KEY = '493738b86f9b262c9f0cb8a9f3910b9f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},nz`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}