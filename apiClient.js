// src/api/apiClient.js
import axios from "axios";

// Create Axios instance
const baseURL = "https://69.62.83.91/api"; // Local development API URL

const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
// Add a request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Optional: redirect to login or clear token
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default apiClient;
