import axios from "axios";
const BASE_URL = "http://52.78.121.130:8080/api";
const token = localStorage.getItem("kakaoAccessToken");

export const getAllDiaries = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/diary/dates`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.body.data;
  } catch (error) {
    return [];
  }
};

export const getEmotionScores = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/diary/weekends`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.body.data;
  } catch (error) {
    return [];
  }
};

export async function getAnalysisByDiaryId(id) {
  try {
    const response = await axios.get(`${BASE_URL}/diary/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.body.data;
  } catch (error) {
    return [];
  }
}
