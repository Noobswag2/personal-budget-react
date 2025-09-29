import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export default api;
