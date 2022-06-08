import axios from "axios";

export const setInitialAPI = () => {
  axios.defaults.baseURL = "https://agile-headland-48240.herokuapp.com/";
  axios.defaults.headers.common["Authorization"] = JSON.parse(
    localStorage.getItem("authToken")
  );
};
