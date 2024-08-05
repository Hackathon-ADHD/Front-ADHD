import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import axiosInstance from "../../services/axiosInstance";
import {
  isLoggedInState,
  profileNameState,
} from "../../recoils/atoms/loginState";
import {
  SignUpWrapper,
  SignUpLeft,
  SignUpRight,
  SignUpTextWrapper,
  SignUpLogoWrapper,
  SignUpText,
  InputField,
  SubmitButton,
  InputLabel,
  InputContainer,
  GuideText,
} from "./SignupStyle";
import signUpLogo from "../../assets/images/LoginLogoImage.png";
import cake from "../../assets/images/cake.png";

const Signup = () => {
  const [profileName, setProfileName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [step, setStep] = useState(1);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setProfileNameState = useSetRecoilState(profileNameState);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    if (step === 1) {
      setProfileName(e.target.value);
    } else {
      setBirthdate(e.target.value);
    }
  };

  const handleSubmit = () => {
    if (step === 1) {
      if (profileName.trim()) {
        setStep(2);
      }
    } else {
      if (birthdate.trim()) {
        const postData = {
          nickname: profileName, // 변수명 변경
          birthDay: birthdate, // 변수명 변경
        };

        axiosInstance
          .post("/login/complete-registration", postData)
          .then((response) => {
            setIsLoggedIn(true);
            setProfileNameState(profileName);
            navigate("/"); // 기본 라우터로 이동
          })
          .catch((error) => {
            console.error(
              "There was an error completing the registration!",
              error
            );
          });
      }
    }
  };

  return (
    <SignUpWrapper>
      <SignUpLeft>
        <SignUpTextWrapper>
          {step === 1 ? (
            <>
              <SignUpText>
                <p>프로필 이름만 입력하면 가입 완료입니다</p>
              </SignUpText>
              <InputContainer>
                <InputField
                  type="text"
                  placeholder="닉네임"
                  value={profileName}
                  onChange={handleInputChange}
                />
                <InputLabel>님</InputLabel>
              </InputContainer>
              <GuideText>
                닉네임은 한글/영문 4자~20자 이내로 작성해주세요.
              </GuideText>
            </>
          ) : (
            <>
              <SignUpText>
                <p>생일을 입력해주시면, 매년 표시해드려요!</p>
              </SignUpText>
              <img src={cake} alt="cake" style={{ width: "250px" }} />
              <InputContainer>
                <InputField
                  type="date"
                  value={birthdate}
                  onChange={handleInputChange}
                />
              </InputContainer>
              <GuideText>생년월일을 선택해주세요.</GuideText>
            </>
          )}
          <SubmitButton onClick={handleSubmit}>다음</SubmitButton>
        </SignUpTextWrapper>
      </SignUpLeft>
      <SignUpRight>
        <SignUpLogoWrapper>
          <img src={signUpLogo} alt="signup-logo" />
        </SignUpLogoWrapper>
      </SignUpRight>
    </SignUpWrapper>
  );
};

export default Signup;
