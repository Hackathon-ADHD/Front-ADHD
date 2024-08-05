import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupTest = () => {
  const [userInfo, setUserInfo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const googleIdToken = localStorage.getItem("googleIdToken");
    const kakaoAccessToken = localStorage.getItem("kakaoAccessToken");
    if (googleIdToken) {
      try {
        const decodedToken = jwtDecode(googleIdToken);
        const userInfoText = `
          이메일: ${decodedToken.email}
          이름: ${decodedToken.name}
        `;
        setUserInfo(userInfoText);
      } catch (error) {
        console.error(error);
      }
    } else if (kakaoAccessToken) {
      try {
        const decodedToken = jwtDecode(kakaoAccessToken);
        const userInfoText = `
          닉네임: ${decodedToken.account_email}
        `;
        setUserInfo(userInfoText);
      } catch (error) {
        console.error(error);
      }
    }
  }, [navigate]);
  return (
    <div>
      <h1>로그인 성공 확인용</h1>
      <textarea
        value={userInfo}
        readOnly
        style={{ width: "100%", height: "200px" }}
      ></textarea>
    </div>
  );
};

export default SignupTest;
