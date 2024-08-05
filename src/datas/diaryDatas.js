export const diaryDatas = [
  {
    id: 1,
    date: "2024-07-31",
    content: "차분한 하루였다.",
    emotion: "CALM",
  },
  {
    id: 2,
    date: "2024-08-01",
    content: "오늘도 좋은 하루였다.",
    emotion: "HAPPY",
  },

  {
    id: 3,
    date: "2024-08-02",
    content: "혼란스러운 하루였다.",
    emotion: "CALM",
  },

  {
    id: 4,
    date: "2024-08-03",
    content: "차분한 하루였다.",
    emotion: "CALM",
  },

  {
    id: 5,
    date: "2024-08-04",
    content: "조금 긴장되는 하루였다.",
    emotion: "SURPRISED",
  },
  {
    id: 6,
    date: "2024-08-05",
    content: "만족스러운 하루였다.",
    emotion: "HAPPY",
  },
  {
    id: 7,
    date: "2024-08-06",
    content: "화가 나는 하루였다.",
    emotion: "ANGRY",
  },
  {
    id: 8,
    date: "2023-08-05",
    content: "만족스러운 하루였다.",
    emotion: "HAPPY",
  },
  {
    id: 9,
    date: "2023-08-06",
    content: "화가 나는 하루였다.",
    emotion: "ANGRY",
  },
];

export async function getAllDiaries() {
  return new Promise((resolve, reject) => {
    try {
      resolve(diaryDatas.reverse());
    } catch (error) {
      reject(error);
    }
  });
}

export async function getDiariesByDate(date) {
  return new Promise((resolve, reject) => {
    try {
      const diariesForDate = diaryDatas.filter((diary) => diary.date === date);
      resolve(diariesForDate);
    } catch (error) {
      reject(error);
    }
  });
}
