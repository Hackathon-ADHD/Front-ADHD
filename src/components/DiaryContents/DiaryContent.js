import React from "react";
import * as S from "./DiaryContentStyle";
import { GoKebabHorizontal } from "react-icons/go";

const DiaryContent = ({ entry }) => {
  return (
    <S.DiaryContentContainer>
      <S.DiaryHeader>
        <S.CharacterImageWrapper>
          <S.CharacterImage src={entry.characterImage} alt="Character" />
        </S.CharacterImageWrapper>
        <S.DateText>{new Date(entry.date).toLocaleDateString()}</S.DateText>
        <S.MenuIconWrapper>
          <GoKebabHorizontal cursor={"pointer"} />
        </S.MenuIconWrapper>
      </S.DiaryHeader>
      <S.ContentText>{entry.content}</S.ContentText>
    </S.DiaryContentContainer>
  );
};

export default DiaryContent;
