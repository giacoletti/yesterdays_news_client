import axios from "axios";

export const api = axios.create({ baseURL: "https://yesterdays-news-api.herokuapp.com/api" });
