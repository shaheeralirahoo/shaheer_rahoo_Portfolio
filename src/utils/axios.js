// src/utils/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api-carseller.vercel.app/api", // or your deployed API URL
});

export default api;
