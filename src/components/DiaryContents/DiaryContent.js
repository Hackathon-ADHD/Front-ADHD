import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./DiaryContentStyle";
import { GoKebabHorizontal } from "react-icons/go";

const DiaryContent = ({ diaryId }) => {
  const [diaryEntry, setDiaryEntry] = useState({
    id: 0,
    content: "오늘은 기쁜 하루다.",
    characterImage: require("../../assets/images/LogoImage.png"),
  });

  // useEffect(() => {
  //   const fetchDiaryEntry = async () => {
  //     try {
  //       const response = await axios.get(
  //         `YOUR_BACKEND_API_URL/api/diary/${diaryId}`
  //       );
  //       const data = response.data.body.data;
  //       setDiaryEntry(data);
  //     } catch (error) {
  //       console.error("일기 데이터를 가져오는 중 에러 발생:", error);
  //     }
  //   };

  //   fetchDiaryEntry();
  // }, [diaryId]);

  // if (!diaryEntry) {
  //   return <div>Loading...</div>;
  // }

  return (
    <S.DiaryContentContainer>
      <S.DiaryHeader>
        <S.CharacterImageWrapper>
          <S.CharacterImage src={diaryEntry.characterImage} alt="Character" />
        </S.CharacterImageWrapper>
        <S.DateText>
          {new Date(diaryEntry.localDateTime).toLocaleDateString()}
        </S.DateText>
        <S.MenuIconWrapper>
          <GoKebabHorizontal cursor={"pointer"} />
        </S.MenuIconWrapper>
      </S.DiaryHeader>
      <S.ContentText>{diaryEntry.content}</S.ContentText>
    </S.DiaryContentContainer>
  );
};

export default DiaryContent;
