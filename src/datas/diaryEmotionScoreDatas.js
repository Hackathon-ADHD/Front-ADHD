export const diaryEmotionScoreDatas = [
  { id: 0, emotionScoreId: 1, score: "12" },
  { id: 1, emotionScoreId: 2, score: "11" },
  { id: 2, emotionScoreId: 3, score: "10" },
  { id: 3, emotionScoreId: 4, score: "9" },
  { id: 4, emotionScoreId: 5, score: "8" },
  { id: 5, emotionScoreId: 6, score: "7" },
  { id: 6, emotionScoreId: 7, score: "6" },
  { id: 7, emotionScoreId: 8, score: "5" },
  { id: 8, emotionScoreId: 9, score: "4" },
  { id: 9, emotionScoreId: 10, score: "3" },
  { id: 10, emotionScoreId: 11, score: "2" },
  { id: 11, emotionScoreId: 12, score: "1" },
];

export async function getAllEmotionScores() {
  return new Promise((resolve, reject) => {
    try {
      resolve(diaryEmotionScoreDatas);
    } catch (error) {
      reject(error);
    }
  });
}
