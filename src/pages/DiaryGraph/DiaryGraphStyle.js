import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Subtitle = styled.h3`
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
`;

export const ChartWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  border: 2px solid #004d40;
  padding: 10px;
  background-color: #ffffff;
`;

export const MessageWrapper = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border: 2px solid #004d40;
  border-radius: 8px;
  text-align: center;
`;

export const Message = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
