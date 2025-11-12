import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "1d8894dcc104741e9e5ccc145597c546",
    language: "pt-BR",
    page: 1,
  },
});

export default api;
