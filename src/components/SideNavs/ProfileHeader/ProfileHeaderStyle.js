import styled from "styled-components";

export const SideBarLogoNicknameWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  color: black;
  border-bottom: 1px solid #ccc;
  padding-top: 20px;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 70%;

  & img {
    flex: 0 0 20%;
    height: auto;
    max-height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const NicknameWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
`;

export const NicknameText = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const QuestionText = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-top: 5px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  span,
  div {
    font-size: 0.7rem;
    font-weight: bold;
    color: black;
    margin-left: 10px;
    cursor: pointer;

    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 10px;
    }
  }
`;
