import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    InputUnderline,
    GuideText,
} from "./SignupStyle";
import signUpLogo from "../../assets/images/LoginLogoImage.png";

const Signup = () => {
    const [profileName, setProfileName] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setProfileName(e.target.value);
    };

    const handleSubmit = () => {
        if (profileName.trim()) {
            navigate("/welcome");
        }
    };

    return (
        <SignUpWrapper>
            <SignUpLeft>
                <SignUpTextWrapper>
                    <SignUpText>
                        <p>프로필 이름만 입력하면 가입 완료입니다</p>
                    </SignUpText>
                    <InputContainer>
                        <InputField type="text" placeholder="닉네임" value={profileName} onChange={handleInputChange} />
                        <InputLabel>님</InputLabel>
                    </InputContainer>
                    <GuideText>닉네임은 한글/영문 4자~20자 이내로 작성해주세요.</GuideText>
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
