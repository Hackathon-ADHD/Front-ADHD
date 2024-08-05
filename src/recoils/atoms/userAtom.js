import { atom } from "recoil";

// 사용자의 프로필 정보를 관리하는 atom
export const userProfileState = atom({
    key: "userProfileState",
    default: {
        name: "",
        birthdate: "",
    }, // 기본 사용자 프로필 정보
});

// 사용자 ID를 관리하는 atom
export const userIdState = atom({
    key: "userIdState",
    default: null, // 초기값은 null
});

export const selectedEmotionState = atom({
    key: "selectedEmotionState",
    default: null,
});
