import React, { useState } from "react";
import * as S from "../Home/HomeStyle";
import {
    DatePickerWrapper,
    DatePicker,
    ImageContainer,
    BoxImage,
    TextContainer,
    ScribbleImage,
    SmallText,
    DiaryInput,
    AnalyzeButton,
    ModalBackground,
    ModalContent,
    CharacterGrid,
    CharacterItem,
    CharacterImage,
    CharacterLabel,
    CloseButton,
} from "./DiaryStyle"; // 여기서 Named Import로 변경
import box from "../../assets/images/box.png";
import scribble from "../../assets/images/scribble.png";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { selectedEmotionState } from "../../recoils/atoms/userAtom";
import axiosInstance from "../../services/axiosInstance";

import curious from "../../assets/images/궁금해.png";
import happy from "../../assets/images/기분 좋아.png";
import amazed from "../../assets/images/놀라워.png";
import disappointed from "../../assets/images/마음에 안들어.png";
import love from "../../assets/images/사랑이야.png";
import sad from "../../assets/images/슬퍼.png";
import excited from "../../assets/images/신나.png";
import hurt from "../../assets/images/아파.png";
import dizzy from "../../assets/images/어질어질해.png";
import cool from "../../assets/images/역시 멋져.png";
import angry from "../../assets/images/화나.png";

const Diary = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [diaryText, setDiaryText] = useState("");
    const [selectedEmotion, setSelectedEmotion] = useRecoilState(selectedEmotionState);
    const [selectedDate, setSelectedDate] = useState("");
    const navigate = useNavigate();

    const handleBoxClick = () => {
        setIsModalOpen(true);
    };

    const handleCharacterSelect = (character) => {
        setSelectedEmotion(character);
        setIsModalOpen(false);
    };

    const handleAnalyzeClick = async () => {
        try {
            // 콘솔에 넘어가는 정보 출력
            console.log("Diary Text:", diaryText);
            console.log("Selected Emotion:", selectedEmotion);
            console.log("Selected Date:", selectedDate);

            const analyzeRequest = axiosInstance.post("/api/chatgpt/diary-analyzes", null, {
                params: {
                    diaryContents: diaryText,
                },
            });

            const recommendSongRequest = axiosInstance.post("/api/chatgpt/recommend-songs", null, {
                params: {
                    diaryContents: diaryText,
                },
            });

            const [analyzeResponse, recommendSongResponse] = await Promise.all([analyzeRequest, recommendSongRequest]);

            const reviewData = {
                diaryFeedback: analyzeResponse.data,
                songRecommendation: recommendSongResponse.data,
                dateType: new Date().toLocaleDateString("ko-KR", { weekday: "long" }),
                characterImg: selectedEmotion,
                selectedDate: selectedDate,
                diaryText: diaryText,
            };

            console.log(analyzeResponse.data); // 서버에서 받은 분석 응답 데이터를 처리합니다.
            console.log(recommendSongResponse.data); // 서버에서 받은 추천 곡 응답 데이터를 처리합니다.
            // /review 라우터로 넘어가는 정보 콘솔에 출력
            console.log("Navigating to /review with data:", reviewData);

            navigate("/review", {
                state: reviewData,
            });
        } catch (error) {
            console.error("요청 중 오류가 발생했습니다.", error);
        }
    };

    const characterImages = [
        { src: curious, name: "궁금해" },
        { src: happy, name: "기분좋아" },
        { src: amazed, name: "놀라워" },
        { src: disappointed, name: "마음에 안들어" },
        { src: love, name: "사랑이야" },
        { src: sad, name: "슬퍼" },
        { src: excited, name: "신나" },
        { src: hurt, name: "아파" },
        { src: dizzy, name: "어질어질해" },
        { src: cool, name: "역시 멋져" },
        { src: angry, name: "화나" },
    ];

    const today = new Date().toISOString().split("T")[0]; // 현재 날짜를 'YYYY-MM-DD' 형식으로 얻기

    return (
        <S.MainWrapper>
            <DatePickerWrapper>
                <label htmlFor="diary-date">날짜를 선택하세요</label>
                <DatePicker
                    id="diary-date"
                    type="date"
                    placeholder="날짜를 선택하세요"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    max={today} // 미래 날짜 선택 제한
                />
            </DatePickerWrapper>
            <ImageContainer>
                <BoxImage src={selectedEmotion ? selectedEmotion.src : box} alt="Box" onClick={handleBoxClick} />
                <TextContainer>
                    <ScribbleImage src={scribble} alt="Scribble" />
                    <SmallText>오늘의 감정 pick!</SmallText>
                </TextContainer>
            </ImageContainer>
            <DiaryInput
                placeholder="오늘의 하루는 어땠는지 기록해주세요 :)"
                value={diaryText}
                onChange={(e) => setDiaryText(e.target.value)}
            />
            <AnalyzeButton onClick={handleAnalyzeClick}>분석하기</AnalyzeButton>
            {isModalOpen && (
                <ModalBackground>
                    <ModalContent>
                        <h2>오늘의 감정이를 선택해주세요</h2>
                        <CharacterGrid>
                            {characterImages.map((character) => (
                                <CharacterItem key={character.name}>
                                    <CharacterImage
                                        src={character.src}
                                        alt={character.name}
                                        onClick={() => handleCharacterSelect(character)}
                                    />
                                    <CharacterLabel>{character.name}</CharacterLabel>
                                </CharacterItem>
                            ))}
                        </CharacterGrid>
                        <CloseButton onClick={() => setIsModalOpen(false)}>닫기</CloseButton>
                    </ModalContent>
                </ModalBackground>
            )}
        </S.MainWrapper>
    );
};

export default Diary;
