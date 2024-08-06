import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { formatDate } from "../../utils/formatter";
import Review from "../Diary/DiaryReview";

const OneYearAgoToday = () => {
    const [diaries, setDiaries] = useState([]);
    const [analysis, setAnalysis] = useState([]);

    useEffect(() => {
        const fetchDiariesAndAnalysis = async () => {
            const date = new Date();
            const formattedDate = formatDate(date);
            const token = localStorage.getItem("kakaoAccessToken");

            try {
                const response = await axios
                    .get(`https://soogo.ba-ro.co.kr/api/diary/last-year?date=${formattedDate}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    .then((response) => {
                        console.log(response);
                        const fetchedDiaries = response.data.body.data;
                        setDiaries(fetchedDiaries);

                        const analysisPromises = fetchedDiaries.map((diary) => getAnalysisByDiaryId(diary.id));
                        return Promise.all(analysisPromises);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .then((analysisResults) => {
                        setAnalysis(analysisResults.flat());
                    });

                console.log("Diaries response:", response);
            } catch (error) {
                console.error("Error fetching diaries and analysis", error);
            }
        };

        fetchDiariesAndAnalysis();
    }, []);

    useEffect(() => {
        console.log(diaries);
    }, [diaries]);

    return (
        <div style={{ paddingLeft: "20px" }}>
            <h1>1년 전 나의 오늘</h1>
            <Review
                diaryFeedback={diaries.analyzedContents}
                characterImg={diaries.emotion}
                songRecommendation={diaries.recommendSongs}
                dateType="작년"
                showHomeButton={true}
            />
        </div>
    );
};

const getAnalysisByDiaryId = async (diaryId) => {
    try {
        const response = await axios.get(`/diary/analysis/${diaryId}`);
        console.log(`Analysis for diary ${diaryId}:`, response);
        return response.data.body.data;
    } catch (error) {
        console.error(`Error fetching analysis for diary ${diaryId}`, error);
        return [];
    }
};

export default OneYearAgoToday;
