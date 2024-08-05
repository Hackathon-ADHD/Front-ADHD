export async function getDiariesByDate(wholeData, date) {
  console.log(wholeData);
  return new Promise((resolve, reject) => {
    try {
      const diariesForDate = wholeData.filter((diary) => diary.date === date);
      resolve(diariesForDate);
    } catch (error) {
      reject(error);
    }
  });
}
