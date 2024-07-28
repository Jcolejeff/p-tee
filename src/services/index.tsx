import axios from 'axios';

// const baseURL = import.meta.env.VITE_USE_PROXY === 'true' ? '/api' : import.meta.env.VITE_API_URL;
const baseURL = 'https://thepoolapp.site/api/v1';

// api with auth
const store = JSON.parse(localStorage.getItem('store') || '{}');
const token = store?.state?.authDetails?.token || '';
const axiosInstance = axios.create({
  baseURL,
  withCredentials: false,

  headers: {
    Authorization: `Bearer ${token}`,
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return { ...config, withCredentials: false };
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

// api no auth
export const ApiNoAuth = axios.create({
  baseURL,
  withCredentials: false,
});

ApiNoAuth.interceptors.request.use(
  (config) => {
    return { ...config, withCredentials: false };
  },
  (error) => {
    return Promise.reject(error);
  },
);

ApiNoAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
