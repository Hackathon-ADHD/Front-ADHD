import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupNickname = () => {
  const [userInfo, setUserInfo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const idToken = localStorage.getItem("idToken");
    if (idToken) {
      try {
        const decodedToken = jwtDecode(idToken);
        const userInfoText = `
          이메일: ${decodedToken.email}
          이름: ${decodedToken.name}
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

export default SignupNickname;
