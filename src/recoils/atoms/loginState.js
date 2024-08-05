import { atom } from "recoil";

export const isLoggedInState = atom({
    key: "isLoggedInState",
    default: false,
});
export const profileNameState = atom({
    key: "profileNameState",
    default: "",
});

//토큰 상태 정의
// export const tokenState = atom({
//     key: "tokenState", //unique ID
//     default: localStorage.getItem("token") || "", //초기값을 로컬스토리지에서 가져옴
// });
