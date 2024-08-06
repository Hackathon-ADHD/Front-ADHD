import styled from "styled-components";

export const DiaryContentContainer = styled.div`
    width: 60%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;

    @media (max-width: 1200px) {
        width: 80%;
    }

    @media (max-width: 768px) {
        width: 90%;
        min-height: 250px;
    }

    @media (max-width: 480px) {
        width: 95%;
        min-height: 200px;
    }
`;

export const DiaryHeader = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: auto;
    @media (max-width: 768px) {
        padding: 10px;
    }
`;

export const CharacterImageWrapper = styled.div`
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 20px;
    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

export const DateText = styled.div`
    width: 50%;
    flex: 1;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

export const CharacterImage = styled.img`
    width: 80px;
    height: 75px;
    margin-top: 15px;
    @media (max-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media (max-width: 480px) {
        width: 60px;
        height: 60px;
    }
`;

export const MenuIconWrapper = styled.div`
    width: 25%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    margin-right: 20px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        margin-right: 10px;
    }
`;

export const ContentText = styled.div`
    font-size: 1rem;
    text-align: center;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        font-size: 0.9rem;
    }

    @media (max-width: 480px) {
        font-size: 0.8rem;
    }
`;

export const AnalysisShowButton = styled.div`
    margin-top: 20px;
    border: none;
    background-color: #d9d9d9;
    padding: 10px 16px;
    border-radius: 8px;
    cursor: pointer;
`;
