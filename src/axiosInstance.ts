import axios from 'axios';
import supabase from './supabaseClient';

const API_URL = 'https://task-wise-finances-back.vercel.app/';

//need to verify acesss token timeout and how to refresh token

console.log(process.env.NODE_ENV);

const axiosInstance = axios.create({
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