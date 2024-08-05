import React from "react";
import * as S from "./DiaryContentStyle";
import { GoKebabHorizontal } from "react-icons/go";
import { getAnalysisByDiaryId } from "../../datas/diaryAnalysisDatas";

/**
 *
 * entry 안에는
 * id
 * date
 * content
 * emotion
 */
const DiaryContent = ({ entry }) => {
  const handleAnalysisButtonClick = () => {
    getAnalysisByDiaryId(entry.id).then((response) => console.log(response));
  };

  return (
    <S.DiaryContentContainer>
      <S.DiaryHeader>
        <S.CharacterImageWrapper>
          <S.CharacterImage src={entry.characterImage} alt="Character" />
        </S.CharacterImageWrapper>
        <S.DateText>{entry.date}</S.DateText>
        <S.MenuIconWrapper>
          <GoKebabHorizontal cursor={"pointer"} />
        </S.MenuIconWrapper>
      </S.DiaryHeader>
      <S.ContentText>{entry.content}</S.ContentText>

      <button onClick={handleAnalysisButtonClick}>분석^^</button>
    </S.DiaryContentContainer>
  );
};

export default DiaryContent;
