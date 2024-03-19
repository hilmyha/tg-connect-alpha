import axios from "axios";

const ApiManager = axios.create({
  baseURL: "https://d2f2-36-72-214-108.ngrok-free.app/api/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default ApiManager;
