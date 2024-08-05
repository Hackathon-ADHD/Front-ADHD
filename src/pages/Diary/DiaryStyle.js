import styled from "styled-components";

export const DatePickerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

export const DatePicker = styled.input`
    padding: 10px;
    font-size: 16px;
    background-color: #d9d9d9;
    color: #4f4f4f;
    border: none;
    border-radius: 10px;
    margin-top: 5px;
    width: 200px;
    text-align: center;

    &::placeholder {
        color: #4f4f4f;
    }

    &:focus {
        outline: none;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 20px;
`;

export const BoxImage = styled.img`
    width: 26%;
    cursor: pointer;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    position: relative;
`;

export const ScribbleImage = styled.img`
    position: relative;
`;

export const SmallText = styled.span`
    font-size: 12px;
    position: absolute;
    top: -10px;
    right: -40px;
`;

export const DiaryInput = styled.textarea`
    width: 95%;
    height: 350px;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 20px;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    resize: none;

    &:focus {
        outline: none;
    }
`;

export const AnalyzeButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #d9d9d9;
    color: black;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: #b0afaf;
    }
`;

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 70%;
    max-width: 800px;
    max-height: 600px;
`;

export const CharacterGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-top: 10px;
`;

export const CharacterItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CharacterImage = styled.img`
    width: 90px;
    height: 85px;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
        border: 2px solid #4f4f4f;
    }
`;

export const CharacterLabel = styled.span`
    margin-top: 5px;
    font-size: 14px;
    color: #4f4f4f;
`;

export const CloseButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #d9d9d9;
    color: black;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: #b0afaf;
    }
`;
