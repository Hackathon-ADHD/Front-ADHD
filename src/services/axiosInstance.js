import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://soogo.ba-ro.co.kr", // 서버 URL 설정
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 이 옵션을 추가하여 쿠키 기반 인증이 필요한 경우 설정
});
// 요청 인터셉터를 사용하여 토큰을 포함시킴
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("kakaoAccessToken"); // 또는 Recoil 상태에서 토큰을 가져옵니다.
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;
