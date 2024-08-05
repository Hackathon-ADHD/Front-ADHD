import { atom } from "recoil";

// 사용자의 인증 토큰 상태를 관리하는 atom
export const tokenState = atom({
    key: "tokenState",
    default: localStorage.getItem("token") || "", // 초기값을 로컬스토리지에서 가져옴
});

// 사용자의 로그인 상태를 관리하는 atom
export const isLoggedInState = atom({
    key: "isLoggedInState",
    default: !!localStorage.getItem("token"), // 토큰이 있으면 true, 없으면 false
});
