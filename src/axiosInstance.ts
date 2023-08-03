import axios from 'axios';
import supabase from './supabaseClient';

const API_URL = 'http://localhost:3000/';

const { data } = await supabase.auth.getSession();
const accessToken = data.session?.access_token;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
});

export default axiosInstance