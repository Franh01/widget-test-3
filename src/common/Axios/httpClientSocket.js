import axios from "axios";

const url = "";
// const url = import.meta.env.VITE_SOCKET_URL;

const httpClient = axios.create({
  baseURL: url,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;
