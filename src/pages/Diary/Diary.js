import React from "react";
import * as S from "../Home/HomeStyle";
import box from "../../assets/images/box.png";
import scribble from "../../assets/images/scribble.png";
import styled from "styled-components";

const Diary = () => {
    return (
        <S.MainWrapper>
            <DatePickerWrapper>
                <label htmlFor="diary-date">날짜를 선택하세요</label>
                <DatePicker id="diary-date" type="date" placeholder="날짜를 선택하세요" />
            </DatePickerWrapper>
            <ImageContainer>
                <BoxImage src={box} alt="Box" />
                <TextContainer>
                    <ScribbleImage src={scribble} alt="Scribble" />
                    <SmallText>오늘의 감정 pick!</SmallText>
                </TextContainer>
            </ImageContainer>
            <DiaryInput placeholder="오늘의 하루는 어땠는지 기록해주세요 :)" />
            <AnalyzeButton>분석하기</AnalyzeButton>
        </S.MainWrapper>
    );
};

const DatePickerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

const DatePicker = styled.input`
    padding: 10px;
    font-size: 16px;
    background-color: #d9d9d9; /* 회색 배경 */
    color: #4f4f4f; /* 진한 회색 글씨 */
    border: none;
    border-radius: 10px;
    margin-top: 5px;
    width: 200px;
    text-align: center;

    &::placeholder {
        color: #4f4f4f; /* 진한 회색 글씨 */
    }

    &:focus {
        outline: none;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 20px;
`;

const BoxImage = styled.img`
    width: 50%; /* 이미지 크기를 절반으로 줄임 */
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    position: relative;
`;

const ScribbleImage = styled.img`
    position: relative;
`;

const SmallText = styled.span`
    font-size: 12px;
    position: absolute;
    top: -10px; /* 대각선 상단으로 이동 */
    right: -40px;
`;

const DiaryInput = styled.textarea`
    width: 90%;
    height: 300px; /* 세로 길이 증가 */
    padding: 10px;
    font-size: 16px;
    margin-bottom: 20px;
    box-sizing: border-box;
    border: none;
    border-radius: 10px; /* 모서리 둥글게 */
    resize: none;

    &:focus {
        outline: none;
    }
`;

const AnalyzeButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #d9d9d9; /* 회색 */
    color: black; /* 글씨를 검은색으로 변경 */
    border: none;
    border-radius: 10px; /* 모서리 둥글게 */
    cursor: pointer;

    &:hover {
        background-color: #b0afaf;
    }
`;

export default Diary;
