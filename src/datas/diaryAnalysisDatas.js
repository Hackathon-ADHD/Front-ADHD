export const dirayAnalysisDatas = [
  {
    diaryId: 1,
    id: 0,
    analyzedContents:
      "오늘 하루가 정말 힘드셨군요..! 위로의 따뜻한 한 마디 해드릴게요",
    recommendSongs: "QWER-DISCORD",
  },
  {
    diaryId: 2,
    id: 1,
    analyzedContents:
      "오늘 하루가 정말 힘드셨군요..! 위로의 따뜻한 한 마디 해드릴게요",
    recommendSongs: "악뮤-어떻게 이별까지 사랑하겠어, 널 사랑하는 거지",
  },
  {
    diaryId: 3,
    id: 2,
    analyzedContents:
      "오늘 하루가 정말 힘드셨군요..! 위로의 따뜻한 한 마디 해드릴게요",
    recommendSongs: "QWER-DISCORD",
  },
  {
    diaryId: 4,
    id: 3,
    analyzedContents: "오늘 하루도 수고 많으셨어요! 당신의 노력을 응원합니다",
    recommendSongs: "QWER-DISCORD",
  },
  {
    diaryId: 5,
    id: 4,
    analyzedContents: "어제와 오늘의 감정이 많이 다르네요. 무슨 일이 있었나요?",
    recommendSongs: "QWER-DISCORD",
  },
  {
    diaryId: 6,
    id: 5,
    analyzedContents:
      "오늘은 기분 좋은 일이 많으셨나 봐요! 계속 이런 날들이 이어지길 바랄게요",
    recommendSongs: "BTS-Dynamite",
  },
  {
    diaryId: 7,
    id: 6,
    analyzedContents: "어제와 오늘의 감정이 많이 다르네요. 무슨 일이 있었나요?",
    recommendSongs: "BTS-Dynamite",
  },
  {
    diaryId: 8,
    id: 7,
    analyzedContents: "어제와 오늘의 감정이 많이 다르네요. 무슨 일이 있었나요?",
    recommendSongs: "악뮤-어떻게 이별까지 사랑하겠어, 널 사랑하는 거지",
  },
  {
    diaryId: 9,
    id: 8,
    analyzedContents: "어제와 오늘의 감정이 많이 다르네요. 무슨 일이 있었나요?",
    recommendSongs: "아이유-Blueming",
  },
  {
    diaryId: 10,
    id: 9,
    analyzedContents:
      "오늘은 기분 좋은 일이 많으셨나 봐요! 계속 이런 날들이 이어지길 바랄게요",
    recommendSongs: "폴킴-모든 날, 모든 순간",
  },
];

export async function getAnalysisByDiaryId(id) {
  return new Promise((resolve, reject) => {
    try {
      const diariesForDate = dirayAnalysisDatas.filter(
        (analysis) => analysis.diaryId === id
      );
      resolve(diariesForDate);
    } catch (error) {
      reject(error);
    }
  });
}
