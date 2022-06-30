import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

console.log(baseURL);

export const request = axios.create({ baseURL });
