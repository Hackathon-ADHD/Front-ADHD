import React from "react";
import * as S from "./DiaryContentStyle";
import { GoKebabHorizontal } from "react-icons/go";
import { getAnalysisByDiaryId } from "../../apis/diary";
import { getEmotionByType } from "../../utils/emotionSelector";

/**
 *
 * entry 안에는
 * id
 * date
 * content
 * emotion
 */
const DiaryContent = (props) => {
  const handleAnalysisButtonClick = () => {
    getAnalysisByDiaryId(props.entry.id).then((response) => {
      props.setSelectedDate(props.entry.date);
      props.setAnalysis(response);
      props.setIsAnalysisViewOpen(true);
    });
  };

  return (
    <S.DiaryContentContainer>
      <S.DiaryHeader>
        <S.CharacterImageWrapper>
          <S.CharacterImage
            src={getEmotionByType(props.entry.emotion)}
            alt="Character"
          />
        </S.CharacterImageWrapper>
        <S.DateText>{props.entry.date}</S.DateText>
        <S.MenuIconWrapper>
          <GoKebabHorizontal cursor={"pointer"} />
        </S.MenuIconWrapper>
      </S.DiaryHeader>
      <S.ContentText>{props.entry.content}</S.ContentText>

      <S.AnalysisShowButton onClick={handleAnalysisButtonClick}>
        일기 분석 보기
      </S.AnalysisShowButton>
    </S.DiaryContentContainer>
  );
};

export default DiaryContent;
