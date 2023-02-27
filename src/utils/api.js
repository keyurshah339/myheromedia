import axios from "axios";

export const setInitialAPI = () => {
  axios.defaults.baseURL = "https://myheromedia-backend-vercel.tristan9.repl.co";
  axios.defaults.headers.common["Authorization"] = JSON.parse(
    localStorage.getItem("authToken")
  );
};
