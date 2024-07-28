import styled from "styled-components";
import {
  LoginWrapper,
  LoginLeft,
  LoginRight,
  LoginLogoWrapper,
} from "../Login/LoginStyle"; // 경로가 올바른지 확인

export const SignUpWrapper = styled(LoginWrapper)``;
export const SignUpLeft = styled(LoginLeft)``;
export const SignUpRight = styled(LoginRight)``;
export const SignUpTextWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* 세로로 위에서부터 배치 */
  @media (max-width: 768px) {
    height: 30%;
  }
`;
export const SignUpLogoWrapper = styled(LoginLogoWrapper)``;

export const SignUpText = styled.div`
  font-family: "Roboto slab";
  //font-weight: bold; /* 폰트 굵게 변경 */
  font-size: 24px;
  margin-bottom: 40px;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black; /* 밑에만 테두리를 추가 */
`;

export const InputLabel = styled.span`
  margin-left: 10px;
  font-size: 24px;
`;

export const InputField = styled.input`
  width: 290px;
  height: 24px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 19px;
  background-color: #ececec;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    width: 70%;
    height: 35px;
    font-size: 16px;
  }
`;

export const GuideText = styled.p`
  font-size: 12px; /* 작은 글씨로 변경 */
  color: gray;
`;

export const SubmitButton = styled.button`
  width: 70%;
  height: 70px;
  margin-top: 200px; /* 버튼을 더 아래로 내림 */
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background-color: #f0f0f0;
  color: black;
  border-radius: 10px;
  font-size: 24px;

  &:hover {
    background-color: #e0e0e0;
  }
`;
