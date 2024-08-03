import axios from 'axios';
import APIBase from './APIBase';

const axiosInstance = axios.create({
  baseURL: APIBase, // 기본 URL 설정
  headers: {
    'Access-Control-Allow-Origin': '*', // CORS 헤더 설정
    // 필요에 따라 다른 헤더 설정
  },
  // 필요에 따라 다른 설정 추가
});

export default axiosInstance;
