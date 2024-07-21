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

export const LogoWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 30%;
  }
`;

export const Logo = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 18px;
  background-color: lightgray;
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
  cursor: pointer;
  background-color: transparent;
  padding: 0;

  & img {
    width: 100%;
    height: auto;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 50px;
  }
`;

export const AnimationWrapper = styled.div`
  text-align: center;
  font-size: 24px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
