import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://52.78.121.130:8080", // 서버 URL 설정
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
