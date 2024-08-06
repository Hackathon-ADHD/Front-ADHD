import axios from "axios";
const BASE_URL = "https://soogo.ba-ro.co.kr/api";
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

export const kakaoLogin = async (authorizationCode) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/login/kakao?code=${authorizationCode}`,
      {}
    );

    const { accessToken, refreshToken, email, newMember } =
      response.data.body.data;
    return { accessToken, refreshToken, email, newMember };
  } catch (error) {
    return [];
  }
};

export const naverLogin = async (authorizationCode) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/login/naver?code=${authorizationCode}`,
      {}
    );

    const { accessToken, refreshToken, email, newMember } =
      response.data.body.data;
    return { accessToken, refreshToken, email, newMember };
  } catch (error) {
    return [];
  }
};
