import axios from 'axios';
import supabase from './supabaseClient';

const API_URL = 'https://task-wise-finances-back.vercel.app/';
const DEV_API_URL = 'http://localhost:3000/';

const axiosInstance = axios.create({
   //baseURL: (process.env.NODE_ENV === 'development') ? DEV_API_URL:
  // API_URL,
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => {

    const { data } = await supabase.auth.getSession();
    const accessToken = data.session?.access_token;

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default axiosInstance