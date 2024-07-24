import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LoginLeft = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    order: 2;
  }
`;

export const LoginRight = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background-color: #d8ebf2;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    order: 1;
  }
`;

export const LoginTextWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 30%;
  }
`;

export const LoginText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Gowun Dodum", sans-serif;
  font-weight: 700;
  font-size: 25px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const LoginButtonWrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 70%;
  }
`;

export const SocialLoginButton = styled.button`
  width: 230px;
  height: 60px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: red;
  padding: 0;

  & img {
    width: 100%;
    height: 60px;

    pointer-events: none;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 50px;
  }
`;

export const LoginLogoWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    height: 50%;
  }
`;
